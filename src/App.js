import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
const arr = [
	{ name: 'Витамины для взрослых и детей, Омега-3', imgUrl: './img/vitamins/1.jpg', price: 413 },
	{
		name: 'Витамины для энергии, красоты и иммунитета, Омега 3-6-9',
		imgUrl: './img/vitamins/2.jpg',
		price: 412,
	},
	{
		name: 'Комплекс витаминов группы Б, от Б1 до Б12',
		imgUrl: './img/vitamins/3.jpg',
		price: 373,
	},
	{
		name: 'Кальций Д3, витамины для укрепления костей, волос, ногтей',
		imgUrl: './img/vitamins/4.jpg',
		price: 287,
	},
	{
		name: 'Йод органический 1000 мкг',
		imgUrl: './img/vitamins/5.jpg',
		price: 271,
	},
	{
		name: 'Хром Пиколинат 250 мкг, витамины для женщин',
		imgUrl: './img/vitamins/6.jpg',
		price: 317,
	},
];
function App() {
	return (
		<div className="wrapper clear">
			<Drawer />

			<Header />

			<div className="content">
				<div className="contentHeader">
					<h1>Все витамины</h1>
					<div className="searchBlock">
						<img width={14} height={14} src="./img/search.svg" alt="search" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>
				<div className="vitamins">
					{arr.map((obj) => (
						<Card name={obj.name} imgUrl={obj.imgUrl} price={obj.price} />
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
