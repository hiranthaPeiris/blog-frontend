import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [blogList, setBlogList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    const array2 = [];
    array2.push('1.notice that the function passed to useEffect is going to');
    array2.push('2.notice that the function passed to useEffect is going to');

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
      <header className="text-gray-700 body-font bg-blue-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-4xl font-black font-serif">BLOGS</span>
          </p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="./login">
              <p className="mr-5  hover:text-gray-900 font-black">SIGN IN</p>
            </Link>
            <Link to="./register">
              <p className="mr-5 hover:text-gray-900 font-black ">SIGN UP</p>
            </Link>
          </nav>
        </div>
      </header>
      <div className="container min-h-screen px-5 py-10 mx-auto ">
        <div className="flex flex-row mb-10 lg:items-start items-center bg-gray-500  px-5 py-10 ">
          <div className="flex-grow">
            <h2 className="text-red-900 text-2xl title-font  font-black mb-3  ">
              Notices{" "}
            </h2>
            {noticeList.map((item) => {
              return (
                <p className="leading-relaxed text-base ">{item}</p>
              );
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
      <footer className="text-gray-700 body-font bg-blue-700">
        <div className="bg-gray-200">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">Contact Us</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              saman@gmai
            </p>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              +94728345673
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Home;
