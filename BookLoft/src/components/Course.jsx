import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Card from './Card';
import axios from 'axios';

const course = () => {
    const dbUrl = import.meta.env.VITE_DATABASE_URL;
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get(`${dbUrl}/book`);
                console.log(res.data);
                setBook(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getBook();
       
    },[])

  return (
      <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="pt-28 items-center justify-center text-center  ">
                    <h1 className="text-2xl  md:text-4xl">
                        We're delighted to have you{" "}
                        <span className="text-pink-500"> Here! :)</span>
                    </h1>
                    <p className="mt-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                        assumenda? Repellendus, iste corrupti? Tempore laudantium
                        repellendus accusamus accusantium sed architecto odio, nisi expedita
                        quas quidem nesciunt debitis dolore non aspernatur praesentium
                        assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
                        animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
                        consequatur!
                    </p>
                    <Link to="/"  className=" inline-block mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                        Back
                    </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-y-6">
                {book.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>

      
    </>
  )
}

export default course
