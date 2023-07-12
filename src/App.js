import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import React from 'react';
import axios from 'axios';

function App() {
	const [cartOpenet, setCartOpenet] = React.useState(false);
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');

	React.useEffect(() => {
		axios.get('https://64ac5e969edb4181202f7cf5.mockapi.io/items').then((res) => {
			setItems(res.data);
		});
	}, []);

	React.useEffect(() => {
		axios.get('https://64ac5e969edb4181202f7cf5.mockapi.io/cart').then((res) => {
			setCartItems(res.data);
		});
	}, []);

	const onAddToCart = (obj) => {
		axios.post('https://64ac5e969edb4181202f7cf5.mockapi.io/cart', obj);
		setCartItems((prev) => [...prev, obj]);
	};

	const deleteItemCart = (id) => {
		axios.delete(`https://64ac5e969edb4181202f7cf5.mockapi.io/cart/${id}`);
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const onChangeInputValue = (event) => {
		console.log(searchValue);
		setSearchValue(event.target.value);
	};
	return (
		<div className="wrapper clear">
			{cartOpenet && (
				<Drawer
					onClose={() => {
						setCartOpenet(false);
					}}
					cartItems={cartItems}
					deleteItemCart={deleteItemCart}
				/>
			)}

			<Header
				onClickCart={() => {
					setCartOpenet(true);
				}}
			/>

			<div className="content">
				<div className="contentHeader">
					<h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все витамины'}</h1>
					<div className="searchBlock">
						<img width={14} height={14} src="./img/search.svg" alt="search" />
						<input
							type="text"
							onChange={onChangeInputValue}
							value={searchValue}
							placeholder="Поиск..."
						/>
						<img
							className="searchClose"
							onClick={() => setSearchValue('')}
							width={14}
							height={14}
							src="./img/close.svg"
							alt="close"
						/>
					</div>
				</div>
				<div className="vitamins">
					{items
						.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
						.map((obj) => (
							<Card
								key={obj.name}
								name={obj.name}
								imgUrl={obj.imgUrl}
								price={obj.price}
								onPlus={(obj) => onAddToCart(obj)}
							/>
						))}
				</div>
			</div>
		</div>
	);
}

export default App;
