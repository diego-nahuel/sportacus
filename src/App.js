import './styles/Library.css'
import './App.css';
import WebsiteLayout from './layouts/WebsiteLayout';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
    <Provider store={store}>
      <WebsiteLayout />
    </Provider>
    </>
  );
}

export default App;
