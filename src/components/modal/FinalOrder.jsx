import './finalOrder.css'

export const FinalOrder = ({ name, qty, price, category })=> {
    const realPrice = Number(price.replace('$', ''))
    const thumbnailName = category.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll(' ', '-')

    return(
        <>
             <div className="order">
                 <div className="order__item">
                     <div className="order__item__info">
                        <img className='order__item--thumbnail'
                             src={`./src/assets/images/image-${thumbnailName}-thumbnail.jpg`} 
                             alt={name} />
                        <div className='order__item__container'>
                                <p className='order__item--name semi-bold-font'>{name}</p>
                            <div className='order__item--costs semi-bold-font'>
                                <div className='order__spec'>
                                    <p className="order__item--quantity">{qty}x</p>
                                    <p className="order__item--unit-price">@ {price}</p>
                                </div>
                                <p className="order__item--total-price bold-font">${realPrice*qty}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}