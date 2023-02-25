import { useEffect, useState } from "react";
import api from "../../services/api";

import Header from "../Header";
import { Container } from "../Container/style";
import ProductCard from "../ProductCard";
import Cart from "../Cart";

import { List } from "./style";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [cartList, setCartList] = useState([]);
	const [pesquisa, setPesquisa] = useState("");

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

	function addCart(elem) {
		setCartList(
			cartList.map((prod) => {
				if (prod.name === elem.name) {
					prod.quant++;
					return prod;
				} else {
					return prod;
				}
			})
		);
	}

	const produtosPesquisados = products.filter((elem) => {
		if (pesquisa === "") {
			return elem;
		} else if (elem.name.toLowerCase().includes(pesquisa.toLowerCase())) {
			return elem;
		} else if (elem.category.toLowerCase().includes(pesquisa.toLowerCase())) {
			return elem;
		}
	});

	return (
		<>
			<Header setPesquisa={setPesquisa} pesquisa={pesquisa} />
			<Container>
				{loading ? (
					<span>Loading...</span>
				) : (
					<List>
						{produtosPesquisados.map((elem) => {
							return (
								<ProductCard
									key={elem.id}
									name={elem.name}
									category={elem.category}
									price={elem.price}
									img={elem.img}
									onClick={() => addCart(elem)}
								/>
							);
						})}
					</List>
				)}
				<Cart cartList={cartList} setCartList={setCartList} />
			</Container>
		</>
	);
};

export default ProductsList;
