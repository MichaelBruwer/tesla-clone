import Header from './components/Header';

import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpg';
import Model3 from './assets/Desktop-Model3.jpg';
import ModelX from './assets/Desktop-ModelX.jpg';
import ModelY from './assets/Desktop-ModelY.jpg';
import SolarPanels from './assets/Desktop-SolarPanels.jpg';
import SolarRoof from './assets/Desktop-SolarRoof.jpg';
import Item from './components/Item';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='app__itemsContainer'>
				<Item
					title='Lowest Cost Solar Panels in America'
					desc='Money-back guarantee'
					descLink=''
					backgroundImg={SolarPanels}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons='true'
					first
				/>
				<Item
					title='Model S'
					desc='$69,420'
					descLink=''
					backgroundImg={ModelS}
					leftBtnTxt='CUSTOM ORDER'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons='true'
				/>
				<Item
					title='Lowest Cost Solar Panels in America'
					desc='Money-back guarantee'
					descLink=''
					backgroundImg={SolarPanels}
					leftBtnTxt='ORDER NOW'
					leftBtnLink=''
					rightBtnTxt='LEARN MORE'
					rightBtnLink=''
					twoButtons='true'
					first
				/>
			</div>
		</div>
	);
}

export default App;
