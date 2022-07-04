import axios from "axios";

import { Document, RootBlock } from "@dedit/models/dist/v1";

import { API_ENDPOINT } from "./env";

export const API = axios.create({ baseURL: API_ENDPOINT });

/**
 * Create a new document.
 * @returns
 */
export const createDocument = () => API.post<Document>("/documents").then(({ data }) => data);

/**
 * Save a document to the server.
 */
export const saveDocument = (id: string, ast: RootBlock) =>
	API.patch<string>(`/documents/${id}`, ast);

export const getDocument = (id: string) => API.get<Document>(`/documents/${id}`);
