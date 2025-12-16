import React from 'react'

const Create = () => {
  return (
    
      <div className='flex flex-col items-center' >
      <div className='flex justify-center items-center h-36 w-60 -mt-8'>
<img src="https://www.adgully.com/img/800/201910/image002.png.jpg"
className="object-cover rounded"

></img>
      </div>
<div className='flex flex-col border border-gray-300 p-7 -mt-10 w-[350px] '>
<h1 className='text-[26px]'>Create Account</h1>
<label className= "block text-sm font-semibold mt-2">Your Name</label>
<input type="text" id="h" className='w-full border border-gray-400 rounded-sm p-2'></input>
<label className= "block text-sm font-semibold mt-2"> Email
</label>
<input type="text" id="h" className='w-full border border-gray-400 rounded-sm p-2'></input>
<label className= "block text-sm font-semibold mt-2">Password
</label>
<input type="text" id="h" className='w-full border border-gray-400 rounded-sm p-2'></input>
<label className= "block text-sm font-semibold mt-2">Password again
</label>
<input type="text" id="h" className='w-full border border-gray-400 rounded-sm p-2'></input>
<button className="bg-[#F7CA00] p-1 text-black w-full rounded-full mt-5">
Create your Amazon account
</button>
<p className='text-xs mt-10  font-normal'> By creating an account or logging in, you agree to Amazon’s
   <span className="text-blue-700 hover:underline">
            Conditions of Use
          </span>
          {"  and  "}
          <span className="text-blue-700 hover:underline">
             Privacy Notice
          </span>
        </p>

  <hr className="w-full border-t border-gray-300 mt-4" />
<p className='text-xs mt-8'>Already have an account?
 <span className="text-blue-700 hover:underline">
    Sign in
 </span>

</p>



</div>
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

export default Create
