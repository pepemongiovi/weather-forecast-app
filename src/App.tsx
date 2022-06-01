import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/RegisterAttendeePage/HomePage';
import { Fragment } from 'react';
import AppBar from './components/AppBar/AppBar';

const App = () => {
  return (
    <Fragment>
      <AppBar />
      <HomePage />
      <ToastContainer position='bottom-right' theme='colored' />
    </Fragment>
  );
}

export default App;
