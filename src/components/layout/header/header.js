import React from 'react';
import { ReactComponent as Logo } from 'assets/venia_logo.svg'
import { ReactComponent as Hamburger } from 'assets/hamburger.svg'
import { ReactComponent as Search } from 'assets/search.svg'
import { ReactComponent as ShoppingBag } from 'assets/shopping-bag.svg'
import { ReactComponent as User } from 'assets/user.svg'
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import 'components/layout/header/header.scss';


const Menus = () => (
    <ul>
        <li>
            <NavLink to="/product/list?category=women's clothing">
                Women
            </NavLink>
        </li>
        <li>
            <NavLink to="/product/list?category=men's clothing">
                Men
            </NavLink>
        </li>
        <li>
            <NavLink to="/product/list?category=electronics">
                Smart Gear
            </NavLink>
        </li>
        <li>
            <NavLink to="/product/list?category=jewelery">
                Accessories
            </NavLink>
        </li>
    </ul>
)

const Header = () => {
    return (
        <header className='header-section component-container'>
            <Media query={'(max-width: 1023px)'}>
                {matches => (
                    <>
                        {matches ? (
                            <div className='aem-Grid aem-Grid--12 mobile'>
                                <div className='aem-GridColumn aem-GridColumn--phone--4 aem-GridColumn--tablet--4'>
                                    <Hamburger />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--phone--4 aem-GridColumn--tablet--4'>
                                    <Logo />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--phone--4 aem-GridColumn--tablet--4'>
                                    <Search />
                                    <NavLink to="/cart"><ShoppingBag /></NavLink>
                                </div>
                            </div>
                        ) : (
                            <div className='aem-Grid aem-Grid--12 desktop'>
                                <div className='aem-GridColumn aem-GridColumn--default--2'>
                                    <Logo />
                                </div>

                                <div className='aem-GridColumn aem-GridColumn--default--6'>
                                    <Menus />
                                </div>

                                <div className='aem-GridColumn aem-GridColumn--default--4'>
                                    <div><Search /> Search</div>
                                    <div><User /> Sign In</div>
                                    <div><NavLink to="/cart"><ShoppingBag /></NavLink></div>
                                </div>
                            </div>
                        )}
                    </>
                )}

            </Media>
        </header>
    )
}



export default Header;