
import { useContext } from 'react'
import Main from '../../components/main/Main'
import { store } from '../../App'
import "../products/App.css"
import CartContainer from '../../components/cart/CartContainer'


const Home = () => {

    const { cart } = useContext(store)

    return (
        <>

            <Main />
            {
                cart &&
                <CartContainer />

            }

        </>
    )
}

export default Home