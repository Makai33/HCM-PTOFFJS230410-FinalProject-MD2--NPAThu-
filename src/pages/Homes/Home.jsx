import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductList from "@components/ProductList";
import Carousel from "react-bootstrap/Carousel";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  const dispatch = useDispatch();
  const counterStore = useSelector((store) => store.counterStore);

  useEffect(() => {
    console.log("counterStore", counterStore);
  }, []);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="mt-5">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://hocvienhangkhong.edu.vn/kinhdoanhviet/wp-content/uploads/2017/11/l_kids_summer_shorts_en-min-e1501489025968.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://hocvienhangkhong.edu.vn/kinhdoanhviet/wp-content/uploads/2017/11/l_kids_summer_shorts_en-min-e1501489025968.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hocvienhangkhong.edu.vn/kinhdoanhviet/wp-content/uploads/2017/11/l_kids_summer_shorts_en-min-e1501489025968.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <ProductList />
    </>
  );
}
