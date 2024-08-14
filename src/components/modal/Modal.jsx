import './modal.css';
import {ProductBtn} from '../product/ProductBtn';
import { FinalOrder } from './FinalOrder';
import { useOrderstore } from '../../store/orderStore';
import { BsCheckCircle } from "react-icons/bs";

export const Modal = ()=> {
    const value = useOrderstore((state)=>state.order)
    const totalCost = useOrderstore((state)=>state.totalCost)
    const resetOrder = useOrderstore((state)=>state.resetOrder)

    const totalOrder = value.map(e=>{
        return (
            <FinalOrder name={e.name}
                   qty={e.times}
                   price={e.price}
                   category={e.id}
                   key={e.id}/>
        )
    })

    function handleCloseModal() {
       const modal = document.querySelector('.modal')
       resetOrder()
        modal.close()
    }

     return (
        <> 
            <dialog className="modal">
                <header className="modal__header">
                    <BsCheckCircle/>
                    <p className='bold-font bigger-font-sz'>Confirm Order</p>
                    <p className='sm-font-sz'>we hope you enjoy your food</p>
                </header>
                    {
                        totalOrder.length?(
                            <> 
                            <div className='final-order'>
                                {totalOrder}
                                <div className="order--total-order">
                                <p className='semi-bold-font'>Order total</p><span className='bigger-font-sz bold-font modal--order-total'>${totalCost}</span>
                                </div>
                            </div>
                                <a className="modal__order--btn u-order-btn" onClick={()=>handleCloseModal()}>Start New Order</a>
                            </>
                        )
                        :(<>
                        <div className='modal__empty'>
                        </div>
                        </>
                        )
                    }
            </dialog>
        </>
    )
}