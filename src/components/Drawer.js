export const Drawer = (props) => {
	return (
		<div className="overlay">
			<div className="drawer">
				<div className="cartTitle">
					<h2>Корзина</h2>
					<img onClick={props.onClose}  src="./img/close.svg" alt="close" />
				</div>

				<div className="items">
					<div className="cartItem">
						<img width={69} height={73} src="./img/vitamins/1.jpg" alt="vitamins" />
						<div className="cardContent">
							<p>Витамины для взрослых и детей Омега-3</p>
							<b>414 руб.</b>
						</div>
						<img className="cardBtn" width={32} height={32} src="./img/close.svg" alt="close" />
					</div>
					<div className="cartItem">
						<img width={69} height={73} src="./img/vitamins/1.jpg" alt="vitamins" />
						<div className="cardContent">
							<p>Витамины для взрослых и детей Омега-3</p>
							<b>414 руб.</b>
						</div>
						<img className="cardBtn" width={32} height={32} src="./img/close.svg" alt="close" />
					</div>
				</div>

				<div className="cartTotalBlock">
					<ul>
						<li>
							<p>Итого:</p>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li>
							<p>Налог 5%:</p>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
				</div>
				<button className="cartBtn">
					<span>Оформить заказ</span>
					<img src="./img/arrow.svg" alt="arrow" />
				</button>
			</div>
		</div>
	);
};
