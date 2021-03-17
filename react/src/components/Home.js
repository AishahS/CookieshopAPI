import { Description, ShopImage, Title } from "../styles";
import { useEffect } from "react";
const Home = (props) => {
  useEffect(() => {
    props.setTitle("Home");
  });
  return (
    <>
      <Title>Cookies and Beyond</Title>
      <Description>Where cookie maniacs gather</Description>
      <ShopImage
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
    </>
  );
};

export default Home;
