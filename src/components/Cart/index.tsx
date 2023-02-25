import { useContext } from "react";
import { IProducts } from "../../context/ProductsContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import EmptyCart from "../EmptyCart";
import { ContainerCart } from "./style";

const Cart = () => {
	const { cartProducts, deleteProductCart, clearShoppingCart } = useContext(ShoppingCartContext);

	let totalPrice = cartProducts.reduce(
		(prev, elem: IProducts) => prev + elem.price * elem.quant!,
		0
	);

	return (
		<ContainerCart>
			<h3 className="cart-title">Carrinho de compras</h3>

			{cartProducts.length === 0 ? (
				<EmptyCart />
			) : (
				<>
					<ul className="cart-list">
						{cartProducts.map((elem) => (
							<CartProduct
								key={elem.id}
								product={elem}
								removeProduct={deleteProductCart}
							/>
						))}
					</ul>
					<CartTotal totalPrice={totalPrice} removeAll={clearShoppingCart} />
				</>
			)}
		</ContainerCart>
	);
};

export default Cart;
