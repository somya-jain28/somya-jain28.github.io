import React, {useEffect, useState} from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Content.css';

function Content({wishlistName}) {

  const isShared = window.location.pathname.includes("share");
  const uid = isShared? window.location.pathname.split("/").at(-1) : "1234";
//response should be on the basis of uuid and wishlistId
  const response = [
    {
      img_url:'https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/13943620/2021/4/13/be83088f-2fc8-4e46-8836-8ff75021a7ee1618306562092-Inddus-Women-Blue-Solid-Silk-Gown-with-Embroidered-Jacket-81-1.jpg',
      product: {
        product_id: 1,
        product_name: 'Inddus Blue Silk Gown with Embroidered Jacket',
      },
      original_price: 'Rs.3,759',
      discounted_price: 'Rs.9,399',
      discount_percent: '(60% OFF)',
    },
    {
      img_url:'https://assets.myntassets.com/w_200,c_limit,fl_progressive,dpr_2.0/assets/images/15045830/2022/1/4/ad81e43e-8bbb-477b-9c97-053766415ed81641292277980-Harvard-Women-Jeans-921641292277181-4.jpg',
      product: {
        product_id: 1,
        product_name: 'Inddus Blue Silk Gown with Embroidered Jacket',
      },
      original_price: 'Rs.3,759',
      discounted_price: 'Rs.9,399',
      discount_percent: '(60% OFF)',
    },
    {
      img_url:'https://assets.myntassets.com/w_200,c_limit,fl_progressive,dpr_2.0/assets/images/15012182/2021/8/3/f20bda7e-0133-45b9-b37d-b8435f0af75b1628013022262MiteraPinkSilkBlendEthnicWovenDesignFestiveSareewithMatching1.jpg',
      product: {
        product_id: 2,
        product_name:
          'Global Desi Women Mustard Yellow & Off-White Printed Ruffle Detail Fit and Flare Dress',
      },
      original_price: 'Rs.1,759',
      discounted_price: 'Rs.5,399',
      discount_percent: '(30% OFF)',
    },
    {
      img_url:'https://assets.myntassets.com/w_200,c_limit,fl_progressive,dpr_2.0/assets/images/13455734/2021/2/11/2ad2c3fd-cf99-43af-bfb3-2eea6d7818851613033272335-Marks--Spencer-Women-Blue-Regular-Fit-Solid-Casual-Shirt-276-1.jpg',
      product: {
        product_id: 3,
        product_name: 'Inddus Grey Boat Neck Maxi Dress',
      },
      original_price: 'Rs.4,759',
      discounted_price: 'Rs.10,299',
      discount_percent: '(10% OFF)',
    },
    {
      img_url:'https://assets.myntassets.com/w_200,c_limit,fl_progressive,dpr_2.0/assets/images/16411586/2021/12/29/def4dccf-4981-4e3c-a737-7eff6a2937b71640768085490-Allen-Solly-Women-Peach-Coloured-Solid-Pumps-163164076808523-1.jpg',
      product: {
        product_id: 4,
        product_name: 'plusS Women Lovely Olive Solid Knits Top',
      },
      original_price: 'Rs.2,759',
      discounted_price: 'Rs.11,299',
      discount_percent: '(70% OFF)',
    },
  ];
  return (
    <div>
      <h3>{wishlistName}</h3>
      <ul className='index-wishListContainer'>
        {response &&
          response.map(
            ({
                img_url,
              product,
              original_price,
              discount_percent,
              discounted_price,
            }) => (
              <ItemCard
                key={product.product_id}
                imageUrl={img_url}
                productName={product.product_name}
                originalPrice={original_price}
                discountPrice={discounted_price}
                discountPercentage={discount_percent}
              />
            )
          )}
      </ul>
    </div>
  );
}

export default Content;


// http://myntra.com/whistlist/{1234}