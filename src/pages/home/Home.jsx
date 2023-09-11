
import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import { ImCancelCircle } from "react-icons/im"

const Home = () => {


    return (
        <>
            <Header />
            <Main />
            {
                <div id='cart' className="cart_container h-screen w-[100%] border left-0 right-0 top-0 bg-slate-100/[.9] z-[1000] px-5 pt-5 fixed hidden" >
                    <div className='right-10 absolute cursor-pointer'><ImCancelCircle size={25} /></div>
                </div>
            }

        </>
    )
}

export default Home