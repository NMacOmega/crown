
import { Routes, Route } from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from './routes/signin/signin.component';

const App = () => {

  const Shop = ()=>{
    return(<h1>I am the shop</h1>);
  }


  const Cart = ()=>{
    return(<h1>I am the Cart</h1>);
  }

  return (
    <Routes>
      <Route path = '/' element= {<Navigation />}> 
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
