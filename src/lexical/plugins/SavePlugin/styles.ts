import styled from "styled-components";

export const Button = styled.button`
	background: #4287f5;
	color: white;

	border: none;
	border-radius: 10px;
	padding: 10px;

	transition: all 0.1s;

	&:hover {
		cursor: pointer;
		background: #669aed;
	}

	&:active {
		background: #568ee8;
	}
`;
