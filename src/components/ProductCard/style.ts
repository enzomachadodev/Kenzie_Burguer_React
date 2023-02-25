import styled from "styled-components";

export const StyledProductCard = styled.li`
	height: 300px;
	display: flex;
	flex-direction: column;
	border: 2px solid #e0e0e0;
	border-radius: 8px;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		min-width: 240px;
		margin-left: 1rem;
	}

	@media (min-width: 768px) {
		width: calc(100% / 2.1);
	}

	@media (min-width: 900px) {
		width: calc(100% / 3.1);
	}

	.div-img {
		background-color: #f5f5f5;
		width: 100%;
		height: 40%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		img {
			height: 100%;
		}
	}

	.div-info {
		width: 100%;
		height: 60%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h3 {
			color: #333333;
			font-size: 1rem;
			font-weight: 700;
		}

		small {
			color: #828282;
			font-weight: 400;
			font-size: 12px;
		}

		span {
			color: #27ae60;
			font-size: 14px;
			font-weight: 600;
		}

		button {
			width: fit-content;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 0.75rem;
			background-color: #27ae60;
			color: #f5f5f5;
			font-weight: 600;
			font-size: 14px;
			border: none;
			border-radius: 8px;
			box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%),
				0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%),
				inset 0px -0.01em 0px rgb(58 65 111 / 50%);
			transition: box-shadow 0.15s ease, transform 0.15s ease;
		}

		button:hover {
			box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
				0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px green;
			transform: translateY(-0.1em);
		}

		button:active {
			box-shadow: inset 0px 0.1em 0.6em green;
			transform: translateY(0em);
		}
	}
`;
