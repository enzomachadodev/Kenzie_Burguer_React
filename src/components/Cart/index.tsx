import { useContext } from "react";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { IProducts } from "../../interfaces/interfaces";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import EmptyCart from "../EmptyCart";
import { ContainerCart } from "./style";

const Cart = () => {
	const { cartList, setCartList, products } = useContext(ProductsContext);

	function removeProduct(product: IProducts) {
		const newList = cartList.map((elem) => {
			if (elem.name === product.name) {
				elem.quant = 0;
				return elem;
			} else {
				return elem;
			}
		});

		setCartList(newList);
	}

	function removeAll() {
		const newList = cartList.map((elem) => {
			elem.quant = 0;
			return elem;
		});

		setCartList(newList);
	}

	let totalPrice = cartList.reduce((prev, elem: IProducts) => prev + elem.price * elem.quant!, 0);

	let carrinho = cartList.filter((elem: IProducts) => elem.quant! >= 1);

	return (
		<ContainerCart>
			<h3 className="cart-title">Carrinho de compras</h3>

			{carrinho.length === 0 ? (
				<EmptyCart />
			) : (
				<>
					<ul className="cart-list">
						{carrinho.map((elem) => (
							<CartProduct
								key={elem.id}
								product={elem}
								removeProduct={removeProduct}
							/>
						))}
					</ul>
					<CartTotal totalPrice={totalPrice} removeAll={removeAll} />
				</>
			)}
		</ContainerCart>
	);
};

export default Cart;
