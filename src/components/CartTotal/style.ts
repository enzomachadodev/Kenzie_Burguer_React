import styled from "styled-components";

export const StyledCartTotal = styled.div`
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
		box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%),
			inset 0px -0.1em 0px darkgrey;
		transform: translateY(-0.1em);
	}

	button:active {
		box-shadow: inset 0px 0.1em 0.6em darkgray;
		transform: translateY(0em);
	}
`;
