import React from "react";
import { Link } from "react-router-dom";

export default function profile() {
  return (
    <section class="text-gray-900 body-font bg-pink-100">
      <header class="text-gray-700 body-font bg-indigo-500">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span class="ml-3 text-10xl">Dr.Saman Wejethunga</span>

          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900" href>First Link</a>
            <a class="mr-5 hover:text-gray-900" href>Second Link</a>
            <a class="mr-5 hover:text-gray-900" href>Third Link</a>
            <a class="mr-5 hover:text-gray-900" href>Fourth Link</a>
          </nav>
          <Link to="./login">
            <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
              LogOut
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
      <div class="container px-10 py-10   flex flex-wrap">
        <div class="lg:w-1/4 w-full mb-10  px-20 py-15 lg:mb-0 rounded-lg overflow-hidden">
          <a class="inline-flex items-center" href>
            <img
              alt="blog"
              src="https://dummyimage.com/104x104"
              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">
                Nadeeka Priyadarshani
              </span>
              <span class="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-3/4 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                TUTORIAL
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix
                vinyl post-ironic four dollar toast vegan taxidermy. Gastropub
                indxgo juice poutine.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center" href>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                ASSINGMENT
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center" href>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                QUIZE
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center" href>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                NOTICES
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center" href>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

