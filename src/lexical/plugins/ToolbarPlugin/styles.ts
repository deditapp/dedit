import styled from "styled-components";

export const ToolbarContainer = styled.div`
	display: flex;
`;

export const ToolbarButtonGroup = styled.div`
	display: flex;
	margin: 0 5px;

	> * {
		margin-right: 10px;
	}
`;

export const ToolbarButton = styled.button<{ disabled?: boolean }>`
	width: 30px;
	height: 30px;
	border: none;
	border-radius: 25%;
	background: ${(props) => (props.disabled ? "#ddd" : "white")};

	transition: background 0.1s ease-in-out;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
		background: ${(props) => (props.disabled ? "#ddd" : "#eee")};
	}
`;

export const Divider = styled.div`
	width: 1px;
	background: #eee;
`;
