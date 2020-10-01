import React from 'react'
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <img className ='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      <div classname='header_search'>
        <input className='header_searchInput' type='text'></input>
        {/* Logo */}
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header__optionLineOne'>Hello guest</span>
        </div>
        <div className='header_option'>
          <span className='header__optionLineOne'>Sign In</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>& Orders</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Prime</span>
        </div>
      </div>
    </div>
  )
}