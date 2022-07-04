import { configureStore } from "@reduxjs/toolkit";

import { user } from "./features/user";

export const store = configureStore({
	reducer: {
		user: user.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./hooks";
