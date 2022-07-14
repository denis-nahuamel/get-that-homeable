import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/sign-up-form';
import LoginForm from './components/login-form';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import Header from './components/header';
import SelectProfile from './pages/select-profile-page';
import PropertyData from './components/property-components/property-data';
import  PropertyCard  from './components/property-components/property-card';
import PropertiesPage from './pages/properties-page';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     
        {/* <PropertyForm /> */}
        {/* <SelectProfile /> */}
        {/* <SignUpForm /> */}
        {/* <LoginForm /> */}
        {/* <Header /> */}
        {/* <LoginPage /> */}
        {/* <HomePage /> */}
        {/* <PropertyData /> */}
        <Header />
          <PropertiesPage />
        <Footer />
        {/* <PropertyCard /> */}
    </div>
  );
}

export default App;
