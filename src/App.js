import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import AuthProvider from './conext/AuthProvider';

function App() {
  return (
    <div className="App">
<AuthProvider>
<BrowserRouter>
     <Header/>
     <Switch>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
 <Route path="/register">
   <Register></Register>
 </Route>
     </Switch>
     </BrowserRouter>
</AuthProvider>
    </div>
  );
}

export default App;
