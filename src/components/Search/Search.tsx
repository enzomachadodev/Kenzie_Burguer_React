import { useCallback, useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { SearchContext } from "../../context/Search/SearchContext";
import { StyledSearch } from "./style";

function Search() {
	const [pesquisa, setPesquisa] = useState<string>("");

	const { setSearchProducts } = useContext(SearchContext);
	const { products } = useContext(ProductsContext);

	const handleSubmit = (e: Event) => {
		e.preventDefault();
	};

	useEffect;

	return (
		<StyledSearch onSubmit={handleSubmit}>
			<input type="text" placeholder="Digitar Pesquisa" value={pesquisa} required />
			<button type="submit">Pesquisar</button>
		</StyledSearch>
	);
}

export default Search;
