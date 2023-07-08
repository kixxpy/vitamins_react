function App() {
	return (
		<div className="wrapper clear">
			<header className="header">
				<div className="headerLeft">
					<img width={92} height={44} src="./img/logo.svg" alt="logo" />
					<div className="headerInfo">
						<h3>gsl pharmaceutical</h3>
						<p>Магазин лучших витаминов</p>
					</div>
				</div>
				<ul className="headerRight">
					<li className="oneLi">
						<img src="./img/card.svg" alt="card" />
						<span>1205 руб.</span>
					</li>
					<li className="twoLi">
						<img width={18} height={18} src="./img/user.svg" alt="user" />
					</li>
				</ul>
			</header>

			<div className="content">
				<h1>Все витамины</h1>
				<div className="vitamins">
					<div className="card">
						<img width={134} height={143} src="./img/vitamins/1.jpg" alt="vitamins" />
						<h5>Витамины для взрослых и детей Омега-3</h5>
						<div className="cardPrice">
							<div className="price">
								<span>Цена:</span>
								<b>413 руб.</b>
							</div>
							<button className="button">
								<img src="./img/plus.svg" alt="plus" />
							</button>
						</div>
					</div>
					<div className="card">
						<img width={134} height={143} src="./img/vitamins/2.jpg" alt="vitamins" />
						<h5>Витамины для энергии Омега 369</h5>
						<div className="cardPrice">
							<div className="price">
								<span>Цена:</span>
								<b>412 руб.</b>
							</div>
							<button className="button">
								<img src="./img/plus.svg" alt="plus" />
							</button>
						</div>
					</div>
					<div className="card">
						<img width={134} height={143} src="./img/vitamins/3.jpg" alt="vitamins" />
						<h5>Комплекс витаминов группы Б</h5>
						<div className="cardPrice">
							<div className="price">
								<span>Цена:</span>
								<b>373 руб.</b>
							</div>
							<button className="button">
								<img src="./img/plus.svg" alt="plus" />
							</button>
						</div>
					</div>
					<div className="card">
						<img width={134} height={143} src="./img/vitamins/1.jpg" alt="vitamins" />
						<h5>Витамины для взрослых и детей Омега-3</h5>
						<div className="cardPrice">
							<div className="price">
								<span>Цена:</span>
								<b>1200 руб.</b>
							</div>
							<button className="button">
								<img src="./img/plus.svg" alt="plus" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
