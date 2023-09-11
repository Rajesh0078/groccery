
import { useContext } from 'react'
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import { store } from '../../App'
import "../products/App.css"
import CartContainer from '../../components/cart/CartContainer'


const Home = () => {

    const { cart } = useContext(store)

    return (
        <>
            <Header />
            <Main />
            {
                cart &&
                <CartContainer />

            }

        </>
    )
}

export default Home