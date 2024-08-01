import Api, { URI } from "./api";

function get(limit: number, page: number) {
  return Api.get(URI.favorite.get, { limit, page }, {}, {}, true);
}

function create(parameters: any) {
  return Api.put(URI.favorite.create, parameters, {}, {}, {}, true);
}

function remove(id: string) {
  return Api.delete(URI.favorite.remove, { id }, {}, {}, true);
}

export default { get, create, remove };
