import styled from "styled-components";

export const ProductCart = styled.li`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	height: 75px;
	background-color: transparent;

	.div-img {
		height: 75px;
		width: 75px;
		overflow: hidden;
		background-color: #e0e0e0;
		border-radius: 8px;

		img {
			height: 100%;
		}
	}

	.div-name {
		display: flex;
		width: 58%;
		height: 100%;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: 0.5rem;

		h3 {
			color: #333333;
			font-weight: 700;
			font-size: 18px;
			background-color: transparent;
			width: auto;
			height: auto;
		}

		small {
			font-weight: 400;
			font-size: 12px;
			color: #828282;
		}
	}

	.div-btn {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;

		button {
			border: none;
			background-color: transparent;
			font-weight: 500;
			font-size: 12px;
			color: #bdbdbd;
		}

		button:hover {
			color: red;
		}
	}
`;

export const DivImg = styled.div``;

export const DivName = styled.div``;

export const DivBtn = styled.div``;
