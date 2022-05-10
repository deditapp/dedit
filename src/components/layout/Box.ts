import styled from "styled-components";
import {
	flex,
	flexbox,
	FlexboxProps,
	FlexProps,
	layout,
	LayoutProps,
	position,
	PositionProps,
	space,
	SpaceProps,
} from "styled-system";

export type BoxProps = PositionProps & SpaceProps & LayoutProps & FlexProps & FlexboxProps;

export const Box = styled.div<BoxProps>`
	${position}
	${space}
	${layout}
	${flex}
	${flexbox}
`;
