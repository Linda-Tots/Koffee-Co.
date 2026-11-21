// step 1: Add a useState Hook

import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

// Step 2: Create the component 

function ProductSearch() {

    const {products} = useContext(ProductContext);

    //   Step 3: stepping up useState, setfunction & destructuring

    const [myProduct, setMyProduct] = useState("");

    // filtering my coffeebeans by name

    const result = products.filter((bean) => 
    bean.name.toLowerCase().includes(myProduct.toLowerCase())
    );



    return (

        // search in put display
        <div>
            <input 
                  type="text"
                  placeholder="search coffee beans..."
                  value={myProduct}
                  onChange={(e) => setMyProduct(e.target.value)}
                
                 />     

                 <div>
                    {result.map((bean) => (
                        <div key={bean.id}>
                            <h3>{bean.name}</h3>
                            <p>{bean.origin}</p>
                            <p>Ksh {bean.price}</p>
                        </div>
                    ))}


                </div> 
        </div>

        
        

    )
}

export default ProductSearch;
