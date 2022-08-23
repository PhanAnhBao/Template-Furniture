import {
    Link
} from 'react-router-dom'
import { brands, category } from '../../data/header.data';
import './styles.scss';

function Header() {

    let openSearch = () => {
        document.getElementById("myOverlay").style.display = "block";
    }

    let closeSearch = () => {
        document.getElementById("myOverlay").style.display = "none";
    }
    return (
        <div className="Header">
            <nav className="header--nav__top">
                <p>Đăng ký thành viên nhận ngay voucher giảm 5% tổng đơn</p>
            </nav>
            <nav className="header--nav__middle">
                <div className="nav__middle__contact">
                    <div className="contact__phone">
                        <a href="#" className="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +0285 667 779
                        </a>
                    </div>
                    <div className="contact__email">
                        <a href="#" className="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            KCShop@gmail.com
                        </a>
                    </div>
                </div>
                <div className="nav__middle__content">
                    <p>Sales lớn các dịp lễ! <span>Mua sắm thôi</span></p>
                </div>
                <div className="nav__middle__nation">
                    <div className="nation__location">
                        <a href="#" className="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Vị trí
                        </a>
                    </div>
                    <div className="nation__language">
                        <a href="#" className="inline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            Tiếng Việt
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="header--nav__bottom">
                <div className="mobile--nav__menu">
                    <button className="btn__menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="bottom__logo">
                    <Link to="/home">
                        <img src="./images/logo.webp" alt="logo" />
                    </Link>

                </div>
                <div className="bottom__menu">
                    <ul>
                        <li><Link className="bottom__menu--a" to="/home">Trang chủ</Link></li>
                        <li><Link className="bottom__menu--a" to="/product">Sản phẩm</Link></li>
                        <li className="bottom__menu--popup">
                            <a className="bottom__menu--a" href="#">Loại sản phẩm</a>
                            <div className="hidden popup">
                                {
                                    category.map(item => (
                                        <Link key={item.id} to="#">{item.name}</Link>
                                    ))
                                }
                            </div>
                        </li>
                        <li className="bottom__menu--popup">
                            <a className="bottom__menu--a" href="#">Thương hiệu</a>
                            <div className="hidden popup">
                                {
                                    brands.map(item => (
                                        <Link key={item.id} to="#">{item.name}</Link>
                                    ))
                                }
                            </div>
                        </li>
                        <li><a className="bottom__menu--a" href="./contact.html">Liên hệ</a></li>
                        <li><a className="bottom__menu--a" href="./about-us.html">Giới thiệu</a></li>
                    </ul>
                </div>
                <div className="bottom__user">
                    <ul>
                        <li><a className="bottom__user--a openBtn" onClick={openSearch}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg></a></li>
                        <div id="myOverlay" className="overlaySearch">
                            <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
                            <div className="overlay-content">
                                <form action=" ">
                                    <input type="text" placeholder="Search.." name="Bạn đang tìm gì thế?"/>
                                        <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                        <li className="bottom__user--login user">
                            <a href="#" className="bottom__user--a"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg></a>
                            <div className="expanding--menu hidden">
                                <a href="./signin.html">Login</a>
                                <a href="./signup.html">Register</a>
                            </div>
                        </li>
                        <li className="heart"><a href="#" className="bottom__user--a"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg></a></li>
                        <li className="cart__box">
                            <a href="./cart.html" className="bottom__user--a"><svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                                <span id="numbers"></span>
                            </a>

                            <div className="cart__item hidden">

                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="bottom__menu--mobile">

            </div>

        </div>
    );
}

export default Header;