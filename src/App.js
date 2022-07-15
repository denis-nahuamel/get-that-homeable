import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/sign-up-form';
import LoginForm from './components/login-form';
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';
import FilePage from './pages/file-page';
import Header from './components/header';
import SelectProfile from './pages/select-profile-page';
import PropertyData from './components/property-components/property-data';
import  PropertyCard  from './components/property-components/property-card';
import PropertyForm from './components/property-components/property-form';
import PropertiesPage from './pages/properties-page';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/sign-up-page';

function App() {
  return (
    <div className="App">
     
        {/* <PropertyForm /> */}
        {/* <SelectProfile /> */}
        {/* <SignUpForm /> */}
        {/* <LoginForm /> */}
        {/* <Header /> */}
        {/* <LoginPage /> */}
        {/* <FilePage /> */}
        {/* <HomePage /> */}
        {/* <PropertyData /> */}
        {/* <Routes >
          <Route path="/login" element={<LoginPage />}/>
        </Routes> */}
        <Header />

        <Routes>
          <Route path="/">
            <Route index element={<HomePage/>}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="list-properties" element = {<PropertiesPage />}/>
            <Route path="select-profile/sign-up" element = {<SignUpPage/>}/>
            <Route path="select-profile" element = {<SelectProfile/>}/>
            <Route path = "create-property" element = {<PropertyForm />} />
          </Route>

        </Routes>
        <Footer /> 
        {/* <PropertyCard /> */}
    </div>
  );
}

export default App;
