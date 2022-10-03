import logo from './logo.svg';
import './styles/Library.css'
import './App.css';
import Header from './components/Header';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer'
import WebsiteLayout from './layouts/WebsiteLayout';

function App() {
  return (
    <>
      <Header />
      <HeaderBar />
      <WebsiteLayout />
      <Footer />
    </>
  );
}

export default App;
