import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux";
import { userLoginActions } from "@stores/slices/userLogin.slice";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Dropdown, Modal } from "antd";

const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

export default function Navbars() {
  const dispatch = useDispatch();
  const userLoginStore = useSelector((store) => store.userLoginStore);

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
  }, []);
  ////
  // const {  products, isLoading } = useSelector((state) => state.product);
  // const products = useSelector((state) => state.product);
  // const [filteredProducts, setFilteredProducts] = useState(products);
  // const [searchTerm, setSearchTerm] = useState("");

  // const changeSearchTerm = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // useEffect(() => {
  //   setFilteredProducts(products.filter((product) => user.name.toLowerCase().includes(action.payload.toLowerCase());

  // }, [searchTerm]);

  // // Just for debug/logging purposes to see your filteredUsers
  // useEffect(() => {console.log(filteredUsers)}, [filteredUsers]);

  ////

  // const items = [
  //   {
  //     key: "1",
  //     label: (
  //       <a target="_self" rel="noopener noreferrer" href="#">
  //         My account
  //       </a>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <a target="_self" rel="noopener noreferrer" href="#">
  //         Wishlist
  //       </a>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <Link
  //         target="_blank"
  //         className="nav-link "
  //         aria-current="page"
  //         to="/login"
  //       >
  //         Logout
  //       </Link>
  //     ),
  //   },
  // ];
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/men">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/women">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/kid">
                Kid
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/sale">
                Sales
              </Link>
            </li>
          </ul>
        </div>
        <div className="searchBox d-flex" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // onChange={changeSearchTerm}
          />
          <button type="button" class="btn btn-dark">
            Search
          </button>
        </div>

        <div>
          {userLoginStore.userInfor == null ? (
            <div className="d-flex">
              <Link className="nav-link" aria-current="page" to="/login">
                <i
                  onClick={() =>
                    alert(
                      "Bạn chưa đăng nhập. Vui lòng đăng nhập để truy cập giỏ hàng của mình."
                    )
                  }
                  className="bi bi-cart-check"
                  style={{ color: "white", paddingRight: "12px" }}
                ></i>
              </Link>
              <Link className="nav-link" aria-current="page" to="/login">
                <i
                  className="icon_img fa-solid fa-user"
                  style={{ color: "white", cursor: "pointer" }}
                ></i>
              </Link>
            </div>
          ) : (
            <div className="icon">
              <div className="navbar-nav me-auto mb-2 mb-lg-0 nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-cart-check"></i>
                </Link>
                <div style={{ color: "white" }}>{cartItems.length}</div>
              </div>
              {/* <span>
                Xin Chào {userLoginStore.userInfor.firstName}{" "}
                {userLoginStore.userInfor.lastName}
              </span>
              <img
                className="avatarImg"
                src={userLoginStore.userInfor.avatar}
              /> */}
            </div>
          )}
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container_fluid">
    //     <Link className="nav-link navbar-brand" to="/home">
    //       Logo
    //     </Link>
    //     {/* <a className="navbar-brand" href="./Home">
    //       Logo
    //     </a> */}
    //     {/* <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button> */}
    //   </div>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //       <li className="nav-item">
    //         <Link className="nav-link " aria-current="page" to="/men">
    //           Men
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/women">
    //           Women
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/kid">
    //           Kid
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/sales">
    //           Sales
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="searchBox d-flex" role="search">
    //     <div>
    //       <input
    //         className="form-control me-2"
    //         type="search"
    //         placeholder="Search"
    //         aria-label="Search"
    //       />
    //     </div>
    //     {userLoginStore.userInfor === null ? (
    //       <div className="icon">
    //         <i
    //           onClick={showModal}
    //           className="icon_img fa-solid fa-cart-shopping"
    //         ></i>
    //         <Modal
    //           title="Basic Modal"
    //           open={isModalOpen}
    //           onOk={handleOk}
    //           onCancel={handleCancel}
    //         >
    //           <p>Some contents...</p>
    //           <p>Some contents...</p>
    //           <p>Some contents...</p>
    //         </Modal>
    //         <Dropdown
    //           menu={{
    //             items,
    //           }}
    //           placement="bottomRight"
    //           arrow
    //         >
    //           <Space className="icon_img" size={20} wrap>
    //             <Avatar
    //               style={{
    //                 backgroundColor: "#033",
    //               }}
    //               icon={<UserOutlined />}
    //             />
    //           </Space>
    //         </Dropdown>
    //       </div>
    //     ) : (
    //       <div className="avatarBox">
    //         <i className="icon_img fa-solid fa-user"></i>
    //         <span>
    //           Xin Chào {userLoginStore.userInfor.firstName}{" "}
    //           {userLoginStore.userInfor.lastName}
    //         </span>
    //         <img className="avatarImg" src={userLoginStore.userInfor.avatar} />
    //         <div className="popup">
    //           <ul>
    //             <li>my accout</li>
    //             <li>logout</li>
    //             <li>wishlist</li>
    //           </ul>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </nav>
  );
}
