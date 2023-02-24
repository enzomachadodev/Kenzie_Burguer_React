import styled from "styled-components";

export const ContainerCart = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
	background-color: #f5f5f5;
	overflow: hidden;

	h3 {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 40px;
		background-color: #27ae60;
		color: #f5f5f5;
		font-size: 1.1rem;
	}

	@media (min-width: 768px) {
		max-width: 30%;
	}
`;

export const ListCart = styled.ul`
	width: 100%;
	min-height: 300px;
	max-height: 300px;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.75rem;
	gap: 0.75rem;
`;

export const TotalCart = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 0rem 0.75rem 0.75rem 0.75rem;

	div {
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-top: 2px solid #e0e0e0;
		background-color: #f5f5f5;
	}

	strong {
		font-weight: 600;
		font-size: 14px;
		color: #333333;
	}

	span {
		font-weight: 600;
		font-size: 14px;
		color: #828282;
	}

	button {
		width: 100%;
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;

		background-color: #e0e0e0;
		border: none;
		border-radius: 8px;
		color: #828282;
		font-weight: 600;
		font-size: 1rem;
		transition: box-shadow 0.15s ease, transform 0.15s ease;
	}

	button:hover {
		box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%),
			0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%),
			inset 0px -0.1em 0px darkgrey;
		transform: translateY(-0.1em);
	}

	button:active {
		box-shadow: inset 0px 0.1em 0.6em darkgray;
		transform: translateY(0em);
	}
`;

export const EmptyCart = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;

	h3 {
		font-weight: 700;
		font-size: 18px;
		color: #333333;
		background-color: transparent;
	}

	small {
		font-weight: 400;
		font-size: 14px;
		color: #828282;
	}
`;

export const ProductCart = styled.li`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	height: 75px;
	background-color: transparent;
`;

export const DivImg = styled.div`
	height: 75px;
	width: 75px;
	overflow: hidden;
	background-color: #e0e0e0;
	border-radius: 8px;

	img {
		height: 100%;
	}
`;

export const DivName = styled.div`
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
`;

export const DivBtn = styled.div`
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
`;
