const Categories = ({category}) => {
    
    const {id,title,sub,img,link} = category;

    return (

        <div className="category" key={id}>
          <div className="background-img" style={{backgroundImage: `url(${img})`}} ></div>
          <div className="text-box">
            <h2>{title}</h2>
            <a href={link}>{sub}</a>
          </div>
        </div>

    )}

export default Categories;