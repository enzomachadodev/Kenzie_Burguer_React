import styled from "styled-components";

export const ContainerCart = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
	background-color: #f5f5f5;
	overflow: hidden;

	.cart-title {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 40px;
		background-color: #27ae60;
		color: #f5f5f5;
		font-size: 1.1rem;
	}

	.cart-list {
		width: 100%;
		min-height: 300px;
		max-height: 300px;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.75rem;
		gap: 0.75rem;
	}

	@media (min-width: 768px) {
		max-width: 30%;
	}
`;
