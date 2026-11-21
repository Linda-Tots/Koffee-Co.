// step 1: Add a useState Hook

import { useState } from "react";
import { coffeeBeans } from "../data";

// Step 2: Create the component 

function ProductSearch() {

    //   Step 3: stepping up useState, setfunction & destructuring

    const [myProduct, setMyProduct] = useState("");

    // filtering my coffeebeans by name

    const result = coffeeBeans.filter((bean) => 
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
