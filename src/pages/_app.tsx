import { AppProps } from "next/app";
import { Provider } from "react-redux";

import { ChakraProvider } from "@chakra-ui/react";

import { store } from "../redux";

const App = ({ Component, pageProps }: AppProps) => (
	<ChakraProvider>
		<Provider store={store}>
			<Component {...pageProps} />;
		</Provider>
	</ChakraProvider>
);

export default App;
