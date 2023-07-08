import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
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
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
