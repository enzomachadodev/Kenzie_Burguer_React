import styled from "styled-components";

export const StyledProductsList = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow-x: scroll;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	min-height: 310px;
	@media (min-width: 768px) {
		flex-wrap: wrap;
		overflow: unset;
		justify-content: space-between;
	}
`;
