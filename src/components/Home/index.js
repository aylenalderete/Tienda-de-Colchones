import Layout from "../GeneralComponents/layout";
import Filter from "./filter"
import CardsMenu2 from "./cardsMenu2";
import Sliderprueba from "../GeneralComponents/sliderprueba";
import ProductsList from "../Products/productsList";
import "../../styles/Home/sliderprueba.scss";
import "../../styles/Home/home.scss";

const Home = () => {
    const getItemQuantity = () => {
        if(window.screen.width < 560){
            return 3
        } else if (window.screen.width < 850){
            return 4
        } else if (window.screen.width <= 1130){
            return 6
        } else if (window.screen.width <= 1420){
            return 8
        } else {
            return 10
        }
    }
    return (
        <Layout>
            <div className="homeContainer">
                <Sliderprueba />
                <Filter />
                <CardsMenu2 />
                <section className="cards-container-products">
                    <div>
                        <h1 className="home-title">Productos destacados</h1>
                    </div>
                    <div className="home-productsList_container">
                        <ProductsList maxItems={getItemQuantity()} />
                    </div>
                </section>
            </div>
        </Layout>
    )
}
export default Home;