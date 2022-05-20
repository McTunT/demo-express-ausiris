const BestSeller = () => {
  return (
    <>
      <div className="container mt-20 grid h-auto grid-cols-2 gap-6 sm:mx-32 md:h-96 md:grid-cols-4 md:gap-y-14">
        <article className="group h-72 w-32 transform cursor-pointer duration-300 hover:-translate-y-1 sm:w-44">
          <div className="max-h-125 relative flex items-center justify-center overflow-hidden ">
            <img
              className="absolute"
              src="/assets/images/Gold_0.25 baht_back.png"
              alt=""
            />
            <img
              className="relative transform duration-500  group-hover:opacity-0"
              src="/assets/images/Gold_0.25 baht_front.png"
              alt=""
            />
          </div>

          <p className="mt-6 text-center text-sm text-xl leading-relaxed text-gray-700 sm:text-base">
            ทองคำแท่ง 1 สลึง
          </p>
          <p className="text-center text-sm font-semibold text-gray-400 sm:text-base">
            2400 บาท
          </p>
        </article>

        <article className="group h-72 w-32 transform cursor-pointer duration-300 hover:-translate-y-1 sm:w-44 ">
          <div className="max-h-125 relative overflow-hidden">
            <img
              className="absolute"
              src="/assets/images/Gold_0.25 baht_back.png"
              alt=""
            />
            <img
              className="relative transform duration-500 group-hover:opacity-0"
              src="/assets/images/Gold_0.25 baht_front.png"
              alt=""
            />
          </div>

          <p className="mt-6 text-center text-sm text-xl leading-relaxed text-gray-700 sm:text-base">
            ทองคำแท่ง 1 สลึง
          </p>
          <p className="text-center text-sm font-semibold text-gray-400 sm:text-base">
            2400 บาท
          </p>
        </article>

        <article className="group h-72 w-32 transform cursor-pointer duration-300 hover:-translate-y-1 sm:w-44 ">
          <div className="max-h-125 relative overflow-hidden">
            <img
              className="absolute"
              src="/assets/images/Gold_0.25 baht_back.png"
              alt=""
            />
            <img
              className="relative transform duration-500 group-hover:opacity-0"
              src="/assets/images/Gold_0.25 baht_front.png"
              alt=""
            />
          </div>

          <p className="mt-6 text-center text-xl text-sm leading-relaxed text-gray-700 sm:text-base">
            ทองคำแท่ง 1 สลึง
          </p>
          <p className="text-center text-sm font-semibold text-gray-400 sm:text-base">
            2400 บาท
          </p>
        </article>

        <article className="group h-72 w-32 transform cursor-pointer duration-300 hover:-translate-y-1 sm:w-44 ">
          <div className="max-h-125 relative overflow-hidden">
            <img
              className="absolute"
              src="/assets/images/Gold_0.25 baht_back.png"
              alt=""
            />
            <img
              className="relative transform duration-500 group-hover:opacity-0"
              src="/assets/images/Gold_0.25 baht_front.png"
              alt=""
            />
          </div>

          <p className="mt-6 text-center text-xl text-sm leading-relaxed text-gray-700 sm:text-base">
            ทองคำแท่ง 1 สลึง
          </p>
          <p className="text-center text-sm font-semibold text-gray-400 sm:text-base">
            2400 บาท
          </p>
        </article>
      </div>

      <div className="mb-10 flex items-center justify-center">
        <a className="cursor-pointer text-sm text-blue-500 underline">
          View All Best Sellers
        </a>
      </div>
    </>
  )
}

export default BestSeller
