import ProductCard from "../ProductCard";
import { useContext } from "react";

import { StyledProductsList } from "./style";
import { IProducts, ProductsContext } from "../../context/ProductsContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import NotFound from "../NotFound";

const ProductsList = () => {
	const { searchProducts, loading } = useContext(ProductsContext);
	const { addProductCart } = useContext(ShoppingCartContext);

	return (
		<StyledProductsList>
			{loading ? (
				<span>loading...</span>
			) : searchProducts.length == 0 ? (
				<NotFound />
			) : (
				searchProducts.map((elem) => {
					return <ProductCard key={elem.id} product={elem} addCart={addProductCart} />;
				})
			)}
		</StyledProductsList>
	);
};

export default ProductsList;
