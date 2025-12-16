
import React, { Component } from 'react';
import { Card,Rate } from 'antd';
import CommanButton from "./CommanButton";


const { Meta } = Card;

const Cart_item = () => (
 <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
<div className='flex flex-col items-center justify-center'>
<h1 className='text-center'>TG Furniture Sheesham Wood King Size Bed with...</h1>
<Rate/>
<CommanButton/>
   <div className="flex items-baseline gap-1 mt-2">
  <span className="relative -top-3 text-sm">&#8377;</span>
  <span className="text-2xl font-medium leading-none">501</span>
  <span className="relative -top-3 text-sm">00</span>
  <span className="relative  text-m line-through ">&#8377;1,199.00</span>

</div>
<button className="bg-[#FFA41C] p-2 color-black w-24 rounded-full">
  Shop Now
</button>

  </div>
  </Card>


);

export default Cart_item;






































































//     hoverable
//     style={{ width: 240 }}
//     cover={
//       <img
//         draggable={false}
//         alt="example"
//         src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//       />
//     }
//   >
//     <Meta title="Europe Street Beat" description="www.instagram.com" />

//     {/* PRICE */}
//     <p style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>
//       ₹ 1,299
//     </p>

//     {/* BUTTON */}
//     <Button 
//       type="primary" 
//       style={{ width: "100%", background: "#FFD814", color: "black", fontWeight: "500" }}
//     >
//       Add to Cart
//     </Button>
