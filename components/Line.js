function Line() {
  return (
    <>
      <section className="">
        <div className="container mx-auto mt-6 px-5 lg:px-20">
          <div className="mt-4 flex w-full transform flex-wrap items-end justify-start rounded-lg bg-[#f9f7f5] transition duration-500 ease-in-out hover:border-white ">
            <div className="w-full md:w-2/3 xl:w-3/4">
              <div className="relative flex h-full flex-col p-8 ">
                <h2 className="title-font mb-4 text-2xl font-semibold uppercase tracking-widest text-black">
                  ไม่แน่ใจต้องการทองแบบไหน
                </h2>
                <p className="mb-2 flex items-center text-sm font-normal tracking-wide text-black">
                  แอดไลน์ของเรา เรามีผู้เชี่ยวชาญที่จะช่วยคุณตั้งแต่ ลงทุน
                  ซื้อทองและออมทอง
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/4 lg:ml-auto xl:w-1/4">
              <div className="relative flex h-full flex-col p-8">
                <button className="items-centerw-full text-md focus:shadow-outline mx-auto mt-2 w-full transform rounded-md bg-[#00B900] px-4 py-2 text-blue-100 ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-[#008600] focus:outline-none focus:ring-2 sm:mt-0">
                  Add Line Ausiris OA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Line
