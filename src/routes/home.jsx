import CategoriesDB from "../data/db_categories";
import Catcontainer from "../components/categories/categories-container";

const Home = () => {

    let categories = CategoriesDB();
  
    return (
        <div>

            <Catcontainer categories = {categories} />
            
        </div>
    );
}

export default Home;
