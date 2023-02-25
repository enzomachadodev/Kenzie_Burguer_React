import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

export interface IProducts {
	id: number;
	name: string;
	category: string;
	price: number;
	img: string;
	quant: number | null;
}

export interface IShoppingCartContext {
	cartProducts: IProducts[];
	productCount: (id: number) => number;
	addProductCart: (prod: IProducts) => void;
	deleteProductCart: (prod: IProducts) => void;
	clearShoppingCart: () => void;
}

export interface IShoppingCartProviderProps {
	children: React.ReactNode;
}

const ShoppingCartContext = createContext<IShoppingCartContext>({} as IShoppingCartContext);

const ShoppingCartProvider = ({ children }: IShoppingCartProviderProps) => {
	const [cartProducts, setCartProducts] = useState<IProducts[]>([]);

	const productCount = (id: number) => {
		return cartProducts.find((item) => item.id === id)?.quant || 0;
	};

	const addProductCart = (prod: IProducts) => {
		setCartProducts((currentProducts) => {
			if (currentProducts.find((item) => item.id === prod.id) == null) {
				return [...currentProducts, { ...prod, quant: 1 }];
			} else {
				return currentProducts.map((item) => {
					if (item.id === prod.id) {
						return { ...item, quant: item.quant! + 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const deleteProductCart = (prod: IProducts) => {
		setCartProducts(cartProducts.filter((item) => item.id !== prod.id));
	};

	const clearShoppingCart = () => {
		setCartProducts([]);
	};

	return (
		<ShoppingCartContext.Provider
			value={{
				cartProducts,
				addProductCart,
				clearShoppingCart,
				deleteProductCart,
				productCount,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartContext, ShoppingCartProvider };
