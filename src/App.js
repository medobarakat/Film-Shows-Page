import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:ImdbID" element={<MovieDetail />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
