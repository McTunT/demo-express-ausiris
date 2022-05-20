import { Disclosure } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  SearchIcon,
  ShoppingBagIcon,
} from '@heroicons/react/outline'
import { navigation, navigationMoblie, navigationGold } from '../lib/functions'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="border-b bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#c2b061] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                <a href="/" className="flex  flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/assets/images/ausiris-logo.png"
                    alt="logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/assets/images/ausiris-logo.png"
                    alt="logo"
                  />
                </a>
                <div className="hidden flex-1 sm:ml-6 sm:block">
                  <div className="flex flex items-center justify-center space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-black hover:bg-[#c2b061] hover:text-white',
                          'rounded-md px-1 py-2 text-sm font-medium lg:px-3'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full p-3 text-gray-400 hover:text-[#c2b061] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="rounded-full p-3 text-gray-400 hover:text-[#c2b061] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">Shopping Cart</span>
                  <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="grid hidden grid-cols-2 divide-x divide-gray-300 sm:flex">
                  <div className="mr-1">
                    <a className="rounded-md px-3 py-2 text-sm font-medium uppercase text-black hover:bg-[#c2b061] hover:text-white">
                      Login
                    </a>
                  </div>
                  <div className="">
                    <a className="ml-1 rounded-md px-3 py-2 text-sm font-medium uppercase text-black hover:bg-[#c2b061] hover:text-white">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigationMoblie.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-black hover:bg-[#c2b061] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
          <div className=" hidden flex-1 bg-[#e7ded5] sm:block">
            <div className="flex flex items-center justify-center space-x-4 p-2">
              {navigationGold.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-black hover:bg-[#c2b061] hover:text-white',
                    'rounded-md px-1 py-2 text-sm font-medium lg:px-3'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
