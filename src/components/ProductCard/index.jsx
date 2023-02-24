import React from "react";
import { StyledProductCard, DivImg, DivInfos } from "./style";

const ProductCard = ({ name, category, price, img, onClick, id }) => {
	return (
		<StyledProductCard>
			<DivImg>
				<img src={img} alt="" />
			</DivImg>

			<DivInfos>
				<h3>{name}</h3>
				<small>{category}</small>
				<span>R$ {price}</span>
				<button type="button" id={id} onClick={onClick}>
					Adicionar
				</button>
			</DivInfos>
		</StyledProductCard>
	);
};

export default ProductCard;
