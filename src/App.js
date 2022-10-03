import './styles/Library.css'
import './App.css';
import Header from './components/Header';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer'
import WebsiteLayout from './layouts/WebsiteLayout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <ScrollToTop/>
      <Header />
      <HeaderBar />
      <WebsiteLayout />
      <Footer />
    </>
  );
}

export default App;
