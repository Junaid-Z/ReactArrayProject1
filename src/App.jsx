import mobiles from "./Resources/data"
import './App.css';
import "./Resources/style.css"

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{mobiles.map((mobile) => {
					return (
						<div className="card">
							<div>
								Name: {mobile.name}
							</div>
							<div>
								Brand: {mobile.brand}
							</div>
							<div>
								RAM: {mobile.ram}
							</div>
							<div>
								ROM: {mobile.rom}
							</div>
							<div>
								Camera: {mobile.camera}
							</div>
							<div>
								Price: {mobile.price}
							</div>
						</div>
					);
				})}
			</header>
		</div>
	);
}

export default App;
