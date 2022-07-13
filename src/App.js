import logo from './logo.svg';
import './App.css';
import PropertyForm from './components/property-form';
import SignUpForm from './components/sign-up-form';
import LoginForm from './components/login-form';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import Header from './components/header';
import SelectProfile from './pages/select-profile-page';
import PropertyData from './components/property-data';

function App() {
  return (
    <div className="App">
     
        <PropertyForm />
        {/* <SelectProfile /> */}
        {/* <SignUpForm /> */}
        {/* <LoginForm /> */}
        {/* <Header /> */}
        {/* <LoginPage /> */}
        {/* <HomePage /> */}
        {/* <PropertyData /> */}
    </div>
  );
}

export default App;
