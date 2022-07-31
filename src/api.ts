import axios from "axios";

import { DocumentUpdatePayload } from "@dedit/models/dist/v1/document";
import { Document } from "@dedit/models/src/v1";

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
export const updateDocument = (id: string, payload: DocumentUpdatePayload) =>
	API.patch<string>(`/v1/documents/${id}`, payload);

export const getDocument = (id: string) => API.get<Document>(`/documents/${id}`);
