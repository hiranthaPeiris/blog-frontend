import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./sub-components/header";

function Home() {
  const [blogList, setBlogList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    const array2 = [];
    array2.push("1.notice that the function passed to useEffect is going to");
    array2.push("2.notice that the function passed to useEffect is going to");

    setNoticeList(array2);

    const array = [];

    const obj1 = {};
    obj1.title = "Programming Langualge";
    obj1.content =
      "Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render";

    const obj2 = {};
    obj2.title = "Internet Services";
    obj2.content =
      "Experienced JavaScript2 developers2 might2 notice2 that the function passed to useEffect is going  Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render to be different on every render";

    const obj3 = {};
    obj3.title = "Network Services";
    obj3.content =
      "Experienced JavaScript2 developers2 might2 notice2 that the function passed to useEffect is going  Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render to be different on every render";

    const obj4 = {};
    obj4.title = "java";
    obj4.content =
      "Experienced JavaScript2 developers2 might2 notice2 that the function passed to useEffect is going  Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render to be different on every render";

    const obj5 = {};
    obj5.title = "Web Desing";
    obj5.content =
      "Experienced JavaScript2 developers2 might2 notice2 that the function passed to useEffect is going  Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render to be different on every render";

    const obj6 = {};
    obj6.title = "Compurt science";
    obj6.content =
      "Experienced JavaScript2 developers2 might2 notice2 that the function passed to useEffect is going  Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render v Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render Experienced JavaScript developers might notice that the function passed to useEffect is going to be different on every render to be different on every render";

    array.push(obj1);
    array.push(obj2);
    array.push(obj3);
    array.push(obj4);
    array.push(obj5);
    array.push(obj6);

    setBlogList(array);
  }, []);

  return (
    <section className="text-gray-900 body-font ">
      {/* Header section render*/}
      <Header />

      <div className="container min-h-screen px-5 py-10 mx-auto ">
        <div className="flex flex-row mb-10 lg:items-start items-center bg-gray-500  px-5 py-10 ">
          <div className="flex-grow">
            <h2 className="text-red-900 text-2xl title-font  font-black mb-3  ">
              Notices{" "}
            </h2>
            {noticeList.map((item) => {
              return <p className="leading-relaxed text-base ">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-row mb-10 lg:items-start items-center">
          <div className="flex-grow">
            {blogList.map((item) => {
              return (
                <>
                  <br></br>
                  <br></br>
                  <p className="leading-relaxed text-base font-black ">
                    {item.title}
                  </p>
                  <Link
                    to={{
                      pathname: "./blog",
                      state: {
                        item: item,
                      },
                    }}
                  >
                    <p className="mt-3 text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </p>
                  </Link>
                  <hr></hr>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <footer />
    </section>
  );
}

export default Home;
