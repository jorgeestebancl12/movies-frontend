import Api, { URI } from "./api";

function start(body: any) {
  return Api.post(URI.auth.login, body, {}, {}, {}, false);
}

function session() {
  return Api.get(URI.auth.register, {}, {}, {}, true);
}

export default { start, session };
