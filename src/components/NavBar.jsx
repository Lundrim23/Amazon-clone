import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

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
        <div className="flex">Middle</div>
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
    </header>
  );
}

export default NavBar;
