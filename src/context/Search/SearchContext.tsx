import { createContext, useState, useEffect, ReactNode } from "react";
import { IProducts, ISearchContext, ISearchProviderProps } from "../../interfaces/interfaces";

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

const SearchProvider = ({ children }: ISearchProviderProps) => {
	const [searchProducts, setSearchProducts] = useState<IProducts[]>([]);

	return (
		<SearchContext.Provider value={{ searchProducts, setSearchProducts }}>
			{children}
		</SearchContext.Provider>
	);
};

export { SearchContext, SearchProvider };
