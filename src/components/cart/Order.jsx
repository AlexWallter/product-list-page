import './order.css'
import { BsXCircle } from "react-icons/bs";
import { useOrderstore } from '../../store/orderStore';

export const Order = ({ name, qty, price })=> {
    const deleteItem = useOrderstore((state)=>state.deleteItem)
    const realPrice = Number(price.replace('$', ''))

    function handleDeleteItem() {
        const btnContainer = document.querySelector(`.${name.replaceAll(' ', '')}`)
        const span = btnContainer.querySelector('span')
        const  btnCounter = span.querySelector('p')
        btnCounter.innerText = '0'

        const cost = qty*realPrice

        deleteItem(name, qty, cost)
    }

    return(
        <>
             <div className="order">
                 <div className="order__item">
                     <div className="order__item__info">
                            <p className='order__item--name semi-bold-font'>{name}</p>
                         <div className='order__item--costs semi-bold-font'>
                            <p className="order__item--quantity">{qty}x</p>
                            <p className="order__item--unit-price">{price}</p>
                            <p className="order__item--total-price">${realPrice*qty}</p>
                        </div>
                    </div>
                    <span className='order__item--discart' onClick={()=>handleDeleteItem()}><BsXCircle/></span>
                </div>
            </div>
        </>
    )
}