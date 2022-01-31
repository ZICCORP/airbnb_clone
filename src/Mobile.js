import { useState, useEffect, useRef } from 'react';
import Navigation from "./Navigation";
import GiftCard from "./GiftCard";
import Discover from "./Discover";
import Cards from './Cards';

const Mobile = () => {

    const refContainer = useRef(1);
    const refSlider = useRef(1)

    const [currentPosition, setCurrentPosition] = useState(0)
    const [currentMargin, setCurrentMargin] = useState(0)
    const [slidesPerPage, setSlidesPerPage] = useState(2.37)
    const [containerWidth, setContainerWidth] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)
    const [prevKeyActive, setPrevKeyActive] = useState(false)
    const [nextKeyActive, setNextKeyActive] = useState(true)
    const [slides, setSlides] = useState(0)
    const [buttons, setButtons] = useState(0)
    const [slidesCount, setSlidesCount] = useState(0)
    const [slider, setSlider] = useState(0)



    const slideLeft = () => {
        if (currentPosition != 0) {
            slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
            setCurrentMargin(currentMargin + (100 / slidesPerPage))
            setCurrentPosition(currentPosition - 1)

        }
    }

    const slideRight = () => {

        if (currentPosition != slides) {
            slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
            setCurrentMargin(currentMargin - (100 / slidesPerPage))
            setCurrentPosition(currentPosition + 1)

        }


    }



    useEffect(() => {
        setSlides(document.getElementsByClassName('slide').length)
        setButtons(document.getElementsByClassName('btn'))
        setSlidesCount(slides - slidesPerPage)
        setContainerWidth(refContainer.current.offsetWidth)
        setSliderWidth(refSlider.current.offsetWidth)
        setSlider(document.getElementById('slider'))


    }, [])


    return <>

        <main>
            <div className=''>
                <Navigation />
                <GiftCard />
                <Cards />
                <Discover />

                <div className="bg-white -mt-2">

                    <div className="">
                        <h2 className="px-6 text-xl font-bold pb-6">Inspiration for future getaways</h2>

                        <div id="container" ref={refContainer} className="m-0 p-0 grid items-center max-w-sm relative overflow-hidden p-4">
                            <div id="slider-container" ref={refSlider} className="overflow-hidden">
                                <span onClick={() => slideLeft()} className="btn absolute top-5 left-2"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="8.593px" height="12.88px" viewBox="0 0 80.593 122.88" enableBackground="new 0 0 80.593 122.88" ><g><polygon points="80.593,0 49.771,0 0,61.44 49.771,122.88 80.593,122.88 30.82,61.44 80.593,0" /></g></svg></span>

                                <div className="overflow-hidden mr-5 ml-5">
                                    <div id="slider" className="flex w-max ml-2 mr-10 overflow-hidden pointer-events-none select-none">
                                        <div className='slide'>
                                            <a href="#" className="h-5/6 grid ">Destination for art &amp; culture</a>
                                            <div className="w-full h-1 bg-gray-500 mb-2"></div>
                                        </div>
                                        <div className="slide pl-4" ><a href="#" className="">Destination for outdoor adventure </a></div>
                                        <div className='slide px-5'><a> Mountain Cabins</a></div>
                                        <div className='slide pr-5'><a> Beach Destination</a></div>
                                        <div className='slide pr-5'><a> Popular Destinations</a></div>
                                        <div className='slide'><a>  Unique Destination</a></div>

                                    </div>

                                </div>
                                <span onClick={() => slideRight()} className="btn absolute top-5 right-2"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="8.593px" height="12.88px" viewBox="0 0 80.593 122.88" enableBackground="new 0 0 80.593 122.88" ><g><polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" /></g></svg></span>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="bg-white">
                    <div className="grid grid-cols-2 gap-3 pl-12">

                        <div className='pb-6'>
                            <a href="#">
                                <div>Phoenix</div>
                                <div className="">Arizona</div>
                            </a>
                        </div>

                        <div className='pb-6'>
                            <a href="#">
                                <div>San Francisco</div>
                                <div className="">California</div>
                            </a>
                        </div>

                        <div className='pb-6'>
                            <a href="#" >
                                <div>Keswick</div>
                                <div className="">England</div>
                            </a>
                        </div>


                        <div>
                            <a href="#">
                                <div>Hot Spring</div>
                                <div className="">Arkansas</div>
                            </a>
                        </div>

                        <div className='pb-6'>
                            <a href="#">
                                <div>Barcelona</div>
                                <div className="">catalonia</div>
                            </a>
                        </div>

                        <div >
                            <a className="" href="#">
                                <div>London</div>
                                <div className="">England</div>
                            </a>
                        </div>



                        <div className='pb-6'>
                            <a href="#">
                                <div>Los Angeles</div>
                                <div className="">California</div>
                            </a>
                        </div>

                        <div className="">
                            <a href="#">
                                <div>Prague</div>
                                <div className="">Czechia</div>
                            </a>
                        </div>

                        <div className='pb-6'>
                            <a href="#">
                                <div>Scarborough</div>
                                <div className="">England</div>
                            </a>
                        </div>


                        <div>
                            <a href="#">
                                <div>San Diego</div>
                                <div className="">California</div>
                            </a>
                        </div>

                        <div className="pb-12">
                            <a href="#">
                                <div>Washington</div>
                                <div className="">District of Columbia</div>
                            </a>
                        </div>


                        <div className="">
                            <button className="underline font-semibold">Show more</button>
                        </div>

                    </div>
                </div>

                <div className='bg-white pt-16 pl-12 bg-gray-50 -mt-4 pb-24'>
                    <div className='pb-8 grid grid-cols-1 gap-4'>
                        <h1 className='font-bold'>Support</h1>
                        <p>Help Center</p>
                        <p>Saferty Information</p>
                        <p>Cancelation options</p>
                        <p>Our covid-19 response</p>
                        <p>Supporting people disabilities</p>
                        <p>Report a neighborhood concern</p>
                    </div>
                    <div className='grid grid-cols-1 gap-4 pb-8'>
                        <h1 className='font-bold'>Community</h1>
                        <p>Airbnb.org disaster relief housing</p>
                        <p>Support afghan refugees</p>
                        <p>Celebrating diversity &amp; belonging</p>
                        <p>Combating discrimination</p>
                    </div>
                    <div className='pb-8 grid grid-cols-1 gap-4'>
                        <h1 className='font-bold'>Hosting</h1>
                        <p>Try hosting</p>
                        <p>AirCover protection for Hosts</p>
                        <p>Explore hosting resources</p>
                        <p>visit our Community forum</p>
                        <p>How to host responsibly</p>
                    </div>
                    <div className='grid grid-cols-1 gap-4 pb-8'>
                        <h1 className='font-bold'>About</h1>
                        <p>Newsroom</p>
                        <p>Learn about new features</p>
                        <p>Letter from our founders</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Airbnb Luxe</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pb-4">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <p className="px-12 underline pl-8 -mt-6">English(US)</p>
                        </div>
                        <div>
                            <p>$</p>
                            <p className="pr-12 pl-4 underline -mt-6">USD</p>

                        </div>
                    </div>
                    <div>
                        <span>2022 Airbnb Inc</span>
                        <div className=''>
                            <span className='mr-4'>Privacy</span>
                            <span className='mr-4'>Terms</span>
                            <span>Sitemap</span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </>
}


export default Mobile;