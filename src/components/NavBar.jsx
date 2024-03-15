import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Search from './Search';

function NavBar() {
  return (
    <header className="main-w-[1000px] ">
      {/* Left */}
      <div className="flex bg-amazon text-white h-[60px] ">
        <div className="flex items-center m-4">
          <img
            className="h-[35px] w-[100px] m-2"
            src={'../images/amazon.png'}
            alt="logo"
          />
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to </div>
            <div className="text-sm xl:text-base font-bold">United State</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search></Search>
        </div>
        {/* right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, Sign In </div>
            <div className="text-sm xl:text-base font-bold">
              Account & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]"></ShoppingCartIcon>
            <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
          </div>
        </div>
      </div>
      <div className="flex bg-amazon-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 ">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
}

export default NavBar;
