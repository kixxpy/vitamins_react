export const Card = () => {
	return (
		<div className="card">
		<img className="favorit" src="./img/heard-unliked.svg" alt="heard" />
		<img width={134} height={143} src="./img/vitamins/1.jpg" alt="vitamins" />
		<h5>Витамины для взрослых и детей Омега-3</h5>
		<div className="cardPrice">
			<div className="price">
				<span>Цена:</span>
				<b>413 руб.</b>
			</div>
			<img className="button" src="./img/plus.svg" alt="plus" />
		</div>
	</div>
	)
}