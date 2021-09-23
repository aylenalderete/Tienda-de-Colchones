import Layout from "../GeneralComponents/layout";
import "../../styles/GeneralComponents/Home/sliderprueba.scss";
import Filter from "./filter"
import CardsMenu from "./cardsMenu";
import Sliderprueba from "../GeneralComponents/sliderprueba";


const Home = () => {
    return (
        <Layout>
            <div className="homeContainer">
                <Sliderprueba />
                <CardsMenu />
                <Filter />
            </div>
        </Layout>
    )
}
export default Home;