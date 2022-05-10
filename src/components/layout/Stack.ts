import styled from "styled-components";

import { Box } from "./Box";

export const HStack = styled(Box)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const VStack = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
