import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav';
import Link from './components/Link';
import { options } from './helpers/sideoptions';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <SideNav>
        <div>
        <Link url="#" icon="fa-solid fa-house" text={options[0]}></Link>
        <Link url="#" icon="fa-solid fa-address-card" text={options[1]}></Link>
        <Link url="#" icon="fa-solid fa-credit-card" text={options[2]}></Link>
        <Link url="#" icon="fa-solid fa-money-bill-wave" text={options[3]}></Link>
        </div>
        <div className='Logout'>
        <Link url="#" icon="fa-solid fa-user" text='Cerrar Sesión'></Link>
        </div>
      </SideNav>

    </div>
  );
}

export default App;
