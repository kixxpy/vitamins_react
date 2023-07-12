export const Drawer = ({ onClose, cartItems = [], deleteItemCart}) => {

		
	return (
		<div className="overlay">
			<div className="drawer">
				<div className="cartTitle">
					<h2>Корзина</h2>
					<img onClick={onClose} src="./img/close.svg" alt="close" />
				</div>
				<div className="items">
					{cartItems.map((obj) => (
						<div className="cartItem">
							<img width={69} height={73} src={obj.imgUrl} alt="vitamins" />
							<div className="cardContent">
								<p>{obj.name}</p>
								<b>{obj.price} руб.</b>
							</div>
							<img
								onClick={() => deleteItemCart(obj.id)}
								className="cardBtn"
								width={32}
								height={32}
								src="./img/close.svg"
								alt="close"
							/>
						</div>
					))}
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
