import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsProvider } from "./context/ProductsContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ProductsProvider>
			<ShoppingCartProvider>
				<App />
			</ShoppingCartProvider>
		</ProductsProvider>
	</React.StrictMode>
);
