import { BrowserRouter } from "react-router-dom"
import { createContext, useState } from "react";
import './App.css';
import Navigations from './components/Navigations';

export const store = createContext();

function App() {
	const [categoryValue, setCategoryValue] = useState()
	const [pageName, setPageName] = useState("Login")
	const [productData, setProductData] = useState([])
	const [sortValue, setSortValue] = useState(0)

	const contextValues = {
		categoryValue,
		setCategoryValue,
		pageName,
		setPageName, productData, setProductData, sortValue, setSortValue
	}
	return (
		<store.Provider value={contextValues}>
			<BrowserRouter>
				<Navigations />
			</BrowserRouter>
		</store.Provider>
	);
}

export default App;
