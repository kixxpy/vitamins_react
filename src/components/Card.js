import React from 'react';

export const Card = ({ name, imgUrl, price, onPlus}) => {
	const [isAdded, setIsAdded] = React.useState(false);
	const [isFavorit, setIsFavorit] = React.useState(false);

	const onClickPlus = () => {
		onPlus({name, imgUrl, price});
		setIsAdded(!isAdded);
	};

	const onClickFavorit = () => {
		setIsFavorit(!isFavorit)
	}
	return (
		<div className="card">
			<img onClick={onClickFavorit} className="favorit" src={isFavorit? './img/heard-like.svg': './img/heard-unliked.svg'} alt="heard" />
			<img width={134} height={143} src={imgUrl} alt="vitamins" />
			<h5>{name}</h5>
			<div className="cardPrice">
				<div className="price">
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img
					onClick={onClickPlus}
					className="button"
					src={isAdded ? './img/cheked.svg' : './img/plus.svg'}
					alt="plus"
				/>
			</div>
		</div>
	);
};
