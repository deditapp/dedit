import axios from "axios";
import {
	getAuth,
	signInWithEmailAndPassword as internalSignInWithEmailAndPassword,
} from "firebase/auth";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API } from "../../api";

export const login = createAsyncThunk("user/login", async (username: string) => {});

interface UserSignedInState {
	loggedIn: true;
	/**
	 * The internal Dedit ID of the user.
	 */
	uuid: string;
	/**
	 * The internal Firebase ID of the user.
	 */
	firebaseUid: string;
}

interface UserSinedOutState {
	loggedIn: false;
}

type UserState = UserSignedInState | UserSinedOutState;

const signInWithEmailAndPassword = createAsyncThunk(
	"user/signInWithEmailAndPassword",
	async ({ email, password }: { email: string; password: string }) => {
		const user = await internalSignInWithEmailAndPassword(getAuth(), email, password);
	}
);

const createUserWithEmailAndPassword = createAsyncThunk(
	"user/createUserWithEmailAndPassword",
	async ({ email, password }: { email: string; password: string }) => {
		const user = await API.post("/users/v1/register", { email, password });
	}
);

export const user = createSlice({
	name: "user",
	initialState: {
		loggedIn: true,
		firebaseUid: "0",
		uuid: "1c00e94a-bd71-4bfa-ad43-6eed8579189e",
	} as UserState,
	reducers: {},
	extraReducers: (builder) => {
		// signInWithEmailAndPassword
		builder.addCase(signInWithEmailAndPassword.fulfilled, () => {});
		// createUserWithEmailAndPassword
		builder.addCase(createUserWithEmailAndPassword.fulfilled, () => {});
	},
});
