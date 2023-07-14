import "./App.scss";
import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import LazyLoad from "./LazyLoad";
import Navbar from "@components/Navbars/Navbar";
import { Layout } from "antd";
import { InstagramOutlined } from "@ant-design/icons";
import Cart from "@components/Cart";
import Home from "@pages/Homes/Home";
import Login from "@pages/Logins/Login";
import Men from "./pages/Men_/Men";
import Women from "./pages/Women_/Women";
import Kid from "./pages/Kids/Kid";
import Sale from "./pages/Sales/Sale";
import SearchResult from "./pages/SearchResult";
const { Footer } = Layout;
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes className="mt-3">
        <Route path="/home" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/men" exact element={<Men />} />
        <Route path="/women" exact element={<Women />} />
        <Route path="/kid" exact element={<Kid />} />
        <Route path="/sale" exact element={<Sale />} />
        <Route path="/search_result" exact element={<SearchResult />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
      <Footer
        className="footer_container fixed-bottom"
        style={{
          width: "100%",
          height: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="d-flex ">
          <div>Module02-Final - All right reserved ©2023 Created by MK</div>
          <div>
            <InstagramOutlined style={{}} />
          </div>
        </div>
      </Footer>
    </div>
    // <div className="App">
    //   {/* Header Navbar */}
    //   <div className="navbar_container">
    //     <div className="navbar_contents">
    //       <Navbar />
    //     </div>
    //   </div>

    //   <div className="app_container">
    //     {/* Content Router */}
    //     <Routes>
    //       <Route
    //         path="/home"
    //         element={LazyLoad(() => import("@pages/Homes/Home"))()}
    //       />
    //       <Route
    //         path="/men"
    //         element={LazyLoad(() => import("@pages/Men_/Men"))()}
    //       />
    //       <Route
    //         path="/women"
    //         element={LazyLoad(() => import("@pages/Women_/Women"))()}
    //       />
    //       <Route
    //         path="/kid"
    //         element={LazyLoad(() => import("@pages/Kids/Kid"))()}
    //       />
    //       <Route
    //         path="/sales"
    //         element={LazyLoad(() => import("@pages/Sales/Sale"))()}
    //       >
    //         {/* Router Con Của About */}
    //         <Route
    //           path="my-infor"
    //           element={LazyLoad(() =>
    //             import("@pages/Abouts/MyInfors/MyInfor")
    //           )()}
    //         ></Route>
    //       </Route>
    //       <Route
    //         path="/login"
    //         element={LazyLoad(() => import("@pages/Logins/Login"))()}
    //       ></Route>
    //     </Routes>
    //   </div>

    //   {/* Content Footer */}
    //   <Footer
    //     className="footer_container"
    //     style={{
    //       width: "100%",
    //       height: "30px",
    //       display: "flex",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div>Module02-Final - All right reserved ©2023 Created by MK</div>
    //     <div>
    //       <InstagramOutlined />
    //     </div>
    //   </Footer>
    // </div>
  );
}

export default App;
