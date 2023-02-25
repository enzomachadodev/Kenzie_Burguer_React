import { StyledSearch } from "./style";

function Search() {
	return (
		<StyledSearch>
			<input type="text" placeholder="Digitar Pesquisa" value={pesquisa} required />
			<button type="submit">Pesquisar</button>
		</StyledSearch>
	);
}

export default Search;
