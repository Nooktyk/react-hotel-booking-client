import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {

  const [sliderNumber,setSliderNumber] = useState(0);
  const [open,setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
  ];

  const handleOpen = (i) => {
      setSliderNumber(i);
      setOpen(true);
  };

  const handleMove = (direaction) => {
      let newSliderNumber;
      if(direaction === "l"){
          newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
      }else{
          newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
      }
      setSliderNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} 
              className="close" 
              onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} 
              className="arrow" 
              onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
              <img src={photos[sliderNumber].src} alt="" 
                className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} 
              className="arrow" 
              onClick={()=>handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitel">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <span className="hotelDistance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugit!
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $100 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} 
                  src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Grand Hotel</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem, delectus cumque excepturi unde nisi natus tempore consequuntur! Pariatur modi magnam quas. Provident repudiandae nam quibusdam vel iste sit dolores magnam aperiam? Quam ipsa magni ea at fugiat ullam quas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem, delectus cumque excepturi unde nisi natus tempore consequuntur! Pariatur modi magnam quas. Provident repudiandae nam quibusdam vel iste sit dolores magnam aperiam? Quam ipsa magni ea at fugiat ullam quas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem, delectus cumque excepturi unde nisi natus tempore consequuntur! Pariatur modi magnam quas. Provident repudiandae nam quibusdam vel iste sit dolores magnam aperiam? Quam ipsa magni ea at fugiat ullam quas.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem, delectus cumque excepturi unde nisi natus tempore consequuntur! Pariatur modi magnam quas. Provident repudiandae nam quibusdam vel iste sit dolores magnam aperiam? Quam ipsa magni ea at fugiat ullam quas.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas voluptatum impedit beatae unde
              </span>
              <h2>
                <b>$550</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
};

export default Hotel;