import { Dispatch, SetStateAction } from "react";

export interface IProducts {
	id: number;
	name: string;
	category: string;
	price: number;
	img: string;
	quant: number | null;
}

export interface ISearchContext {
	searchProducts: IProducts[];
	setSearchProducts: Dispatch<SetStateAction<IProducts[]>>;
}

export interface ISearchProviderProps {
	children: React.ReactNode;
}

export interface IProductsContext {
	products: IProducts[];
	loading: boolean;
	cartList: IProducts[];
	setCartList: Dispatch<SetStateAction<IProducts[]>>;
}

export interface IProductsProviderProps {
	children: React.ReactNode;
}
