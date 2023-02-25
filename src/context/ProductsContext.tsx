import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import api from "../services/api";

export interface IProducts {
	id: number;
	name: string;
	category: string;
	price: number;
	img: string;
	quant: number | null;
}

export interface IProductsContext {
	products: IProducts[];
	searchProducts: IProducts[];
	setSearchProducts: Dispatch<SetStateAction<IProducts[]>>;
}

export interface IProductsProviderProps {
	children: React.ReactNode;
}

const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

const ProductsProvider = ({ children }: IProductsProviderProps) => {
	const [products, setProducts] = useState<IProducts[]>([]);
	const [loading, setLoading] = useState(false);
	const [cartList, setCartList] = useState<IProducts[]>([]);
	const [searchProducts, setSearchProducts] = useState<IProducts[]>([]);

	useEffect(() => {
		setLoading(true);

		api.get("products")
			.then((resp) => {
				setProducts(resp.data);
				setSearchProducts(resp.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<ProductsContext.Provider
			value={{
				products,
				searchProducts,
				setSearchProducts,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export { ProductsProvider, ProductsContext };
