import React from 'react'
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'; 
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <Link to="/">
      <img 
      className ='header_logo' 
      alt='🧙‍♂️' 
      src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </Link>


      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='header_nav'>
        <Link to='/login' className='header_link'>
          <div className='header_option'>
            <span className="header_optionLineOne"> Hello Andrew</span>
            <span className="header_optionLineTwo"> Sign In</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option'>
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to='/' className='header_link'>
          <div className='header_option'>
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to='/Checkout' className="header_link">
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}