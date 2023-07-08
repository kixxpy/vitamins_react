export const Card = (props) => {
	return (
		<div className="card">
		<img className="favorit" src={"./img/heard-unliked.svg"} alt="heard" />
		<img width={134} height={143} src={props.imgUrl} alt="vitamins" />
		<h5>{props.name}</h5>
		<div className="cardPrice">
			<div className="price">
				<span>Цена:</span>
				<b>{props.price} руб.</b>
			</div>
			<img className="button" src="./img/plus.svg" alt="plus" />
		</div>
	</div>
	)
}