import './product.css'
import { ProductBtn } from './ProductBtn'

export const Product = ({img, shName, name, price})=> {
    return(
    <>
        <div className={`product ${name.replaceAll(' ', '')}`}>
            <img className='product--img' src={img} alt="" />
            <ProductBtn name={name}/>
            <div className='product__info'>
                <p className="product__info--sh-name">
                    {shName}
                </p>
                <h4 className="product__info--long-name">
                    {name}
                </h4>
                <p className="product__info--price semi-bold-font">
                    ${price}
                </p>
            </div>
        </div>
    </>
    )
}