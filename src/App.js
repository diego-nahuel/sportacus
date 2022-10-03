import './styles/Library.css'
import './App.css';
import WebsiteLayout from './layouts/WebsiteLayout';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
    <Provider store={store}>
      <ScrollToTop />
      <WebsiteLayout />
    </Provider>
    </>
  );
}

export default App;
