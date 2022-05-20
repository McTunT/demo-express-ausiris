const ScrollProducts = () => {
  return (
    <>
      <div className=" gap-4 bg-neutral-50 py-8">
        <div className="mx-4 mt-10 flex items-center justify-center text-center">
          <p className="text-2xl font-medium md:text-4xl">
            ทองคำสำหรับทุกวันสำคัญของคุณ
          </p>
        </div>
        <div className="mx-4 mb-10 mt-2 flex items-center justify-center text-center md:mb-24">
          <p className="text-xs font-medium md:text-sm">
            เลือกซื้อทองสำหรับทุกโอกาส
            หรือสั่งทำลายพิพม์แบบพิเศษกับเราให้คนี่คุณรัก
          </p>
        </div>
        <div className="mx-4 my-16 flex h-96 max-w-full snap-x snap-mandatory overflow-x-auto whitespace-nowrap md:mx-16">
          <div className="mb-4 flex flex-shrink-0 transform cursor-pointer snap-start flex-col items-center justify-center">
            <img
              className=" mx-2 h-96 w-56 rounded-lg object-cover"
              src="/assets/images/kids-feet.jpg"
            />
            <strong className="mt-2 text-sm font-medium">รับขวัญหลาน</strong>
          </div>

          <div className="mb-4 flex flex-shrink-0 snap-start flex-col items-center justify-center">
            <img
              className="object-cove mx-2 h-96 w-56 rounded-lg"
              src="/assets/images/people.jpg"
            />
            <strong className="mt-2 text-sm font-medium ">ขึ้นบ้านใหม่</strong>
          </div>
          <div className="mb-4 flex flex-shrink-0 snap-start flex-col items-center justify-center">
            <img
              className="mx-2 h-96 w-56 rounded-lg object-cover"
              src="/assets/images/gift.jpg"
            />
            <strong className="mt-2 text-sm font-medium ">
              ของขวัญวันเกิด
            </strong>
          </div>
          <div className="mb-4 flex flex-shrink-0 snap-start flex-col items-center justify-center">
            <img
              className="h-96 w-56 rounded-lg object-cover px-2"
              src="/assets/images/couple.jpg"
            />
            <strong className="mt-2 text-sm font-medium ">
              ให้คนที่คุณรัก
            </strong>
          </div>
          <div className="mb-4 flex flex-shrink-0 snap-start flex-col items-center justify-center">
            <img
              className="mx-2 h-96 w-56 rounded-lg object-cover"
              src="/assets/images/bussinesman.png"
            />
            <strong className="mt-2 text-sm font-medium ">
              เปิดธุรกิจใหม่
            </strong>
          </div>
          <div className="mb-4 flex flex-shrink-0 snap-start flex-col items-center justify-center">
            <img
              className="mx-2 h-96 w-56 rounded-lg object-cover"
              src="/assets/images/old-man.jpg"
            />
            <strong className="mt-2 text-sm font-medium ">ให้ผู้ใหญ่</strong>
          </div>
          <div className="mb-4 flex flex-shrink-0 snap-start flex-col items-center justify-center">
            <img
              className="mx-2 h-96 w-56 rounded-lg object-cover"
              src="/assets/images/couple.jpg"
            />
            <strong className="mt-2 text-sm font-medium ">
              ให้คนที่คุณรัก
            </strong>
          </div>
          <div className="mb-4 flex flex-shrink-0 snap-start flex-col items-center justify-center">
            <img
              className="mx-2 h-96 w-56 rounded-lg object-cover"
              src="/assets/images/bussinesman.png"
            />
            <strong className="mt-2 text-sm font-medium ">
              เปิดธุรกิจใหม่
            </strong>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <a className="cursor-pointer text-sm text-blue-500 underline">
            Shop by Occasions
          </a>
        </div>
      </div>
    </>
  )
}

export default ScrollProducts
