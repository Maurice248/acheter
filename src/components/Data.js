import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';



export const Data = [
    {
        title: 'Home',
        path : '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Transaction',
        path : '/transaction',
        icon: <AiIcons.AiOutlineTransaction />,
        cName: 'nav-text'
    },
    {
        title: 'MyProducts',
        path : '/myproduct',
        icon: <FaIcons.FaRegListAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path : '/settings',
        icon: <AiIcons.AiFillSetting />,
        cName: 'nav-text'
    },
    
]