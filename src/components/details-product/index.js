import { useState } from "react";
import { Link } from "react-router-dom";
import { manyBuyer } from "../../data/home.data";
import './styles.scss';
function DetailProduct() {
    return (
        <div className="detail__products">
            <div className="section--right__details">
                <div className="details--img">
                    <div className="details--img__main">
                        <img src="./images/item__detail.png" alt="ring" />
                        <span className="discount"></span>
                    </div>

                    <div className="details--img__slide">
                        <img src="./images/item__detail--02.png" alt="rings" />
                        <img src="./images/item__detail--01.png" alt="rings" />
                        <img src="./images/item__detail--04.png" alt="rings" />
                        <button className="slide--button slide--button__left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="slide--button slide--button__right">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="details--info">
                    <h1>Tủ giày CANE - Tủ giày cánh mây cho gia đình</h1>
                    <div className="quality">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 quality__svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 quality__svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 quality__svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 quality__svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <p><strong>Giá:</strong> <p><del>$400.00</del> <span class="price">$240.00</span></p></p>
                    <p><strong>Trạng thái:</strong> Còn hàng</p>
                    <p><strong>Size: </strong>
                        <select className="size">
                            <option>100x50</option>
                            <option>120x50</option>
                            <option>150x60</option>
                        </select>
                    </p>
                    <div className="quantity__addtocart">
                        <input type="number" min="1" max="10" placeholder="Số lượng" />
                        <button className="border__button radius">Thêm vào giỏ</button>
                    </div>
                    <p><strong>Loại:</strong> Tủ kệ</p>
                    <p><strong>Hiệu:</strong> Fego</p>
                </div>
            </div>
            <div className="details--info__table">
                <div className="h2_Details">
                    <h2>Mô tả</h2>
                </div>
                <div className="paragraph">
                    <p>
                        Tủ giày CANE - Tủ giày cánh mây là một sản phẩm dành cho gia đình, với kích thước lớn có thể chứa từ 25 - 30 đôi giày, FEGO hi vọng mỗi ngôi nhà chỉ cần sử dụng 1 tủ giày duy nhất là có thể chứa đủ số lượng giày cho cả gia đình
                    </p>
                    <p>
                        Nổi bật nhất chính là phần cánh tủ làm từ mây tự nhiên, giúp không khí lưu thông trong kệ giày để những đôi giày không bị bí hoặc ẩm mốc
                    </p>
                    <p>
                        Mỗi không gian trong căn nhà của bạn có thể trở thành 1 góc trang trí đầy cảm hứng, Entry corner là nơi mà bạn nhìn thấy cuối cùng mỗi khi rời khỏi và là nơi đầu tiên bạn nhìn thấy khi trở về ngôi nhà thân thương, FEGO hi vọng các sản phẩm của mình có thể giúp khách hàng cảm thấy thoải mái và nhẹ nhõm mỗi khi sử dụng.
                    </p>
                </div>

                <div className="h2_Details">
                    <h2>Chi tiết</h2>
                </div>
                <div className="table__details">
                    <table>
                        <tbody>
                            <tr>
                                <td className="bold">Thương hiệu:</td>
                                <td>Fego</td>
                            </tr>
                            <tr>
                                <td className="bold">Loại sản phẩm:</td>
                                <td>kệ tủ</td>
                            </tr>
                            <tr>
                                <td className="bold">Loại Gỗ:</td>
                                <td>Gỗ Liêm</td>
                            </tr>
                            <tr>
                                <td className="bold">Chiều dài:</td>
                                <td>120cm</td>
                            </tr>
                            <tr>
                                <td className="bold">Chiều rộng:</td>
                                <td>50cm</td>
                            </tr>
                            <tr>
                                <td className="bold">Chiều cao:</td>
                                <td>100cm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="related__products">
                <div className="related">
                    <h2 className="related__h2">
                        Liên quan
                    </h2>
                </div>
                <div className="products--orders--row ">
                    <button className="slide--button slide--button__left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="slide--button slide--button__right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    {
                        manyBuyer.map(item => (
                            <div className="products--orders__item">
                                <div className="products--items__img">
                                    <img src={`./${item.imgUrl}`} alt="rings" />
                                    <div className="overlay">
                                        <div className="text">
                                            <img src={`./${item.imgUrl1}`} alt="rings" />
                                        </div>
                                    </div>
                                </div>
                                <div className="products--items__info">
                                <Link to="/productdetails">{item.name}</Link>
                                    <p>${item.price}.00</p>
                                    <button>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailProduct;