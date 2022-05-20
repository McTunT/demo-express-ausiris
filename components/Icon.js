function Icon() {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="py-auto mx-auto px-4 sm:px-6 md:mx-40 md:py-4 lg:px-4">
          <div className="grid grid-cols-2 md:grid-cols-5">
            <div className="col-span-1 flex items-center justify-center p-4 md:col-span-2 lg:col-span-1">
              <img
                alt=""
                className="aspect-square h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
                src="/assets/images/dbdlogo.jpg"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center p-6 md:col-span-2 lg:col-span-1">
              <img
                alt=""
                className="aspect-square h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
                src="/assets/images/goldtraderlogo.jpg"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center p-6 md:col-span-2 lg:col-span-1">
              <img
                alt=""
                className="aspect-square h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
                src="/assets/images/alphalogo.jpg"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center p-6 md:col-span-2 lg:col-span-1">
              <img
                alt=""
                className="aspect-square h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
                src="/assets/images/gitlogo.jpg"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center p-6 md:col-span-2 lg:col-span-1">
              <img
                alt=""
                className="aspect-square h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-110"
                src="/assets/images/postlogo.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Icon
