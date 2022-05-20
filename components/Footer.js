export default function Footer() {
  return (
    <footer className="bg-[#e7ded5]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src="/assets/images/ausiris-logo.png"
              className="mr-5 h-6 sm:h-9"
              alt="logo"
            />
            <p className="mt-4 max-w-xs text-sm text-gray-900">
              323 ชั้น G อาคาร ยูไนเต็ด เซ็นเตอร์ ถนนสีลม แขวงสีลม เขตบางรัก
              กรุงเทพฯ 10500
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">เกี่ยวกับเรา</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
                <a className="cursor-pointer hover:opacity-75" href="/">
                  เกี่ยวกับเรา
                </a>
                <a className="cursor-pointer hover:opacity-75" href="/">
                  สื่อต่างๆ
                </a>
                <a className="cursor-pointer hover:opacity-75" href="/">
                  ข่าวสาร
                </a>
                <a className="cursor-pointer hover:opacity-75" href="/">
                  ร้านของเรา
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">การสั่งซื้อสินค้า</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
                <a className="cursor-pointer hover:opacity-75" href="/">
                  การเปลี่ยนคืนสินค้า
                </a>
                <a className="cursor-pointer hover:opacity-75" href="/">
                  วิธีการสั่งซื้อ ชำระเงิน
                </a>
                <a className="cursor-pointer hover:opacity-75" href="/">
                  ติดตามสถานะการสั่งซื้อ
                </a>
                <a className="cursor-pointer hover:opacity-75" href="/">
                  สั่งทำแบบลายพิพม์
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">บริการอื่นๆ</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
                <a className="cursor-pointer hover:opacity-75" href="/">
                  ออมทอง Online
                </a>
                <a className="cursor-pointer hover:opacity-75" href="/">
                  ลงทุนในทองคำแท่ง
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">ติดต่อเรา</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-600 ">
                <a className="cursor-pointer hover:opacity-75" href="/">
                  โทร 02 613 08888
                </a>
              </nav>
              <div className="mt-8 flex space-x-4 text-gray-900">
                <a
                  className="hover:opacity-75"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Line </span>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm1-12.508c0-3.58-3.589-6.492-8-6.492s-8 2.912-8 6.492c0 3.209 2.846 5.897 6.691 6.405.26.056.615.172.704.395.081.202.053.519.026.723l-.114.685c-.035.202-.161.791.693.431.854-.36 4.607-2.713 6.286-4.645h-.001c1.16-1.271 1.715-2.561 1.715-3.994zm-10.978 2.067h-2.242l-.108-.043v-.001l-.001-.001-.003-.003-.044-.107v-3.486c0-.086.07-.156.156-.156h.562c.085 0 .155.07.155.156v2.768h1.525c.086 0 .155.07.155.156v.561c0 .086-.069.156-.155.156zm8.314 0h-2.242l-.108-.043-.004-.005-.044-.107v-3.486l.044-.107.004-.005.108-.044h2.242c.086 0 .155.07.155.156v.561c0 .086-.069.156-.155.156h-1.525v.589h1.525c.086 0 .155.07.155.156v.561c0 .086-.069.156-.155.156h-1.525v.589h1.525c.086 0 .155.07.155.156v.561c0 .086-.069.156-.155.156zm-6.961 0h-.562c-.086 0-.156-.069-.156-.155v-3.486c0-.086.07-.156.156-.156h.562c.086 0 .155.07.155.156v3.486c0 .085-.069.155-.155.155zm1.418 0h-.561c-.086 0-.156-.069-.156-.155v-3.486c0-.086.07-.156.156-.156h.561l.013.001.015.002.009.002.015.004.005.002.014.006.013.008.008.005.012.01.003.003.01.011.013.015 1.597 2.158v-2.071c0-.086.07-.156.156-.156h.561c.086 0 .156.07.156.156v3.486c0 .085-.07.155-.156.155h-.561l-.04-.005-.002-.001-.016-.005-.007-.003-.012-.006-.01-.006-.001-.001-.04-.039-1.599-2.16v2.071c0 .085-.07.155-.156.155z" />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Youtube </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-400">
          <div className=""></div>
          <div className="mt-8 pt-4 text-sm text-gray-600">
            ©2022 Ausiris, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
