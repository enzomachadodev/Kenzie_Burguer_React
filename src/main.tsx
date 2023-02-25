import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsProvider } from "./context/Products/ProductsContext";
import { SearchProvider } from "./context/Search/SearchContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ProductsProvider>
			<SearchProvider>
				<App />
			</SearchProvider>
		</ProductsProvider>
	</React.StrictMode>
);
