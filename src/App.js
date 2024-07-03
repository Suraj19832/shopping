import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Products from './Pages/Products';
import Mens from './Pages/Mens';
import About from './Pages/About';
import SignUp from './Components/SignUp';
import Cart from './Pages/Cart';
import Login from './Components/SignIn';
import Profile from './Components/Profile';
import ProtectedRoute from './Services/ProtectedRoute';

function App() {
  const [cartData, setCartData] = useState([]);
  const [promoInput, setPromoInput] = useState("");
  const [promo, setPromo] = useState("")
  const [promoCorrect, setPromoCorrect] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = React.useState(true);

  function getCartData(products) {
    let isItemExist = cartData.find((findVal) => {
      return findVal.id === products.id
    })
    if (isItemExist) {
      let duplicatePdt = cartData.map((item) => {
        return item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item
      })
      setCartData(duplicatePdt)
      console.log(cartData)
    } else {
      setCartData([...cartData, { ...products, quantity: 1 }])
    }
  }
  const handleQuantityInc = (id) => {
    let incre = cartData.map((item) => (
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
    setCartData(incre)
  }
  const handleQuantityDec = (id) => {
    let decre = cartData.map((item) => (
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ))
    setCartData(decre)
  }
  const handleRemove = (id) => {
    let filtered = cartData.filter((items) => {
      return items.id !== id
    })
    setCartData(filtered)
  }
  const totalAmount = () => {
    let total = cartData.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity
    }, 0)
    if (promoCorrect) {
      return total - discount;
    } else {
      return total
    }
  }
  const handlePromoCode = (e) => {
    setPromoInput(e.target.value);
  };
  useEffect(() => {
    if (promo === "SUNDAY50") {

      setPromoCorrect(true);
      setDiscount(totalAmount() * 0.5)
      setPromoInput("")
    } else {
      setPromoCorrect(false);
      setPromoInput("")
    }
  }, [promo]);
  const handleSubmit = () => {
    setPromo(promoInput);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartData={cartData} setName={setName} name={name} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products getCartData={getCartData} />} />
          <Route path='/mens' element={<Mens getCartData={getCartData} />} />
          <Route path='/womens' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/cartItems' element={<Cart cartData={cartData}
            handleQuantityInc={handleQuantityInc} handleQuantityDec={handleQuantityDec} handleRemove={handleRemove} totalAmount={totalAmount}
            handlePromoCode={handlePromoCode} handleSubmit={handleSubmit} promoCorrect={promoCorrect} promoInput={promoInput} />} />
          <Route path='/profile' element={<ProtectedRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
