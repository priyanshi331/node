
import React from 'react'
import Dropdown from "./Dropdown";
import India from "./India";



function Footer() {
  return (

    <footer>
      <div className='flex flex-col items-center justify-center  mt-5 '>
        <hr className="w-full border-t border-gray-300 " ></hr>

        <h1 className='text-[22px] font-extrabold pt-[40px]'>See personalized recommendations</h1>


        <button className="bg-[#F7CA00] p-2 color-black w-60 rounded-full ">Sign in</button>
        <h6 className='text-[12px] '>New Customer?<a>Start here</a></h6>
        <hr className="w-full border-t border-gray-300 mt-3" /> 

      </div>

      <div className="bg-[#232f3e] h-12 flex  items-center justify-center text-white text-[14px] mt-5">
        Back to top
      </div>

      <div className='flex items-center justify-center bg-[#232F3E] h-100 text-white py-10 w-full flex-col'>
        <div className='grid grid-cols-4 gap-[15px]'>
          <div className='flex flex-col'>
            <h4 className='text-[17px] font-semibold'>Get to Know Us</h4>
            <ul className='space-y-1 text-sm text-[#DDD]'>
              <li>About Amazon</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-[17px]'>Connect with Us</h4>
            <ul className='space-y-1 text-sm text-[#DDD]'>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>

            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-[17px]'>Make Money with Us</h4>
            <ul className='space-y-1 text-sm text-[#DDD]'>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Supply to Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-[17px]'>Let Us Help You</h4>
            <ul className='space-y-1 text-sm text-[#DDD]'>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Recalls and Product Safety Alerts</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        
        <hr className="w-full border-t border-gray-300 mt-7" />
        <div className='flex mt-5 g-6'>
          <div>
            <img src="	https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
              className="w-25 h-10  object-cover rounded"></img>
          </div>
          <div className='flex gap-4 ml-10 mb-4'>
            <Dropdown />
            <India />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center bg-[#131A22] flex-col h-65'>
        <div className='grid  grid-cols-4 gap-[10px] justify-center items-center -ml-55'>
          <div className='flex flex-col'>
            <h4 className='text-[12px] font-bold text-[#DDD]'>AbeBooks
            </h4>
            <ul className='space-y-1 text-xs text-[#999]'>
              <li>Books, art</li>
              <li>& collectibles</li>
              <li className='mt-3 text-[#DDD] text-[12px] font-bold'>Shopbop</li>
              <li>Designer</li>
              <li>Fashion Brands</li>
            </ul>
          </div>

          <div className='flex flex-col'>
            <h4 className='text-[12px] font-bold text-[#DDD]'>Amazon Web Services</h4>
            <ul className='space-y-1 text-xs text-[#999]'>
              <li>Scalable Cloud</li>
              <li>Computing Services</li>
              <li className='mt-3 text-[#DDD] text-[12px] font-bold'>Amazon Business</li>
              <li>Everything For </li>
              <li>Your Business</li>
            </ul>
          </div>

          <div className='flex flex-col'>
            <h4 className='text-[12px] font-bold text-[#DDD]'>Audible</h4>
            <ul className='space-y-1 text-xs text-[#999]'>
              <li>Download</li>
              <li>Audio Books</li>
              <li className='mt-3 text-[#DDD] text-[12px] font-bold'>Prime Now</li>
              <li>2-Hour Delivery on Everyday Items</li>
            </ul>
          </div>



          <div className='flex flex-col'>
            <h4 className='text-[12px] font-bold text-[#DDD]'>IMDb</h4>
            <ul className='space-y-1 text-xs text-[#999]'>
              <li>Movies,TV</li>
              <li>& Celebrities</li>
              <li className='mt-3 text-[#DDD] text-[12px] font-bold'>Amazon Prime Music</li>
              <li>100 million songs,ad-free</li>
              <li>Over 15 million podcast episodes</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 text-xs text-[#DDD]">
          <p className='flex  gap-4'>
            <a>Condition of use & sale</a>
            <a>Privacy Notice</a>
            <a>Interest-Based Ads</a>
          </p>
          <p className='text-[#DDD] text-xs'>
            © 1996-2025, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
