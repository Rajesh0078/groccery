import { BrowserRouter } from "react-router-dom"
import { createContext, useState } from "react";
import './App.css';
import Navigations from './components/Navigations';
import Header from "./components/header/Header";

export const store = createContext();

function App() {
	const [categoryValue, setCategoryValue] = useState()
	const [pageName, setPageName] = useState("Login")
	const [productData, setProductData] = useState([])
	const [sortValue, setSortValue] = useState(0)
	const [token, setToken] = useState([])
	const [user, setUser] = useState([])
	const [cartLength, setCartLength] = useState(0)
	const [cart, setCart] = useState(false)
	const [cartProductData, setCartProductData] = useState([])
	const [cartProducts, setCartProducts] = useState([])
	const [cartValue, setCartValue] = useState([0])
	const [cartData, setCartData] = useState([])

	const contextValues = {
		categoryValue,
		setCategoryValue, cart, setCart, cartLength, setCartLength,
		pageName, cartValue, setCartValue, cartData, setCartData,
		cartProductData, setCartProductData,
		cartProducts, setCartProducts,
		setPageName, productData, setProductData, sortValue, setSortValue, token, setToken, user, setUser
	}

	return (
		<store.Provider value={contextValues}>
			<BrowserRouter>
				<Header />
				<Navigations />
			</BrowserRouter>
		</store.Provider>
	);
}

export default App;
