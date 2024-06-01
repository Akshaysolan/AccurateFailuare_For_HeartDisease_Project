import Header from './Header';
import Footer from './Footer';
import diseaseImage from '../images/th.png'
function Home() {
    return (
      <div >
        <Header/>
        <Footer/>
        <div className='navbar-image'>
            <img src={diseaseImage} alt="Heart Disease" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
      </div>
    );
  }

  export default Home;