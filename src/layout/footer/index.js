import { Link } from 'react-router-dom';
import { category } from '../../data/header.data';
import './styles.scss';

function Footer() {
    return (
        <footer>
            <div className="footer--service container">
                <div className="footer--service__address">
                    <div className="footer--logo">
                        <img src="./images/logo.webp" alt="logo" />
                    </div>
                    <div className="footer--address__phone">
                        <div className="address">
                            <a href="#" className="inline--svg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Binh Thanh District, Ho Chi Minh City, Vietnam
                            </a>

                        </div>
                        <div className="mail">
                            <a href="#" className="inline--svg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                KCShop@gmail.com
                            </a>
                        </div>
                        <div className="phone">
                            <a href="#" className="inline--svg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +0285 667 779
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer--information">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="./about-us.html">About us</a></li>
                        <li><a href="./contact.html">Contact us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer--categories">
                    <h3>Loại</h3>
                    <ul>
                        {
                            category.map(item => (
                                <li key={item.id}><Link to="#">{item.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="footer--usefullinks">
                    <h3>Useful links</h3>
                    <ul>
                        <li><a href="#">Store Location</a></li>
                        <li><a href="#">Latest News</a></li>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">FAQs 2</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer--newsletter">
                    <h3>Newsletter Signup</h3>
                    <ul>
                        <li>Subscribe to our newsletter and get 10% off your first purchase</li>
                        <li className="newletters">
                            <input type="text" placeholder="Your email address" />
                            <button>Subscribe</button>
                        </li>
                        <li className="pay">
                            <img src="./images/icon-pay-7-1_360x.png" alt="pay" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright container">
                <p>© 2022, KCSHOP - HTML Ecommerce Template All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;