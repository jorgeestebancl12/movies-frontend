import Api, { URI } from "./api";

function getGenders() {
  return Api.get(URI.parameters.gender, {}, {}, {}, false);
}

export default { getGenders };
