import { React, useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "./Card";
import axios from "axios";

const Freepics = () => {
  const [book, setBook] = useState([]);
  const dbUrl = import.meta.env.VITE_DATABASE_URL;
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${dbUrl}/book`);
        const filteredData = res.data.filter(
          (item) => item.category === "Free"
        );

        setBook(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  const mappedData = book.map((item) => (
    <div className="px-4">
      <Card item={item} key={item.id} />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
          non suscipit, iure neque earum?
        </p>
      </div>

      <div className="  pt-9 ">
        <AliceCarousel
          mouseTracking
          items={mappedData}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite={false}
          disableDotsControls={true}
          disableButtonsControls={false}
          stagePadding={{ left: 20, right: 20 }}
          animationDuration={500}
        />
      </div>
    </div>
  );
};

export default Freepics;
