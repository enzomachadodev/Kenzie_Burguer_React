import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../../services/api";
import { IProducts, IProductsContext, IProductsProviderProps } from "../../interfaces/interfaces";

const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

const ProductsProvider = ({ children }: IProductsProviderProps) => {
	const [products, setProducts] = useState<IProducts[]>([]);
	const [loading, setLoading] = useState(false);
	const [cartList, setCartList] = useState<IProducts[]>([]);

	useEffect(() => {
		products.forEach((elem) => (elem.quant = 0));
		setCartList(products);
	}, [products]);

	useEffect(() => {
		setLoading(true);

		api.get("products")
			.then((resp) => {
				setProducts(resp.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<ProductsContext.Provider value={{ products, loading, cartList, setCartList }}>
			{children}
		</ProductsContext.Provider>
	);
};

export { ProductsProvider, ProductsContext };
