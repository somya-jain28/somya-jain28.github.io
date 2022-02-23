import React from 'react';
import Header from "./Header/Header";
import ShareWishlist from "./Content/ShareWishlist";
import Content from "./Content/Content";

function Container(){
    console.log("inside container")
    const usersWishlist = [
        {
            "wishtlist_name" : "Fashion",
            "wishtlist_id" : "101"
        },
        {
            "wishlist_name" : "Beauty",
            "wishlist_id" : "102"
        }
    ]

    return(
        <div>
            <div className='index-headingDiv'>
                <span className='index-heading'> My Whishlist </span>
            </div>
            <ShareWishlist />
            <Content wishlistId={101}/>
        </div>
    )
}
export default Container