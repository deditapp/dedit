import { Api } from "@dedit/api";

import { API_ENDPOINT } from "./env";

export const API = new Api({ baseUrl: API_ENDPOINT });
