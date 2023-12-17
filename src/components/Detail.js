import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { db, moviesRef } from "../firebase/FireBase";
import { ThreeCircles } from "react-loader-spinner";
import Review from "./Review";

const Detail = () => {
  const { id } = useParams();
  // window.alert(id)

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    title: "",
    year: "",
    description: "",
    imageUrl: "",
  });

  const getData = async () => {
    setLoading(true)
    const _doc = doc(db, "movies", id);

    const data = await getDoc(_doc);

    setData(data.data());

    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row  items-center md:items-start justify-center w-full">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center">
          {" "}
          <ThreeCircles height={50} color="white" />{" "}
        </div>
      ) : (
        <>
          <img
            className="h-96 block md:sticky top-24"
            src={data.imageUrl}
            alt=""
          />

          <div className="md:ml-6 ml-0 w-full md:w-1/2 mt-5 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-400 ">
              {data.title} <span className="text-2xl">({data.year})</span>
            </h1>

            <ReactStars size={20} half={true} value={5} edit={false} />
            <p className="mt-2">{data.description}</p>
            <Review id={id}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
