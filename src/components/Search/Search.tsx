<<<<<<< HEAD
=======
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { StyledSearch } from "./style";

function Search() {
	const [search, setSearch] = useState<string>("");
	const { products, setSearchProducts } = useContext(ProductsContext);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSubmit: React.FormEventHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search === "") {
			setSearchProducts(products);
		} else {
			setSearchProducts(
				products.filter(
					(e) =>
						e.name.toLowerCase().includes(search.toLowerCase()) ||
						e.category.toLowerCase().includes(search.toLowerCase())
				)
			);
			setSearch("");
		}
	};

	return (
		<StyledSearch onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Digitar Pesquisa"
				value={search}
				onChange={handleInputChange}
			/>
			<button type="submit">Pesquisar</button>
		</StyledSearch>
	);
}

export default Search;
>>>>>>> 8edeb97cf59f50a2fcfe7f310364abf8ddb7444d
