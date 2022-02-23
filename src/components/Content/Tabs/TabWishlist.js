import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Content from "../Content";

function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function TabWishlist() {
    const [currentTab, setCurrentTab] = React.useState(0);
    const usersWishlist = [
        {
            "wishlist_name": "Fashion",
            "wishlist_id": 101
        },
        {
            "wishlist_name": "Beauty",
            "wishlist_id": 102
        },
        {
            "wishlist_name": "Lifestyle",
            "wishlist_id": 103
        }
    ]
    const handleChange = (event, newTab) => {
        setCurrentTab(newTab);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={currentTab} onChange={handleChange} aria-label="wishlists">
                    {
                        usersWishlist.map(({wishlist_name,wishlist_id})=>(
                            <Tab key={wishlist_id} label={wishlist_name}/>
                        ))
                    }
                </Tabs>
            </Box>
            {
                usersWishlist.map((obj,index)=>(
                    <TabPanel key={obj.wishlist_id} value={currentTab} index={index}>
                        <Content wishlistName={obj.wishlist_name}/>
                    </TabPanel>
                ))
            }
        </Box>
    );
}
