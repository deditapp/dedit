import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAppSelector } from "../redux";

/**
 * Hook that triggers a router redirect
 */
export const useRedirectIfNotLoggedIn = () => {
	const router = useRouter();
	const loggedIn = useAppSelector((state) => state.user.loggedIn);
	useEffect(() => {
		if (!loggedIn) {
			router.push("/login");
		}
	}, [router, loggedIn]);
};
