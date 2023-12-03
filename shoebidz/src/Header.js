//the search and main top bar for
import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Header() {
  return (
    <div className="header">
      <img className="header_logo"
        src="https://images.unsplash.com/photo-1696539681566-98da5a8649c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60S'/"
        />
        <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon"/>
        </div>
        <div className="header_nav">
            <div className="header_option">
                <span className='header__optionLineOne'>
                    Hello Guest
                </span>
                <span className='header__optionLineOne'>
                    Sign In
                </span>
            </div>

            <div className="header_option">
                <span className='header__optionLineOne'>
                    Returns
                </span>
                <span className='header__optionLineOne'>
                    Orders
                </span>
            </div>

            <div className="header_option">
                <span className='header__optionLineOne'>
                    Your
                </span>
                <span className='header__optionLineOne'>
                    Prime
                </span>
            </div>
            <div className='header_optionBasket'>
                <AddShoppingCartIcon />
                <span className='header_optionLineTwo header_basketCount'>0</span>
                
            </div>
        </div>
    </div>
  )
}
export default Header 
