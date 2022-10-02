import { StyledHeader, StyledForm } from "./style";

const Header = ({ setPesquisa }) => {
	return (
		<StyledHeader>
			<div>
				<h1>
					Burguer<span>Kenzie</span>
				</h1>
				<StyledForm>
					<input
						type="text"
						placeholder="Digitar Pesquisa"
						onChange={(event) => setPesquisa(event.target.value)}
						required
					/>
					<button type="submit">Pesquisar</button>
				</StyledForm>
			</div>
		</StyledHeader>
	);
};

export default Header;
