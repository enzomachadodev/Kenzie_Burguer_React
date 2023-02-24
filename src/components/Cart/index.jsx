import { ContainerCart, ListCart, TotalCart, EmptyCart } from "./style";

import { ProductCart, DivName, DivImg, DivBtn } from "./style";

const Cart = ({ cartList, setCartList, onClick }) => {
	function removeProduct(product) {
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

	let totalPrice = cartList.reduce(
		(prev, elem) => prev + elem.price * elem.quant,
		0
	);

	let carrinho = cartList.filter((elem) => elem.quant >= 1);

	return (
		<ContainerCart>
			<h3>Carrinho de compras</h3>

			{carrinho.length === 0 ? (
				<EmptyCart>
					<h3>Sua sacola está vazia</h3>
					<small>Adicione itens</small>
				</EmptyCart>
			) : (
				<>
					<ListCart>
						{carrinho.map((elem) => (
							<ProductCart key={elem.id}>
								<DivImg>
									<img src={elem.img} alt="" />
								</DivImg>
								<DivName>
									<h3>{elem.name}</h3>
									<small>{elem.category}</small>
								</DivName>
								<DivBtn>
									<button
										type="button"
										onClick={() => removeProduct(elem)}
									>
										Remover
									</button>
									<p>Qnt.{elem.quant}</p>
								</DivBtn>
							</ProductCart>
						))}
					</ListCart>
					<TotalCart>
						<div>
							<strong>Total</strong>
							<span>R$ {totalPrice.toFixed(2)}</span>
						</div>
						<button onClick={() => removeAll()}>
							Remover todos
						</button>
					</TotalCart>
				</>
			)}
		</ContainerCart>
	);
};

export default Cart;
