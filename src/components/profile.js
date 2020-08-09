import React from 'react';
import './profile.css';
import {Component} from 'react';

class Profile extends Component{

    render(){
            return(
                    <section class="text-gray-900 body-font bg-pink-100">
                        <header class="text-gray-700 body-font ">
                            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                            <div class="lg:w-1/4 w-full mb-10  px-20 py-15 lg:mb-0 rounded-lg overflow-hidden">
                                <a class="inline-flex items-center">
                                    <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                                    <span class="flex-grow flex flex-col pl-4">
                                        <span class="title-font font-medium text-gray-900">Nadeeka Priyadarshani</span>
                                    </span>
                                </a>
                            </div>
                                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                                </nav>
                                <button class="inline-flex items-center bg-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">LogOut
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </header>
                        <div>
                            <div class="baner_view">
                                <div class="p-4 md:w-1/5">
                                        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
                                        <div class="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Assignments</h1>
                                            <div class="flex items-center flex-wrap ">
                                            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/5">
                                        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
                                        <div class="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Tutes</h1>
                                            <div class="flex items-center flex-wrap ">
                                            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/5">
                                        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
                                        <div class="p-6">
                                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                                            <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Results</h1>
                                            <div class="flex items-center flex-wrap ">
                                            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>                                        
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="notice-bord">
                        
                            <div class="p-4 md:w w-full">
                                <div class="h-full bg-gray-200 p-6 rounded">
                                <h1 class="text-3xl font-medium title-font text-red-700 mb-6 text-center">Notice</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <a class="inline-flex items-center">
                                    <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                                    <span class="flex-grow flex flex-col pl-4">
                                    <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                                    <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                                    </span>
                                </a>
                                </div>
                            </div>
                        </div>
                    </section>
            
            );
 }
}
 export default Profile;