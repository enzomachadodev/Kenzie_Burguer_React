import styled from "styled-components";

export const StyledHeader = styled.header`
	width: 100%;
	height: auto;
	padding: 1rem 0rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: #f5f5f5;

	.header-container {
		width: 100%;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 0rem 1rem;

		@media (min-width: 768px) {
			flex-direction: row;
		}
	}

	h1 {
		color: #333333;
		font-weight: 800;
		font-size: 2rem;
	}

	span {
		color: #eb5757;
		font-weight: 800;
		font-size: 1.3rem;
		margin-left: 10px;
	}
`;
