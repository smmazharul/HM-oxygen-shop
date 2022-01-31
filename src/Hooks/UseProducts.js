import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://evening-meadow-07425.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
    //return necessary things 
    return [products,setProducts];
}
export default useProducts;