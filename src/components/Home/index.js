import Layout from "../GeneralComponents/layout";
import "../../styles/Home/sliderprueba.scss";
import Filter from "./filter"
import CardsMenu from "./cardsMenu";
import Sliderprueba from "../GeneralComponents/sliderprueba";
import Card from "../GeneralComponents/card"
import colchon from "../../assets/colchon1.png"


const Home = () => {
    return (
        <Layout>
            <div className="homeContainer">
                <Sliderprueba />
                <CardsMenu />
                <Filter />
                <section className="cards-container-products">
                    <div>
                        <h1>Ofertas destacadas</h1>
                    </div>
                    <Card img={colchon} title='Colchon' price="$10000" />
                    <Card img={colchon} title='Colchon' price="$10000" />
                    <Card img={colchon} title='Colchonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn' price="$10000" />
                    <Card img={colchon} title='Colchon' price="$10000" />
                    <Card img={colchon} title='Colchon' price="$10000" />
                    <Card img={colchon} title='Colchon' price="$10000" />
                    <Card img={colchon} title='Colchon' price="$10000" />
                    <Card img={colchon} title='Colchon' price="$10000" />
                    <Card img={colchon} title='Colchon' price="$10000" />
                    <Card img={colchon} title='Colchon' price="$10000" />
                </section>
            </div>
        </Layout>
    )
}
export default Home;