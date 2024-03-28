import Banner from "../components/Banner/Banner";
import Books from "../components/Books/Books";
import CategoryList from "../components/CategoryList/CategoryList";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Books></Books>
        </div>
    );
};

export default Home;