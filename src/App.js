import './App.css';
import Header from './components/Header/Header';
import UserForm from './components/UserForm/UserForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <UserForm></UserForm>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
