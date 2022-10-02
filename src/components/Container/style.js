import styled from "styled-components";

export const Container = styled.div`
	width: auto;
	max-width: 1200px;
	margin: 0 auto;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
	}
`;
