import logo from './logo.svg';
import './App.css';
import PropertyForm from './components/property-form';
import SignUpForm from './components/sign-up-form';
import LoginForm from './components/login-form';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import FilePage from './pages/file-page';
import Header from './components/header';

function App() {
  return (
    <div className="App">
     <h1>homeable</h1>
        {/* <PropertyForm /> */}
        {/* <SignUpForm /> */}
        {/* <LoginForm /> */}
        {/* <Header /> */}
        {/* <LoginPage /> */}
        <FilePage />
        {/* <HomePage /> */}
    </div>
  );
}

export default App;
