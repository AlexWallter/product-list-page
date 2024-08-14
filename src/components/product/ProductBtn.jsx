import { useEffect, useState } from "react";
import  {useOrderstore}  from "../../store/orderStore";
import { BsCartPlus, BsPatchPlus, BsPatchMinus } from "react-icons/bs";
import './productBtn.css'

export const ProductBtn = ({name})=> {
    const value = useOrderstore((state)=>state.order)
    const newOrder = useOrderstore((state)=>state.newItem)
    const addItems = useOrderstore((state)=>state.addItem)
    const subItems = useOrderstore((state)=>state.subItem)
    const deleteItem = useOrderstore((state)=>state.deleteItem)

    const [isVisible, setIsVisible] = useState(false)
    const [btnqty, setBtnqty] = useState(0)
    
    function btnToCart(Boolean) {
        const btnContainer = document.querySelector(`.${name.replaceAll(' ', '')}`)
        const currentBTN = btnContainer.querySelector('button')
        setBtnqty(1)
        const itemsInfo = btnContainer.lastChild.children
        
        if(currentBTN.innerText == `Add to Cart` || Boolean) {
            //SENDING INFORMATION FOR THE CART
            const orderValues = itemsInfo
            const valueKeys = Object.keys(orderValues)
            const orderInfo = valueKeys.map((e)=> {return orderValues[e].innerText})
            newOrder({id:orderInfo[0], name:orderInfo[1], times: 1, price: orderInfo[2]})
            
            //CHAGING THE BUTTON STYLE
            setIsVisible(true)
            currentBTN.style.backgroundColor = 'var(--primary-clr)'
            const test = Boolean ?currentBTN.querySelector('span').querySelector('p') : 'fail'
            test=='fail'?false:test.innerText ='1'
        return 
        }
         return   
        }

    const handleAddToCart = ()=> {
        const btnContainer = document.querySelector(`.${name.replaceAll(' ', '')}`)
        const elements = btnContainer.lastChild

            //SETTING THE COUNTER IN THE BUTTOM
            const span = btnContainer.querySelector('span')
            const  btnCounter = span.querySelector('p')
            
            //SETTING THE ITEM QUANTITY
            const elementID = elements.children[0].innerText
            const elementPrice = elements.children[2].innerText.replace('$', '')
            
            const filtered = value.filter((e)=>{
                if(e.id == elementID) {
                    return e
                }
            })

            if(filtered.length) {
                addItems(elementID, elementPrice)
                btnCounter.innerText = Number(btnCounter.innerText)+1
            } 
            else if(filtered.length==0) {
                return btnToCart(true)
            }
    }

    const handleSubFromCart = (e)=> {
        const btnContainer = document.querySelector(`.${name.replaceAll(' ', '')}`)
        const elements = btnContainer.lastChild
        
        if(elements !== null) {

            //SETTING THE COUNTER IN THE BUTTON
            const btnContainer = document.querySelector(`.${name.replaceAll(' ', '')}`)
            const span = btnContainer.querySelector('span')
            const  btnCounter = span.querySelector('p')
            
            
            //VERIFY IF WE HAVE AT LEAST ONE OF THE ELEMENT
            const elementID = elements.children[0].innerText
            const elementPrice = elements.children[2].innerText.replace('$', '')
            
            const arrtest = value.filter((e)=>{
                const cost = Number(e.price.replace('$', ''))
                if(e.id==elementID && e.times>1) {
                    btnCounter.innerText = Number(btnCounter.innerText)-1
                    return e
                } else if(e.id==elementID && e.times == 1) {
                    
                    //SETTING THE NUMBER IN THE BUTTON
                    btnCounter.innerText = Number(btnCounter.innerText)-1
                    
                    deleteItem(e.name, 1, cost)
                    return
                }
            })

          return  Boolean(arrtest.length)?subItems(elementID, elementPrice):console.log(value)
        }
    }

    useEffect(()=>{
        if(!value.length) {
            setIsVisible(false)
            const btnContainer = document.querySelector(`.${name.replaceAll(' ', '')}`)
            const currentBTN = btnContainer.querySelector('button')
            currentBTN.style.backgroundColor = 'white'
        }
    }, [value])

    return(
    <>
        <button className='product-btn semi-bold-font' onClick={()=>btnToCart(false)}>
            {!isVisible?
            (<>
            <div className="product-btn--first">
                    <BsCartPlus/>
                    Add to Cart
                </div>
            </>)                
            :(
                <>
                <span className="product-btn--qty">
                   <span onClick={(e)=>handleSubFromCart(e)}><BsPatchMinus/></span>
                        <p className="actual-qty">{btnqty>=0?btnqty:0}</p>
                    <span onClick={(e)=>handleAddToCart(e)}><BsPatchPlus/></span>
                </span>
                </>)
                }
        </button>
    </>
    )
}