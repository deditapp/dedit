import {
	Box,
	Button,
	Container,
	Divider,
	FormLabel,
	Heading,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";

const Login: React.FC = () => {
	return (
		<Container alignItems="center">
			<VStack spacing={5} marginTop={10}>
				<VStack marginBottom={5}>
					<Heading>Welcome back!</Heading>
					<Text>
						We&apos;re so glad to see you again. Pick a login option from below and we can get you
						started right away.
					</Text>
				</VStack>
				<VStack borderRadius="5" padding={4} spacing={2} width="60%">
					<Box width="100%">
						<FormLabel htmlFor="email">Email</FormLabel>
						<Input id="email" type="email" placeholder="you@example.com"></Input>
					</Box>
					<Box width="100%">
						<FormLabel htmlFor="password">Password</FormLabel>
						<Input id="password" type="password" placeholder="Password"></Input>
					</Box>
					<Input width="100%" type="submit" value="Login"></Input>
				</VStack>
				<Divider width="200px" />
				<VStack borderRadius="5" padding={8} spacing={2} width="60%">
					<Button>Sign in with Google</Button>
				</VStack>
			</VStack>
		</Container>
	);
};

export default Login;
