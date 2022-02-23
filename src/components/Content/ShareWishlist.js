import React, {useState, useEffect} from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Content.css';
import Content from "./Content";
import shareIcon from "../../assets/shareIcon.png"
import './ShareWishlist.css'

function ShareWishlist() {

    const [showPopup, setShowPopup] = useState(false);
    const [isShared, setIsShared] = useState(false)
    const [copyUrl, setCopyUrl] = useState(false)
    useEffect(()=>{
        const urlAddress = window.location.pathname
        if (urlAddress.includes("share")) {
            setIsShared(true)
        }
    },[])

    const handleShareLink = () => {
        setShowPopup(true)
        console.log("hello")
    }

    const handleCopyLink = () => {
       setCopyUrl(true)
    }

    const handleClose = () => {
        setShowPopup(false)
    }

    const handleCopyUrl = async () => {
        let shareUrl = window.location.href + "share"
        await navigator.clipboard.writeText(shareUrl)
        alert("Url copied to clipboard")
    }

    return(
        <>

                <div className='index-headingDiv'>
                    <span className='index-heading' style={{fontSize: '24px', fontWeight: '700'}}> My Whishlist </span>
                    {
                        !isShared &&
                        <div style={{
                            float: 'right',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }} onClick={handleShareLink}>
                            <span style={{fontSize: '18px', fontWeight: '500'}}>Share your wishlist</span>
                            <img style={{height: '20px', width: '20px', marginLeft: '10px'}} src={shareIcon}/>
                        </div>
                    }
                </div>

            {
                showPopup &&
                <div id="overlay">
                    <div id="popup">
                        <div className="popupcontent">
                            <h1>Invite some people to</h1>
                            <div className="viewUrlContent">
                                <button onClick={handleCopyLink} className="viewButton">View Only </button>
                                {
                                    copyUrl &&
                                    <a onClick={handleCopyUrl} style={{cursor:'pointer'}}> Copy Url</a>
                                }
                            </div>
                            <button onClick={handleClose} style={{height: '50px', width: '100px'}}>CLOSE</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default ShareWishlist;