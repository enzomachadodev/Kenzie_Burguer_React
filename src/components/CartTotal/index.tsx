import { StyledCartTotal } from "./style";

interface ICartTotalProps {
	totalPrice: number;
	removeAll(): void;
}

const CartTotal = ({ totalPrice, removeAll }: ICartTotalProps) => {
	return (
		<StyledCartTotal>
			<div>
				<strong>Total</strong>
				<span>R$ {totalPrice.toFixed(2)}</span>
			</div>
			<button onClick={() => removeAll()}>Remover todos</button>
		</StyledCartTotal>
	);
};

export default CartTotal;
