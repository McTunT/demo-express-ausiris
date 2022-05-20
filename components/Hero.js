import React from 'react'

export default () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-10 w-full px-4 sm:px-6 xl:px-20 2xl:container 2xl:mx-auto 2xl:px-0">
        <div className="jusitfy-center flex flex-col items-center space-y-10">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-x-8 lg:grid-cols-3">
            <div className="group relative flex h-full w-full items-center justify-center">
              <img
                className="h-full w-full object-cover object-center"
                src="/assets/images/0.6.jpeg"
                alt="girl-image"
              />
              <button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-[#002458] dark:text-white">
                Gold Standard
              </button>

              <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 py-6 px-20 opacity-0 transition duration-500 group-hover:opacity-100"></div>
            </div>

            <div className="mt-4 flex flex-col space-y-4 md:mt-0 md:space-y-8">
              <div className="group relative flex h-full w-full items-center justify-center">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/assets/images/foo.jpeg"
                  alt="shoe-image"
                />
                <button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-[#002458] dark:text-white">
                  Sanxing
                </button>
                <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 py-6 px-20 opacity-0 transition duration-500 group-hover:opacity-100"></div>
              </div>
              <div className="group relative flex h-full w-full items-center justify-center">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/assets/images/may.jpeg"
                  alt="watch-image"
                />
                <button className="absolute bottom-4 z-10 w-auto bg-white p-2 py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-[#002458] dark:text-white">
                  Happy New Year China
                </button>
                <div className="absolute bottom-3 z-0 w-auto bg-white bg-opacity-50  px-[105px] py-6 opacity-0 transition duration-500 group-hover:opacity-100"></div>
              </div>
            </div>

            <div className="group relative hidden h-full w-full items-center justify-center lg:flex">
              <img
                className="h-full w-full object-cover object-center"
                src="/assets/images/mto.jpeg"
                alt="girl-image"
              />
              <button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-[#002458] dark:text-white">
                Made To Order
              </button>
              <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 py-6 px-20 opacity-0 transition duration-500 group-hover:opacity-100"></div>
            </div>
            <div className="group relative mt-4 flex h-full w-full items-center justify-center md:mt-8 md:hidden lg:hidden">
              <img
                className="hidden h-full w-full object-cover object-center md:block"
                src="/assets/images/mto.jpeg"
                alt="girl-image"
              />
              <img
                className="h-full w-full object-cover object-center md:hidden"
                src="/assets/images/mto.jpeg"
                alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
              />
              <button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-[#002458] dark:text-white">
                Made To Order
              </button>
              <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 py-6 px-20 opacity-0 transition duration-500 group-hover:opacity-100"></div>
            </div>
          </div>
          <div className="group relative mt-4 hidden h-full w-full items-center justify-center md:mt-8 md:flex lg:hidden">
            <img
              className="hidden h-full w-full object-cover object-center md:block"
              src="/assets/images/mto.jpeg"
              alt="girl-image"
            />
            <img
              className="h-full w-full object-cover object-center sm:hidden"
              src="/assets/images/mto.jpeg"
              alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
            />
            <button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-[#002458] dark:text-white">
              Made To Order
            </button>
            <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 py-6 px-20 opacity-0 transition duration-500 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
