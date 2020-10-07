import React from 'react'
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <img className ='header_logo' alt='🧙‍♂️' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />

      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='headerNav'>
        <Link to='/login' className='header_link'>
          <div className='header_option'>
            <span> Hello Andrew</span>
            <span> Sign In</span>
          </div>
        </Link>
      </div>
    </div>
  )
}