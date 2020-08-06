import React from 'react';
import {Link} from 'react-router-dom';

export default function register(){
    return(
        <section class="text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto bg-gray-300 flex items-center mt-10">
            <div class="lg:w-2/5 md:w-1/2  p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <img src="clzroom.jpg" alt="Smart Class Room"/>
            </div>
             <div class="lg:w-3/5 md:w-1/2 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">REGISTER WITH YOUR WORK EMAIL ADDRESS</h2>
              <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="text"/>
              <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Username" type="text"/>
              <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Registation Number" type="String"/>
              <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Password" type="string"/>
              <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Confirm password" type="string"/>
              <Link to='./profile'><button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SING UP</button></Link>
             
              
            </div>
            </div>
        
        </section>
    );
}