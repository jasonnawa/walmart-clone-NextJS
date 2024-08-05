'use client'
import { useState, useEffect } from "react"


const ProductsDB = ()=>{
    
        const [product, setProduct] = useState([])

        useEffect(()=>{
            async function fetchData(){
                let data = await fetch("https://fakestoreapi.com/products")
                data = await data.json()
                setProduct(data)
            }
            fetchData()

        },[]);
        return <h1>{product.map((p)=>{
          return  p.name
        })}</h1>
}

export default ProductsDB;