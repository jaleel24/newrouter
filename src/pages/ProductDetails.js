import { useParams } from "react-router-dom";
function ProductDetailPage() {

     const params= useParams();
    
    return ( <div>
        <h1>Products Details</h1>
       <p> {params.id}</p>
    </div> );
}

export default ProductDetailPage;