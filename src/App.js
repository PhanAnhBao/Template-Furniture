import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './layout/footer';
import Header from './layout/header';
import Main from './layout/main';
import Sidebar from './layout/sidebar';
import Slider from './layout/slider';

function App() {
  return (
    <div className="App">
      <nav className='Header__app'>
        <Header />
      </nav>

      <section className='Main__app '>
        <section class="section--slider">
          <Routes>
            <Route exact path='/' element={<Slider />} />
            <Route exact path='/home' element={<Slider />} />
            <Route exact path='/product' element={<Slider />} />
          </Routes> 
        </section>
        <div className='section container'>
          <Sidebar />
          <Main />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
