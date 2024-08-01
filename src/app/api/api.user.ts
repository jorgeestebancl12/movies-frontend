import Api, { URI } from "./api";

function get() {
  return Api.get(URI.user.get, {}, {}, {}, true);
}

function update() {
  return Api.put(URI.user.update, {}, {}, {}, {}, true);
}

function remove() {
  return Api.delete(URI.user.remove, {}, {}, {}, true);
}

export default { get, update, remove };
