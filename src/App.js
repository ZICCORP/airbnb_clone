

function App() {
  return <>

    <div className="bg-black text-white font-mono">
      <header className="text-sm">
        <div className="flex justify-between pt-8 pb-4">
          <div><a className="flex justify-start ml-24" href="/">
            <svg width="30" height="32" fill="currentcolor" style={{ display: "block" }}><path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"></path></svg>

            <h1 className="text-2xl pl-2">airbnb</h1>
          </a>

          </div>
          <div className="flex justify-center mx-8">

            <div>
              <a href="#">Places to stay</a>
              <div className="border-b-2 w-4 ml-12 pb-2"></div>
            </div>


            <div>
              <a href="#" className="px-8">Experiences</a>
            </div>

            <div>
              <a href="#">online Experience</a>
            </div>

          </div>
          <div className="flex justify-center">
            <nav>
              <a href="#">Become a Host</a>
            </nav>
            <div className="mx-8">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "16px", width: "16px", fill: "currentcolor" }}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
            </div>
            <div className="bg-white rounded-full w-18 -mt-4 mr-8">

              <div className="mx-8 -mt-2 mr-2 flex justify-between pt-4 pb-2 ml-2">
                <svg viewBox="0 0 100 80" width="15" height="15" className="mr-2 mt-2">
                  <rect width="100" height="20"></rect>
                  <rect y="30" width="100" height="20"></rect>
                  <rect y="60" width="100" height="20"></rect>
                </svg>

                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "35px", width: "35px", fill: "" }}><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
                <div className="has-notification"></div>
              </div>
            </div>
          </div>

        </div>

        <div className="ml-44 mb-8 bg-white mr-56 rounded-full h-16">
          <form action="#" method="">
            <div className="flex justify-between">

              <div className="pl-8">
                <label>
                  <div>
                    <div className="text-black pt-4">Location</div>
                    <input placeholder="Where are you going ?" />
                  </div>
                </label>
              </div>


              <div className="pt-4">
                <div className="text-black">Check in</div>
                <div className="text-gray-400">Add dates</div>
              </div>

              <div className="pt-4">
                <div className="text-black">Check out</div>
                <div className="text-gray-400">Add dates</div>
              </div>



              <div className="pt-4">
                <div className="text-black">Guests</div>
                <div className="text-gray-400">Add guests</div>
              </div>
              <div className="pt-2 ml-8 mr-4">
                <button className="bg-pink-800  rounded-full p-2">
                  <div className="p-2">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", fill: "none", height: "20px", width: "20px", stroke: "currentcolor", strokeWidth: "4", overflow: "visible" }}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                  </div>
                  <div></div>
                </button>
              </div>


            </div>
          </form>
        </div>
      </header>
      <main>

        <div className="mb-32">
          <div className="pl-24 pr-24 relative">
            <img className="rounded-lg" src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=1200" alt="Background image" />
          </div>
          <div className=" absolute w-full py-4 bottom-0 text-center">
            <h1 className="text-4xl pb-8">Not sure where to go?&nbsp;Perfect.</h1>
            <a className="pt-6 block" href="#">
              <span className="bg-white w-24 text-purple-500 p-4 rounded-full">I'm flexible</span>
            </a>
          </div>
        </div>

        <div>
          <div className="pl-24 pr-24 -mb-56  relative">
            <img className="rounded-lg" src="https://a0.muscache.com/im/pictures/931d5140-30cd-4f96-a73a-cb31c76029a4.jpg?im_q=highq&amp;im_w=1920" alt="gift card" />
          </div>
          <div className="absolute w-full -bottom-72 pl-64 -mb-64 text-black">
            <div>
              <span className="pl-16 text-2xl">Introducing</span>
            </div>
            <h2 className="text-7xl pb-12">
              <span className="pl-8 block">Airbnb</span>
              <span className=""> gift</span>
              <span className="-ml-6"> cards</span>
            </h2>
            <div className="pl-24">
              <a>
                <span className="bg-black text-white rounded-lg py-4 px-6">Shop now</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white">

          <div className="pt-72 pl-24 pr-24">

            <div>

              <div className="py-12">
                <h2 className="text-4xl text-gray-800 font-bold">Discover Airbnb Experiences</h2>
              </div>

              <div className="grid grid-cols-2 gap-10 pb-72">
                <div>
                  <div className="relative  -mb-36">
                    <img className="rounded-lg" src="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=960" alt="experience" />
                  </div>
                  <div className="text-white absolute w-full -mt-96 left-36 text-4xl font-bold">
                    <div className="mb-8">
                      <h3 >Things to do </h3>
                      <h3>on your trip</h3>
                    </div>
                    <span className="bg-white rounded-lg px-6 pb-2">
                      <a href="#" className="text-lg text-gray-800">
                        Experiences
                      </a>
                    </span>
                  </div>
                </div>

                <div>
                  <div className="relative -mb-36">
                    <img className="rounded-lg" src="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=960" alt="experience" />
                  </div>
                  <div className="text-white absolute -mt-96 pl-12 text-4xl font-bold">
                    <div className="mb-8">
                      <h3 className="">Things to do</h3>
                      <h3> from home</h3>
                    </div>
                    <span className="bg-white rounded-lg px-6 pb-2">
                      <a className="text-lg text-gray-800" href="#">
                        Online Experiences
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>



        <div className="bg-white">

          <div className="bg-white text-gray-800 font-semibold border-b-2 ml-12 mr-12 text-sm">
            <h2 className="text-2xl font-bold pb-3">Inspiration for future getaways</h2>

            <div className="flex justify-between">
              <div>
                <a href="#" className="">Destination for art &amp; culture</a>
                <div className="border-b-2 w-58 -ml-18 pb-5 border-black"></div>
              </div>
              <button className='text-gray-800 pb-5'>
                <span>Destination for outdoor</span>
                <span> adventure</span>
              </button>
              <button className='text-gray-800 pb-5'>
                Mountain Cabins
              </button>
              <button className="text-gray-800 pb-5">
                Beach Destination
              </button>
              <button className="text-gray-800 pb-5">
                Popular Destinations
              </button>
              <button className="pr-24 text-gray-800 pb-5">
                Unique Destination
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white pt-8">
          <div className="bg-white text-black ml-12 mr-12 flex justify-between">
            <div className="pb-2">
              <div>
                <a href="#">
                  <div>Phoenix</div>
                  <div className="text-gray-600">Arizona</div>
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <div>San Francisco</div>
                  <div className="text-gray-600">California</div>
                </a>
              </div>

              <div>
                <a href="#" className="-ml-12">
                  <div>Keswick</div>
                  <div className="text-gray-600">England</div>
                </a>
              </div>
            </div>
            <div className="pb-2">
              <div>
                <a href="#">
                  <div>Hot Spring</div>
                  <div className="text-gray-600">Arkansas</div>
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <div>Barcelona</div>
                  <div className="text-gray-600">catalonia</div>
                </a>
              </div>

              <div >
                <a className="ml-12" href="#">
                  <div>London</div>
                  <div className="text-gray-600">England</div>
                </a>
              </div>

            </div>
            <div className="pb-2">
              <div>
                <a href="#">
                  <div>Los Angeles</div>
                  <div className="text-gray-600">California</div>
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <div>Prague</div>
                  <div className="text-gray-600">Czechia</div>
                </a>
              </div>

              <div className="pt-6">
                <a href="#">
                  <div>Scarborough</div>
                  <div className="text-gray-600">England</div>
                </a>
              </div>
            </div>
            <div className="pb-2">
              <div>
                <a href="#">
                  <div>San Diego</div>
                  <div className="text-gray-600">California</div>
                </a>
              </div>

              <div className="pt-4">
                <a href="#">
                  <div>Washington</div>
                  <div className="text-gray-600">District of Columbia</div>
                </a>
              </div>


              <div className="pt-6">
                <button className="underline">Show more</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 text-gray-800">
          <div className="ml-12 mr-12">
            <footer className="pt-24">
              <div className="flex justify-between">
                <section>
                  <h3 className="font-bold">Support</h3>
                  <ul>
                    <li className="pb-4 pt-4">
                      <a>Help Center</a>
                    </li>
                    <li className="pb-4">
                      <a>Safety Information</a>
                    </li>
                    <li className="pb-4">
                      <a>Cancellation options</a>
                    </li>
                    <li className="pb-4">
                      <a>Our COVID-19 Response</a>
                    </li>
                    <li className="pb-4">
                      <a>Supporting people with disabilities</a>
                    </li>
                    <li className="pb-12">
                      <a>Report a neigbourhood concern</a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold">Community</h3>
                  <ul>
                    <li className="pb-4 pt-4">
                      <a>Airbnb.org: disaster relief housing</a>
                    </li>
                    <li className="pb-4">
                      <a>Support Afghan refugees</a>
                    </li>
                    <li className="pb-4">
                      <a>Celebrating diversity &amp; belonging </a>
                    </li>
                    <li className="pb-4">
                      <a>Combating discrimination</a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold">Hosting</h3>
                  <ul>
                    <li className="pb-4 pt-4">
                      <a>Try hosting</a>
                    </li>
                    <li className="pb-4">
                      <a>Aircover: protection for Hosts</a>
                    </li>
                    <li className="pb-4">
                      <a>Visit our community forum</a>
                    </li>
                    <li className="pb-4">
                      <a>How to host responsibly</a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold">About</h3>
                  <ul>
                    <li className="pb-4 pt-4">
                      <a>Newsroom</a>
                    </li>
                    <li className="pb-4">
                      <a>Learn about new features</a>
                    </li>
                    <li className="pb-4">
                      <a>Letter from our founders</a>
                    </li>
                    <li className="pb-4">
                      <a>Careers</a>
                    </li>
                    <li className="pb-4">
                      <a>Investors</a>
                    </li>
                    <li className="pb-4">
                      <a>Airbnb Luxe</a>
                    </li>
                  </ul>
                </section>
              </div>

              <div>
                <section className="flex justify-between">

                  <div className="flex justify-between">
                    <div>© 2022 Airbnb, Inc.</div>
                    <div>
                      <span className="px-2">.</span>
                      <a href="#">Privacy</a>
                      <span className="px-2">.</span>
                      <a href="#">Terms</a>
                      <span className="px-2">.</span>
                      <a href="#">Sitemap</a>
                    </div>
                  </div>
                  <div className="flex justify-between">

                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <p className="px-12 underline">English(US)</p>
                      <p>$</p>
                      <p className="pr-12 underline">USD</p>

                    </div>


                    <div className="flex justify-between">

                      <div className="-mt-6">
                        <a href="#" className="px-12">
                          <svg viewBox="0 0 32 32" role="img" aria-hidden="false" aria-label="Navigate to Facebook" focusable="false" style={{ height: "18px", width: "18px", display: "block", fill: "currentcolor" }}><path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78" fill-rule="evenodd"></path></svg>
                        </a>
                      </div>

                      <div className="-mt-6">
                        <a href="#" className="px-12">
                          <svg viewBox="0 0 32 32" role="img" aria-hidden="false" aria-label="Navigate to Twitter" focusable="false" style={{ height: "18px", width: "18px", display: "block", fill: "currentcolor" }}><path d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16" fill-rule="evenodd"></path></svg>
                        </a>
                      </div>

                      <div>
                        <a href="#" className="pr-12">
                          <svg viewBox="0 0 24 24" role="img" aria-hidden="false" aria-label="Navigate to Instagram" focusable="false" style={{ height: "18px", width: "18px", display: "block", fill: "currentcolor" }}><path d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z" fill-rule="evenodd"></path></svg>
                        </a>
                      </div>

                    </div>






                  </div>

                </section>
              </div>
            </footer>
          </div>
        </div>

      </main>

    </div>
  </>
}

export default App;
