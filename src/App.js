import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  // const [userToken, setUserToken] = useContext({});

  const Shop = () => {
    return <h1>I am the shop</h1>;
  };

  const Cart = () => {
    return <h1>I am the Cart</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
