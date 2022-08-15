import './cat-style.scss';
import Categories from './categories-component';

const Catcontainer = ({categories}) => (
    <div className="container">

        {categories.map((categories) => (

          <Categories key={categories.id} category={categories} />

        ))}
        
    </div>
)

export default Catcontainer;