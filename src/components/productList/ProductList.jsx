import { useEffect, useState } from "react"
import Data from '../data.json'
import './productList.css'
import { Product } from "../product/Product"

export const ProductList = ()=> {
    const data = Data
    const [size, setSize] = useState(0)
    let Pdata

    useEffect(()=>{
        setSize(innerWidth)
    }, [])

    if(size>=1000) {
        Pdata = data.map((e)=> {
            return (
                <Product img = {e.image.desktop}
                         shName= {e.category}
                         name= {e.name}
                         price = {e.price}
                         key={e.category}/>
            )
        })
    } 
    else if(size>=700) {
        Pdata = data.map((e)=> {
            return (
                <Product img = {e.image.tablet}
                         shName= {e.category}
                         name= {e.name}
                         price = {e.price}
                         key={e.category}/>
            )
        })
    }
    else if(size<700) {
        Pdata = data.map((e)=> {
            return (
                <Product img = {e.image.mobile}
                         shName= {e.category}
                         name= {e.name}
                         price = {e.price}
                         key={e.category}/>
            )
        })
    }

    return(
        <>
        <div className="products-container">
            {Pdata}
        </div>
        </>
    )
}