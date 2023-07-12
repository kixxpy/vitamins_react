export const Header = (props) => {
	return (
		<header className="header">
			<div className="headerLeft">
				<img width={92} height={44} src="./img/logo.svg" alt="logo" />
				<div className="headerInfo">
					<h3>gsl pharmaceutical</h3>
					<p>Магазин лучших витаминов</p>
				</div>
			</div>
			<ul className="headerRight">
				<li onClick={props.onClickCart} className="oneLi">
					<img src="./img/card.svg" alt="card" />
					<span>1205 руб.</span>
				</li>
				<li className="twoLi">
					<img width={18} height={18} src="./img/user.svg" alt="user" />
				</li>
			</ul>
		</header>
	);
};
