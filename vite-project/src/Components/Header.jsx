import React, { useContext } from "react";

import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {Input} from 'antd';
import {Menu} from 'antd';
import { CartContext } from '../Components/CartContext';
const { Search } = Input;
const Header = () => {
  const { cart }=useContext(CartContext)
  console.log("header",cart)
    const items= [

     {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];
const secondNav = [
    { label: "All", key: "all" },
    { label: "Fresh", key: "fresh" },
    { label: "MX Player", key: "mx player" },
    { label: "Sell", key: "sell" },
    { label: "BestSellers", key: "bestsellers" },
    { label: "Today's Deals", key: "today's deals" },
    { label: "Mobiles", key: "mobiles" },
    { label: "New Releases", key: "new releases" },
    { label: "Customer Service", key: "customer service" },
    { label: "Prime", key: "prime" },
    { label: "Electronics", key: "electronics" },
    { label: "Fashion", key: "fashion" },

  ];
return (
  <>
      <div className="flex justify-evenly items-center bg-[#131921] text-white py-2">
      <div>
       <img src="https://t3.ftcdn.net/jpg/03/99/04/82/360_F_399048295_bQCz5V7M2QZVnuv07lwHuMiQsR4X6o7X.jpg"
          className="h-[40px] w-auto object-contain"
       ></img>
      </div>
        <div className="flex items-center">
        <i class="fa-solid fa-location-dot"></i>
        <div className="flex flex-col">
        <span>  Delivering to Chandigarh 140603</span>
        <span> Update location</span>
       
        </div>
        </div>
   
<div className="w-[500px]">
  <Search
    placeholder="Search Amazon.in"
    enterButton
    className="amazon-search"
  />
</div>


    <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
       <div className="flex flex-col">
<span>Hello,sign in</span>
<span>Accounts and list</span>
        </div>
       
        <div className='flex'>
          <span>Return</span>
           <span>& Orders</span>
        </div>

      

        <div className='flex'>
           {cart.length}
        <i class="fa-solid fa-cart-arrow-down"></i>
        <h5>Cart</h5>
        
        </div>
   </div>
        <div className="">
        <Menu
          mode="horizontal"
          items={secondNav}
          className="bg-[#232f3e] text-white font-medium"
          />
      </div>

    </>

  );
};

export default Header;
