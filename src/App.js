import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddServices from './Pages/AddService/AddServices';
import Booking from './Pages/Booking/Booking';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageUsers from './Pages/ManageUsers/ManageUsers';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/about'>
              <About></About>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/booking/:serviceID'>
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path='/manage'>
              <ManageUsers></ManageUsers>
            </Route>

            <Route exact path='/addservice'>
              <AddServices></AddServices>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
