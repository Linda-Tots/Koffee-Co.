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
        <div className="w-full">
            <input 
                  type="text"
                  placeholder="search coffee beans..."
                  value={myProduct}
                  onChange={(e) => setMyProduct(e.target.value)}
                  className="w-full max-w-md bg-white border border-[#D6C2A8] rounded-lg px-4 py-3 text-[#4A1F16] placeholder-[#8B6B5C] outline-none focus:ring-2 focus:ring-[#C49A6C]"
                 />     

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {result.map((bean) => (
                        <div 
                            key={bean.id}
                            className="bg-white border border-[#D6C2A8] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >

                            <img
                             src={bean.image}
                             alt={bean.name}
                             className="w-full h-48 object-cover"

                              />
                            
                            <h3 className="text-xl font-bold text-[#4A1F16]"> 
                                {bean.name}
                            </h3>
                            <p className="text-[#8B6B5C] mt-2">
                                {bean.origin}
                            </p>
                            <p className="text-lg font-semibold text-[#4A1F16] mt-4">
                                Ksh {bean.price}
                            </p>
                        </div>
                    ))}


                </div> 
        </div>

        
        

    )
}

export default ProductSearch;
