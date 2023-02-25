import styled from "styled-components";

export const StyledSearch = styled.form`
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border: 2px solid #e0e0e0;
	background-color: #ffffff;
	padding: 0.5rem 1rem;
	border-radius: 8px;

	input {
		border: none;
		width: auto;
		background-color: transparent;
	}

	input::placeholder {
		color: #e0e0e0;
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
			0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
		transition: box-shadow 0.15s ease, transform 0.15s ease;
	}

	button:hover {
		box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%),
			inset 0px -0.1em 0px green;
		transform: translateY(-0.1em);
	}

	button:active {
		box-shadow: inset 0px 0.1em 0.6em green;
		transform: translateY(0em);
	}
`;
