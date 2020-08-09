import React from 'react';
import './profile.css';
import {Component} from 'react';

class Profile extends Component{

    render(){
            return(
                    <section class="text-gray-900 body-font bg-pink-100">
                        <header class="text-gray-700 body-font bg-indigo-500">
                            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                            <div class="lg:w-1/4 w-full mb-10  px-20 py-15 lg:mb-0 rounded-lg overflow-hidden">
                                <a class="inline-flex items-center">
                                    <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                                    <span class="flex-grow flex flex-col pl-4">
                                        <span class="title-font font-medium text-gray-900">Nadeeka Priyadarshani</span>
                                        <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                                <span class="ml-3 text-10xl">Dr.Saman Wejethunga</span>
                                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                                    <a class="mr-5 hover:text-gray-900">First Link</a>
                                    <a class="mr-5 hover:text-gray-900">Second Link</a>
                                    <a class="mr-5 hover:text-gray-900">Third Link</a>
                                    <a class="mr-5 hover:text-gray-900">Fourth Link</a>
                                </nav>
                                <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">LogOut
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </header>
                        <div class="baner_view">
                                    <div className="banner_animation"> 

                                    </div>                                    
                        </div>
                        <section class="text-gray-500 bg-gray-900 body-font">
                            <div class="container px-5 py-24 mx-auto">
                                <div class="flex flex-col">
                                </div>
                                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div class="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
                                    </div>
                                    <h2 class="text-xl font-medium title-font text-white mt-5">Shooting Stars</h2>
                                   
                                    <a class="text-teal-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                    </a>
                                </div>
                                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div class="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504"/>
                                    </div>
                                    <h2 class="text-xl font-medium title-font text-white mt-5">The Catalyzer</h2>
                                   
                                    <a class="text-teal-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                    </a>
                                </div>
                                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                                    <div class="rounded-lg h-64 overflow-hidden">
                                    <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505"/>
                                    </div>
                                    <h2 class="text-xl font-medium title-font text-white mt-5">The 400 Blows</h2>
                                   
                                    <a class="text-teal-500 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </section>
                    </section>
            
            );
 }
}
 export default Profile;