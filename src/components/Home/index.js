import Layout from "../GeneralComponents/layout";
import Filter from "./filter"
import CardsMenu2 from "./cardsMenu2";
import Sliderprueba from "../GeneralComponents/sliderprueba";
import ProductsList from "../Products/productsList";
import "../../styles/Home/sliderprueba.scss";
import "../../styles/Home/home.scss";

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
                        <ProductsList maxItems={6} />
                    </div>
                </section>
            </div>
        </Layout>
    )
}
export default Home;