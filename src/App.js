import './cat-style.scss';
import Categories from './components/categories/categories-component';

const App = () => {

  const categories = [ // create an array of objects that will inform the different categories
    {
      id: 1,
      title: 'Hats',
      sub: 'Shop Now',
      img: 'https://i.ibb.co/cvpntL1/hats.png',
      link: ''
    },
    {
      id: 2,
      title: 'Hats',
      sub: 'Shop Now',
      img: 'https://i.ibb.co/px2tCc3/jackets.png',
      link: ''
    },
    {
      id: 3,
      title: 'Hats',
      sub: 'Shop Now',
      img: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      link: ''
    },
    {
      id: 4,
      title: 'Hats',
      sub: 'Shop Now',
      img: 'https://i.ibb.co/GCCdy8t/womens.png',
      link: ''
    },
    {
      id: 5,
      title: 'Hats',
      sub: 'Shop Now',
      img: 'https://i.ibb.co/R70vBrQ/men.png',
      link: ''
    },
  ]

  return (
    <div>
      <div className='header'></div>

      <div className='pagetitle'>
        <h1>AIDOO ONLINE STORE</h1>
      </div>
        
      <div className="container">

        {categories.map((categories) => (

          <Categories key={categories.id} category={categories} />

        ))}
        
      </div>
    </div>
  );
}

export default App;
