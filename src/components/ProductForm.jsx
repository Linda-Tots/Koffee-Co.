import React from "react";

function ProductForm(){



    return(
        <div>
            <form >
                <h2> Add New KoffeeProduct</h2>
                <input type="text" placeholder="Product name" />
                <input type="text" placeholder="Origin" />
                <input type="text" placeholder="Price" />
                <input type="text" placeholder="Bean type" />

                <button type="submit"> Add Product</button>
            </form>
        </div>

    )
}

export default ProductForm;