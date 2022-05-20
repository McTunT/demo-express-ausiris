import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useMediaQuery from '../hooks/useMediaQuery'

const Header = () => {
  const isTablet = useMediaQuery('(max-width:900px)')
  const [isHidden, setIshidden] = useState(true)

  const { cartProds } = useSelector((state) => state.cartProds)
  const { wishlistProds } = useSelector((state) => state.wishlistProds)

  return (
    <div className="flex h-20 items-center justify-between bg-red-50 px-8">
      <Link
        to="/"
        className="select-none text-5xl font-bold tracking-widest text-gray-900"
      >
        Sofa.
      </Link>

      <ul
        className={`${isTablet && 'mobileNav'} ${
          isHidden && isTablet && 'hiddenNav'
        } relative flex items-center justify-between gap-8 `}
      >
        <li onClick={() => setIshidden(true)} className="link">
          <Link to="/">Home </Link>
        </li>
        <li onClick={() => setIshidden(true)} className="link">
          <Link to="/catalog">Catalog </Link>
        </li>
        <li onClick={() => setIshidden(true)} className="link">
          <Link to="/about">About us </Link>
        </li>
        <li onClick={() => setIshidden(true)} className="link">
          <Link to="contact">Contacts </Link>
        </li>
      </ul>

      <ul
        className={`${
          isTablet && 'mobileIcons m-auto shadow-md md:w-1/2'
        } flex items-center justify-between gap-8 `}
      >
        {isTablet && (
          <li>
            <Link to="/">
              <i className="fas fa-home text-gray-500 hover:text-gray-900"></i>
            </Link>
          </li>
        )}
        <li>
          <Link to="/profile">
            <i className="fas fa-user text-gray-500 hover:text-gray-900"></i>{' '}
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className="relative">
            {' '}
            <i className="fas fa-heart text-gray-500 hover:text-gray-900"></i>
            {wishlistProds.length > 0 && (
              <span className="absolute top-[-10px] right-[-15px] h-5 w-5 rounded-full bg-gray-900 text-center text-sm text-gray-100">
                {wishlistProds.length}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/cart" className="relative">
            {' '}
            <i className="fas fa-shopping-bag text-gray-500 hover:text-gray-900"></i>
            {cartProds.length > 0 && (
              <span className="absolute top-[-10px] right-[-15px] h-5 w-5 rounded-full bg-gray-900 text-center text-sm text-gray-100">
                {cartProds.length}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {isTablet && (
        <i
          onClick={() => setIshidden(!isHidden)}
          className={`fas fa-bars ${!isHidden && 'fa-times'}`}
        ></i>
      )}
    </div>
  )
}
export default Header
