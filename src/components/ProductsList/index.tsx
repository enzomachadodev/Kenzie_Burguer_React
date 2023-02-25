import ProductCard from "../ProductCard";
import { useContext } from "react";

import { List } from "./style";
import { SearchContext } from "../../context/Search/SearchContext";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { IProducts } from "../../interfaces/interfaces";

const ProductsList = () => {
	const { setCartList, cartList, products } = useContext(ProductsContext);
	const { searchProducts } = useContext(SearchContext);

	const addCart = (elem: IProducts) => {
		setCartList(
			cartList.map((prod: IProducts) => {
				if (prod.name === elem.name) {
					prod.quant!++;
					return prod;
				} else {
					return prod;
				}
			})
		);
	};

	return (
		<>
			<List>
				<>
					{products.map((elem) => {
						return <ProductCard key={elem.id} product={elem} addCart={addCart} />;
					})}
				</>
			</List>
		</>
	);
};

export default ProductsList;
