import { IProducts } from "../../interfaces/interfaces";
import { StyledProductCard } from "./style";

interface IProductCardProps {
	product: IProducts;
	addCart(elem: IProducts): void;
}

const ProductCard = ({ product, addCart }: IProductCardProps) => {
	return (
		<StyledProductCard>
			<div className="div-img">
				<img src={product.img} alt="" />
			</div>

			<div className="div-info">
				<h3>{product.name}</h3>
				<small>{product.category}</small>
				<span>R$ {product.price}</span>
				<button type="button" id={product.id.toString()} onClick={() => addCart(product)}>
					Adicionar
				</button>
			</div>
		</StyledProductCard>
	);
};

export default ProductCard;
