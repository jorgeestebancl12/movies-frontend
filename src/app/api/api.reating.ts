import Api, { URI } from "./api";

function get() {
  return Api.get(URI.reating.get, {}, {}, {}, true);
}

function create(parameters: any) {
  return Api.put(URI.reating.create, parameters, {}, {}, {}, true);
}

export default { get, create };
