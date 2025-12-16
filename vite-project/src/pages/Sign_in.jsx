import React from 'react'

const Sign_in = () => {
  return (
    <div className='flex flex-col items-center' >
      <div className='flex justify-center items-center h-36 w-60 -mt-8'>
<img src="https://www.adgully.com/img/800/201910/image002.png.jpg"
className="object-cover rounded"

></img>
      </div>
<div className='flex flex-col border border-gray-300 p-7 -mt-10 w-[350px] '>
<h2>Sign in</h2>
<label className= "block text-sm font-semibold !my-2">Enter mobile number or email</label>
<input type="text" id="h" className='w-full border border-gray-400 rounded-sm p-2'></input>
<button className="bg-[#F7CA00] p-1 text-black w-full rounded-full !mt-5">
Continue
</button>
<p className='text-xs !mt-8  font-normal'>By continuing, you agree to Amazon's
   <span className="text-blue-700 hover:underline">
            Conditions of Use
          </span>
          {/* and{" "} */}
          <span className="text-blue-700 hover:underline">
            Privacy Notice
          </span>
        </p>
<div className="mt-3 text-xs w-full text-blue-700">
  <label className="font-medium text-blue-700">Need help?</label>

  <select
    className="w-full text-blue-700 border border-gray-400 rounded-sm px-2 py-1 mt-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
  >
    <option value="">Select an option</option>
    <option value="forgot">Forgot your password?</option>
    <option value="issues">Other issues with Sign-In</option>
  </select>
</div>




</div>
<div className="flex items-center w-[350px] my-4">
    <div className="flex-1 h-px bg-gray-300"></div>
    <span className="px-2 text-xs tmber or email
Continue
ext-gray-600">New to Amazon?</span>
    <div className="flex-1 h-px bg-gray-300"></div>
  </div>
 <button
    className="w-[350px] border border-gray-400  py-2 text-[10px]  rounded-full">
    Create your amazon account
  </button>
  <hr className="w-full border-t border-gray-300 mt-7" />
<p className='text-xs text-blue-700 mt-20'>
<a>Condition of use</a>
<a>Privacy Policy</a>
<a>Help</a>
</p>
<p className='text-grey text-xs'>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
    </div>
  )
}

export default Sign_in
