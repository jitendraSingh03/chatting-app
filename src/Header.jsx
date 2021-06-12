import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
            <Avatar alt="Remy Sharp" src={user?.photoURL} alt={user?.displayName}/>
                {/* <Avatar className="header__avatar" alt='asfs' src={AccountCircle}/> */}
                {/* <AccountCircleIcon/> */}
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
            <SearchIcon/>
            <input placeholder='search js Developers'/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header











