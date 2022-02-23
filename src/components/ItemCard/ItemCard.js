import React from 'react'
import './ItemCard.css'

function ItemCard({imageUrl, productName, originalPrice, discountPrice, discountPercentage}) {
    console.log(imageUrl)
  return (
    <div className='itemcard-itemCard'>
        <div className='itemcard-itemImageDiv'>
            <a href="#"> 
                <picture className='img-responsive'>
                    <img class="itemcard-itemImage" src={imageUrl} />
                </picture>
            </a>
            <div className='itemcard-removeIcon'>
                {/* <img src={crossIcon} /> */}
            </div>
        </div>
        <div className='itemcard-itemActions'>
            <div className='itemdetails-itemDetails'>
                <p className='itemdetails-itemDetailsLabel'>{productName}</p>
                <p className='itemdetails-itemDetailsDescription'></p>
                <div className='itemdetails-itemPricing'>
                    <span className='itemdetails-boldFont'> {discountPrice} </span>
                    <span className='itemdetails-strike'> {originalPrice} </span>
                    <span className='itemdetails-discountPercent'> {discountPercentage} </span>
                </div>
            </div>
            <div className='itemcard-actionDiv'>
                <span className='itemcard-flex'>
                    <a class="itemcard-moveToBag itemcard-boldFont" href="/checkout/cart" data-ol-has-click-handler="">MOVE TO BAG</a>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ItemCard