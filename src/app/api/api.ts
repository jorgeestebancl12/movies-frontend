// Core
import axios from "axios";

// Storage
import { get_token } from "../utilities/storage.utility";

// Define the services
export const URI = {
  auth: {
    login: "auth/login",
    register: "auth/register",
    session: "auth/session",
  },
  user: {
    get: "users",
    update: "users",
    remove: "users",
  },
  movie: {
    get: "movies",
    getOne: "movies/:id",
    getRecommendation: "movies/:id/recommendations",
  },
  reating: {
    create: "reatings",
    get: "reatings",
  },
  favorite: {
    create: "favorites",
    get: "favorites",
    remove: "favorites/:id",
  },
  parameters: {
    gender: "parameters/genders",
  },
};

class Api {
  private url = import.meta.env.VITE_SERVICE_URL;
  private security = {};

  private config(security?: boolean) {
    if (security)
      this.security = {
        Authorization: `Bearer ${get_token()}`,
      };
  }

  private replace_uri(URI: string, params: { [key: string]: string } = {}) {
    if (Object.keys(params))
      Object.keys(params).map((item) => {
        URI = URI.replace(`:${item}`, params[item]);
        return true;
      });

    return URI;
  }

  private conver_http_file(body: { [key: string]: string | Blob }) {
    const formData = new FormData();
    Object.keys(body).map((item) => formData.append(`${item}`, body[item]));
    return {
      form_data: formData,
      multipart: {
        "Content-Type": "multipart/form-data",
      },
    };
  }

  get(
    path: string,
    params = {},
    query = {},
    headers = {},
    security = true,
    responseBuffer = false
  ) {
    this.config(security);

    let _responseBuffer = {};

    if (responseBuffer) _responseBuffer = { responseType: "arraybuffer" };

    return axios.get(`${this.url}/${this.replace_uri(path, params)}`, {
      ..._responseBuffer,
      params: query,
      headers: {
        ...headers,
        ...this.security,
      },
    });
  }

  post(
    path: string,
    body = {},
    params = {},
    query = {},
    headers = {},
    security = true,
    file = false
  ) {
    this.config(security);

    if (file) {
      const { form_data, multipart } = this.conver_http_file(body);
      body = form_data;
      headers = {
        headers,
        ...multipart,
      };
    }

    return axios.post(`${this.url}/${this.replace_uri(path, params)}`, body, {
      params: query,
      headers: {
        ...headers,
        ...this.security,
      },
    });
  }

  put(
    path: string,
    body = {},
    params = {},
    query = {},
    headers = {},
    security = true,
    file = false
  ) {
    this.config(security);

    if (file) {
      const { form_data, multipart } = this.conver_http_file(body);
      body = form_data;
      headers = {
        headers,
        ...multipart,
      };
    }

    return axios.put(`${this.url}/${this.replace_uri(path, params)}`, body, {
      params: query,
      headers: {
        ...headers,
        ...this.security,
      },
    });
  }

  patch(
    path: string,
    body = {},
    params = {},
    query = {},
    headers = {},
    security = true,
    file = false
  ) {
    this.config(security);

    if (file) {
      const { form_data, multipart } = this.conver_http_file(body);
      body = form_data;
      headers = {
        headers,
        ...multipart,
      };
    }

    return axios.patch(`${this.url}/${this.replace_uri(path, params)}`, body, {
      params: query,
      headers: {
        ...headers,
        ...this.security,
      },
    });
  }

  delete(path: string, params = {}, query = {}, headers = {}, security = true) {
    this.config(security);
    return axios.delete(`${this.url}/${this.replace_uri(path, params)}`, {
      params: query,
      headers: {
        ...headers,
        ...this.security,
      },
    });
  }
}

// Export the instance
export default new Api();
