import React from 'react'
import './header.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsCart3} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import { useStateValue } from '../redux/StateProvider';


function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return ( 
        <div className='header'>
            <Link to='/'>
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt='amazon logo' />
            </Link>
            <div className="header__option" style={{marginRight: "-5px"}}>
                <HiOutlineLocationMarker/>
            </div>
            <div className='header__option'>
                    <span className='header__optionLineOne'> Hello </span>
                    <span className='header__optionLineTwo'> Select your address</span>
                </div>
            <select className='option'>
                <option>All</option>
            </select>
            <div className='header__search'>
                <input className='header__searchInput ' type="text" /><BiSearchAlt2 className='header__searchIcon'/> 
            </div>

            <div className='header__nav'>
            <Link to='/login'>
                <div className='header__option'>
                    <span className='header__optionLineOne'> Hello Guest</span>
                    <span className='header__optionLineTwo'> Sign in</span>
                </div>
            </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'> Return </span>
                    <span className='header__optionLineTwo'> & Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'> Your </span>
                    <span className='header__optionLineTwo'> Prime </span>
                </div>
                
                <Link to="/checkout"> 
                    <div className="header__optionBasket">
                    <BsCart3/>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                     </div>
                </Link>
            </div>
        </div>
    )
}

export default Header