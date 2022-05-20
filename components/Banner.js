import React from 'react'

export default () => {
  return (
    <div className="my-10 flex h-full w-screen items-center justify-center sm:my-20 ">
      <div className="mx-4 w-full space-y-6 rounded-lg text-white md:mx-20 ">
        <div className="col-span-2 grid grid-cols-2 gap-4 md:grid-cols-6">
          <div className="col-span-3 max-h-full overflow-hidden rounded-xl">
            <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl rounded ">
              <div className="pt-30 absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/80 to-transparent px-6 text-white opacity-0 opacity-100 transition duration-300 ease-in-out">
                <div>
                  <div className="mb-10 translate-y-4 transform transform-gpu space-y-3 p-0  text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-5 ">
                    <div className="text-sm font-bold sm:text-base">
                      ต้องการดูสินค้าเพิ่ม และดูทองจริง
                    </div>

                    <div className="text-sm opacity-60 sm:text-base ">
                      มาที่ร้านของเรา ชั้น G อาคารยูไนเต็ด เซ็นเตอร์
                    </div>
                    <button className="flex items-center rounded bg-[#002458] px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-black focus:bg-[#002458] focus:outline-none sm:text-base ">
                      <span>Visit our shop</span>
                      <svg
                        className="mx-2 h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <img
                alt=""
                className="aspect-square h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
                src="/assets/images/shop_ausiris.jpeg"
              />
            </div>
          </div>

          <div className=" col-span-3 max-h-full overflow-hidden rounded-xl">
            <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl rounded bg-red-400 ">
              <div className="pt-30 absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/80 to-transparent px-6 text-white opacity-0 opacity-100 transition duration-300 ease-in-out">
                <div>
                  <div className="mb-10 translate-y-4 transform transform-gpu space-y-3 p-0 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                    <div className="text-sm font-bold sm:text-base ">
                      สนใจลงทุนและออมทอง?
                    </div>

                    <div className="text-sm opacity-60 sm:text-base ">
                      Dowload App Ausiris Gold
                    </div>
                    <button className="flex items-center rounded  bg-[#002458] px-3 py-2 text-sm font-medium text-white  hover:bg-white hover:text-black focus:bg-white focus:outline-none sm:text-base">
                      <span>Start Investhing</span>
                      <svg
                        className="mx-2 h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <img
                alt=""
                className="aspect-square h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
                src="/assets/images/iphone.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
