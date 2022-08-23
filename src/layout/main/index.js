import './styles.scss';
import {
    Routes, Route
} from 'react-router-dom';
import Home from '../../components/home';
import Product from '../../components/product';
import DetailProduct from '../../components/details-product';
function Main() {
    return ( 
        <div className="section--right">
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/home' element={<Home />}/>
                <Route exact path='/product' element={<Product />}/>
                <Route exact path='/productdetails' element={<DetailProduct />}/>
            </Routes>
        </div> 
    );
}

export default Main;