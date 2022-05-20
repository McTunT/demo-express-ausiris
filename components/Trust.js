import { FaShippingFast, FaShoppingCart, FaCoins } from 'react-icons/fa'
import { BsShieldCheck } from 'react-icons/bs'

const fontStyles = { color: 'white', fontSize: '40px' }

const Trust = () => {
  return (
    <div className="bg-[#bfab94]">
      <div className="flex grid h-auto max-w-full grid-cols-2 justify-between divide-x divide-white py-2 md:h-44 md:grid-cols-4">
        <div className="flex flex-shrink-0  flex-col items-center justify-center">
          <div className="flex h-20 w-auto items-center justify-center rounded-md">
            <FaShoppingCart className="text-3xl text-white sm:text-4xl" />
          </div>
          <p className="text-sm font-extralight text-white sm:text-base">
            ซื้อออนไลน์
          </p>
          <p className="text-sm font-extralight  text-white sm:text-base ">
            สินค้าพร้อมส่ง
          </p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center justify-center">
          <div className="flex h-20 w-auto items-center justify-center rounded-md ">
            <FaShippingFast className="text-3xl text-white sm:text-4xl" />
          </div>
          <strong className="text-sm font-medium  text-white sm:text-base ">
            จัดส่งปลอดภัย
          </strong>
          <strong className="text-sm font-medium text-white sm:text-base">
            ถึงเร็วมีประกัน
          </strong>
        </div>
        <div className="flex flex-shrink-0 flex-col items-center justify-center">
          <div className="flex h-20 w-auto items-center justify-center rounded-md">
            <FaCoins className="text-3xl text-white sm:text-4xl" />
          </div>
          <strong className="text-sm font-medium  text-white sm:text-base">
            รับเงินโอนและ
          </strong>
          <strong className="text-sm font-medium  text-white sm:text-base">
            Promptpay
          </strong>
        </div>
        <div className="flex flex-shrink-0 flex-col items-center justify-center">
          <div className="flex h-20 w-auto items-center justify-center rounded-md">
            <BsShieldCheck className="text-3xl text-white sm:text-4xl" />
          </div>
          <strong className="text-sm font-medium  text-white sm:text-base">
            ทองคำแท่ง 96.5%
          </strong>
          <strong className="text-sm font-medium  text-white sm:text-base">
            ของแท้แน่นอน
          </strong>
        </div>
      </div>
    </div>
  )
}

export default Trust
