import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import React from 'react';

function App() {
	const [cartOpenet, setCartOpenet] = React.useState(false);
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		fetch('https://64ac5e969edb4181202f7cf5.mockapi.io/items')
			.then((res) => res.json())
			.then((json) => setItems(json));
	}, []);

	return (
		<div className="wrapper clear">
			{cartOpenet && (
				<Drawer
					onClose={() => {
						setCartOpenet(false);
					}}
				/>
			)}

			<Header
				onClickCart={() => {
					setCartOpenet(true);
				}}
			/>

			<div className="content">
				<div className="contentHeader">
					<h1>Все витамины</h1>
					<div className="searchBlock">
						<img width={14} height={14} src="./img/search.svg" alt="search" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>
				<div className="vitamins">
					{items.map((obj) => (
						<Card name={obj.name} imgUrl={obj.imgUrl} price={obj.price} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
