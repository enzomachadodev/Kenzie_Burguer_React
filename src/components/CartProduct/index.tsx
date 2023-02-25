import { IProducts } from "../../context/ProductsContext";
import { ProductCart } from "./style";

interface ICartProductsProps {
	product: IProducts;
	removeProduct(elem: IProducts): void;
}

const CartProduct = ({ product, removeProduct }: ICartProductsProps) => {
	return (
		<ProductCart key={product.id}>
			<div className="div-img">
				<img src={product.img} alt="" />
			</div>
			<div className="div-name">
				<h3>{product.name}</h3>
				<small>{product.category}</small>
			</div>
			<div className="div-btn">
				<button type="button" onClick={() => removeProduct(product)}>
					Remover
				</button>
				<p>Qnt.{product.quant}</p>
			</div>
		</ProductCart>
	);
};

export default CartProduct;
