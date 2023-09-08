import { BrowserRouter } from "react-router-dom"
import { createContext, useState } from "react";
import './App.css';
import Navigations from './components/Navigations';

export const store = createContext();

function App() {
	const [categoryValue, setCategoryValue] = useState()
	const contextValues = {
		categoryValue,
		setCategoryValue
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
