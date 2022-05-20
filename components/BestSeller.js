function BestSeller() {
  return (
    <>
      <section className="container mx-auto p-10 px-0 md:p-10 md:py-20 md:px-0">
        <div className="mx-4 mb-6 flex items-center justify-center text-center md:mb-24">
          <p className="text-2xl font-medium  md:text-4xl">สินค้าขายดี</p>
        </div>

        <section className="mx-4 grid grid-cols-2 items-start gap-x-4 gap-y-6 sm:grid-cols-4 md:mx-auto md:grid-cols-4 md:gap-y-14">
          <article className="group my-4 transform cursor-pointer text-center duration-500 duration-300 hover:-translate-y-2 hover:-translate-y-1 ">
            <div className="w-auto cursor-auto">
              <div className="relative mx-auto mb-3 flex w-full items-center justify-center ">
                <img
                  className="absolute h-44 sm:h-64"
                  src="/assets/images/Gold_0.25 baht_back.png"
                  alt="Cookie Icon SVG"
                />
                <img
                  className="relative h-44 transform duration-500 group-hover:opacity-0 sm:h-64"
                  src="/assets/images/Gold_0.25 baht_front.png"
                  alt=""
                />
              </div>
              <span className="mb-3 block flex w-full items-center justify-center text-sm font-bold leading-normal text-gray-800 sm:text-base">
                ทอง 0.125 บาท
              </span>

              <span className="sm:text-md text-md mb-3 block flex w-full items-center justify-center leading-normal text-gray-800">
                3500 บาท
              </span>
            </div>
          </article>

          <section className="group my-4 transform cursor-pointer text-center  duration-500 duration-300 hover:-translate-y-2 hover:-translate-y-1 md:my-auto">
            <div className="w-auto cursor-auto">
              <div className="relative mx-auto mb-3 flex w-full items-center justify-center">
                <img
                  className="absolute h-44 sm:h-64"
                  src="/assets/images/Gold_0.25 baht_back.png"
                  alt="Cookie Icon SVG"
                />
                <img
                  className="relative h-44 transform duration-500 group-hover:opacity-0 sm:h-64"
                  src="/assets/images/Gold_0.25 baht_front.png"
                  alt=""
                />
              </div>
              <span className="mb-3 block flex w-full items-center justify-center text-sm font-bold leading-normal text-gray-800 sm:text-base">
                ทอง 0.125 บาท
              </span>

              <span className="mb-3 block flex  w-full items-center justify-center text-sm leading-normal text-gray-800 sm:text-base">
                3500 บาท
              </span>
            </div>
          </section>

          <section className="group my-4 transform cursor-pointer text-center duration-500 duration-300 hover:-translate-y-2 hover:-translate-y-1 md:my-auto">
            <div className="w-auto cursor-auto">
              <div className="relative mx-auto mb-3 flex w-full items-center justify-center">
                <img
                  className="absolute h-44 sm:h-64"
                  src="/assets/images/Gold_0.25 baht_back.png"
                  alt="Cookie Icon SVG"
                />
                <img
                  className="relative h-44 transform duration-500 group-hover:opacity-0 sm:h-64"
                  src="/assets/images/Gold_0.25 baht_front.png"
                  alt=""
                />
              </div>
              <span className="mb-3 block flex w-full items-center justify-center text-sm font-bold leading-normal text-gray-800 sm:text-base">
                ทอง 0.125 บาท
              </span>

              <span className="mb-3 block  flex w-full items-center justify-center text-sm leading-normal text-gray-800 sm:text-base">
                3500 บาท
              </span>
            </div>
          </section>

          <section className="group my-4 transform cursor-pointer text-center duration-500 duration-300 hover:-translate-y-2 hover:-translate-y-1 ">
            <div className="w-auto cursor-auto">
              <div className="relative mx-auto mb-3 flex w-full items-center justify-center">
                <img
                  className="absolute h-44 sm:h-64"
                  src="/assets/images/Gold_0.25 baht_back.png"
                  alt="Cookie Icon SVG"
                />
                <img
                  className="relative h-44 transform duration-500 group-hover:opacity-0 sm:h-64"
                  src="/assets/images/Gold_0.25 baht_front.png"
                  alt=""
                />
              </div>
              <span className="mb-3 block flex w-full items-center justify-center text-sm font-bold leading-normal text-gray-800 sm:text-base">
                ทอง 0.125 บาท
              </span>

              <span className="mb-3 block  flex w-full items-center justify-center text-sm leading-normal text-gray-800 sm:text-base">
                3500 บาท
              </span>
            </div>
          </section>
        </section>

        <div className="mt-4 flex items-center justify-center md:mt-16">
          <a className="cursor-pointer text-sm text-blue-500 underline">
            View All Best Sellers
          </a>
        </div>
      </section>
    </>
  )
}

export default BestSeller
