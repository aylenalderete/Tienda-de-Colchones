import Layout from "../GeneralComponents/layout";
import "../../styles/Home/sliderprueba.scss";
import "../../styles/Home/home.scss";
import Filter from "./filter"
import CardsMenu from "./cardsMenu";
import CardsMenu2 from "./cardsMenu2";
import Sliderprueba from "../GeneralComponents/sliderprueba";
import Card from "../GeneralComponents/card"
import colchon from "../../assets/colchon1.png"
import ProductsList from "../Products/productsList";


const Home = () => {
    return (
        <Layout>
            <div className="homeContainer">
                <Sliderprueba />
                <CardsMenu2 />
                <Filter />
                <section className="cards-container-products">
                    <div>
                        <h1 className="home-title">Productos destacados</h1>
                    </div>
                    <div className="home-productsList_container">
                        <ProductsList />
                    </div>
                </section>
            </div>
        </Layout>
    )
}
export default Home;