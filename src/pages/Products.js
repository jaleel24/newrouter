import { Link } from "react-router-dom";
function Products() {

    const PRODUCTS =[
        {id:1,Title:'Product 1'},
        {id:2,Title:'Product 2'},
        {id:3,Title:'Product 3'},
    ];
    return <>
        <h1>This is the Products page</h1>
        <ul>
            {PRODUCTS.map(products =>{
                return (<li key={products.id}>
                    <Link to={`/products/${products.id}`}>{products.Title}</Link>
                </li>)
            })}
            {/* <Link to="/products"><li>Product 1</li></Link>
            <Link><li>Product 2</li></Link>
            <Link><li>Product 3</li></Link> */}
        </ul>
    </>
    
}

export default Products;