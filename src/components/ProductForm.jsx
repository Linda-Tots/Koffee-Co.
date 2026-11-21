import {useContext} from "react";
import { ProductContext } from "../context/ProductContext";

function ProductForm(){

    const {addProduct} = useContext(ProductContext);



    function handleSubmit(e){
        e.preventDefault();
        
        // capturing storing details entered by users
        const newProduct = {
            name : e.target.name.value,
            origin : e.target.origin.value,
            price : Number(e.target.price.value),
            beanType: e.target.beanType.value,
        }

        addProduct(newProduct);
        e.target.reset();
    }



    return(
        <div>
            <form onSubmit={handleSubmit} >
                <h2> Add New KoffeeProduct</h2>
                <input type="text" name="name" placeholder="Product name" />
                <input type="text" name="origin" placeholder="Origin" />
                <input type="text" name="price" placeholder="Price" required/>
                <input type="text" name="beanType" placeholder="Bean type" />

                <button type="submit"> Add Product</button>
            </form>
        </div>

    )
}

export default ProductForm;