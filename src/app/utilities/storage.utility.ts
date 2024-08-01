import CryptoJS from "crypto-js";

const KEY = import.meta.env.VITE_STORAGE_KEY || "";
const SKEY = import.meta.env.VITE_STORAGE_SECRET || "";

function save_token(token: string) {
  localStorage.setItem(KEY, CryptoJS.AES.encrypt(token, SKEY).toString());
  return true;
}

function remove_token() {
  localStorage.removeItem(KEY);
  return true;
}

function get_token() {
  try {
    const value = localStorage.getItem(KEY);
    let h = null;
    if (value)
      h = CryptoJS.AES.decrypt(value, SKEY).toString(CryptoJS.enc.Utf8);
    return h;
  } catch (err) {
    console.log(err);
    remove_token();
    return false;
  }
}

export { save_token, remove_token, get_token };
