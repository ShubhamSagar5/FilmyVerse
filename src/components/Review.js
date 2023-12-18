import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/FireBase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";

const Review = ({ id, prevRating, userRated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formComment, setFormComment] = useState("");
  const [data, setData] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(false);

  const sendReview = async () => {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        moviesId: id,
        comment: formComment,
        name: "Shubham",
        timestamp: new Date().getTime(),
        rating: rating,
      });

      const ref = doc(db, "movies", id);
      await updateDoc(ref, {
        rating: prevRating + rating,
        rated: userRated + 1,
      });

      swal({
        title: "Review Send",
        icon: "success",
        buttons: "Done",
        timer: 3000,
      });
      setRating();
      setFormComment("");
    } catch (err) {
      console.log(err.message);
      swal({
        title: err.message,
        icon: "fail",
        buttons: "Back",
        timer: 3000,
      });
    }
    setLoading(false);
  };

  const getReviewData = async () => {
    setReviewLoading(true);

    const quer = query(reviewsRef, where("moviesId", "==", id));
    const querySnapshot = await getDocs(quer);

    querySnapshot.forEach((doc) => {
      setData((prev) => [...prev, doc.data()]);
    });

    setReviewLoading(false);
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <div className="mt-4 py-2 border-t-2 border-gray-700 w-full ">
      <ReactStars
        size={35}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />

      <div className="">
        <input
          type="text"
          value={formComment}
          onChange={(e) => setFormComment(e.target.value)}
          placeholder="Share your Thoughts..."
          className="w-full p-2 outline-none header rounded-lg"
        />
        <button
          className="bg-green-600 p-2 outline-none mt-2 rounded-lg w-full flex justify-center "
          onClick={sendReview}
        >
          {loading ?  <TailSpin height={25} color="white" /> : "Review"}
        </button>
      </div>
      {reviewLoading ? (
        <div className="mt-8 flex ">
         <div className=" m-auto"><ThreeDots height={15} color="white" /></div> 
        </div>
      ) : (
        <div className="mt-4 ">
          {data.map((e, i) => {
            return (
              <div key={i} className=" p-2 mt-2 border-b border-gray-600 header rounded-lg">
                <div className="flex items-center">
                  <p className=" text-blue-500">{e.name}</p>
                  <p className="ml-3 text-xs">({new Date(e.timestamp).toLocaleString()})</p>
                </div>
                <ReactStars
        size={15}
        half={true}
        value={e.rating}
        edit={false}
      />
                <p>{e.comment}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Review;
