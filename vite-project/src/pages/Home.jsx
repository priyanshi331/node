

import { Carousel } from 'antd';
import Header from "../Components/Header";
import Rate  from "../Components/Rate";
import CommanButton from "../Components/CommanButton";
import Modal from "../Components/Modal";
// import Dropdown from "../Components/Dropdown";
// import India from "../Components/India";
import Footer from "../Components/Footer"

import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { CartContext } from '../Components/CartContext';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


function Home() {
  const {addToCart}=useContext(CartContext)

  const [husband,setWife]=useState([])
  useEffect(()=>{
    try {
      axios.get("http://127.0.0.1:8000/api/homesection/")
      .then((res)=>{
        console.log(" backend sa data aagya",res)
        setWife(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  },[])
  return (
      <div>
        <Header/>
        <Modal/>

        <div className="w-full ">
        <Carousel autoplay autoplaySpeed={2000} dots={true}>

          <div>
            <img  src="https://cdn.dribbble.com/userupload/27288465/file/original-c12e58f11b1c94795f2b1be87cf07586.png?resize=1504x1128&vertical=center"
                   className="w-full h-[500px] object-cover"
            />
          </div>


         <div>
             <img
             src="https://cdn.dribbble.com/userupload/10267866/file/original-c1e1480b01d978f71e7751f386290a48.jpg?resize=1024x1024&vertical=center"
              className="w-full h-[500px] object-cover"
            />
          </div> 
            <div>
            <img
            // src="https://cdn.prod.website-files.com/605826c62e8de87de744596e/66b9a6e182d716e727515048_6304972b0f458d536743e9d9_reebok.jpeg"
             className="w-full object-cover"
           />
          </div> 

        </Carousel>



<div className="grid grid-cols-4 gap-2 p-4 bg-orange-100 mt-[100px] relative z-20">

  <div className="te p-4">
  <h2 className='text-lg font-semibold mb-3'>
    Appliances for your home | Up to 55% off
  </h2>
  <div className='grid grid-cols-4 gap-90 '>
 {husband.map((item,index)=>(
<div className='bg-red-400  justify-center w-[350px]'>
  <div className='grid grid-cols-2 gap-4'>
    <div>

  <img src={item.img1} ></img>
  <p>{item.text1}</p>
    </div>

  <div>

  <img src={item.img2} ></img>
  <p>{item.text2}</p>

    </div>  <div>

  <img src={item.img3} ></img>
  <p>{item.text3}</p>

    </div>  <div>

  <img src={item.img1} ></img>
  <p>{item.text1}</p>

    </div>
    <button onClick={()=>addToCart(item)}>Add To Cart</button>
        <a className="text-blue-600 underline text-center block py-3 cursor-pointer">
          See more deals
        </a>
  </div>

</div>
  ))}
  </div>
</div>
</div>








<div className="bg-white p-4 ">
    <h1 className='text-lg font-semibold mb-3'>Automotive essentials | Up to 60% off</h1>

  <div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>
<div>
<img src="https://t3.ftcdn.net/jpg/02/37/15/86/360_F_237158635_AkhWPaSELIoGtgoeiJHPRwwjZg4ug5vh.jpg"></img>
<p class="text-sm mt-1">Cleaning accessories</p>
</div>
<div>
<img src="https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/tyres_new/Apollo/Apollo%20Alnac%204GS.jpg"></img>
<p class="text-sm mt-1">Tyre & rim care</p>

</div>
<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_MO-RPTBmsHf069BgnwqukbxN921CM1IkQ&s"></img>
<p class="text-sm mt-1">Helmets</p>

</div>
<div>
<img src="https://pringle.in/cdn/shop/files/61lLqYI1cdL.jpg?v=1729617281"></img>
<p class="text-sm mt-1">Vacuum cleaner</p>

</div>
</div>
  </div>
  </div>
<div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 mt-[100px] relative z-20">

     <div className="bg-white p-4">
    <h2 className="text-lg font-semibold mb-3">
      Up to 50% off | Baby care & toys | Amazon Brands
    </h2>
   <div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>
    <div>
    <img src="https://images.indianexpress.com/2019/09/toys.jpg" className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://www.eurokidsindia.com/blog/wp-content/uploads/2024/03/plush-toys-870x570.jpg"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://images-cdn.ubuy.co.in/6803d209b49081d2b10fb230-rascals-premium-absorbent-baby-diapers.jpg"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://toyshine.in/cdn/shop/files/4X4_FRICTION-2_480x480@2x.jpg?v=1714375818"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>

   </div>
   </div>
   </div>


  <div className="bg-white p-4">
  <h2 className='text-lg font-semibold mb-3'>
    Starting ₹199 | Amazon Brands & more
  </h2>
  <div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>
<div>
<img src="https://www.trancehomelinen.in/cdn/shop/files/714m9S1fGLL._SL1500.jpg?v=1724313931&width=1080"></img>
  <p class="text-sm mt-1">Starting 199|Bedsheets</p>
</div>
<div>
<img src="	https://img.freepik.com/free-photo/picture-frame-b…chair_53876-132788.jpg?semt=ais_hybrid&w=740&q=80"></img>
    <p class="text-sm mt-1">Starting 199 | Curtains</p>
</div>
<div>
<img src="https://www.nitori.co.in/cdn/shop/files/850093801_570x570.jpg?v=1728568590"></img>
<p class="text-sm mt-1">Minimum 40% off | Ironing board & more</p>
</div>
<div>
<img src="	https://m.media-amazon.com/images/I/71ouPdKwbCL._SX679_.jpg"></img>
<p class="text-sm mt-1"></p>
</div>
</div>
</div>
  <div className="bg-white p-4 ">
  <h1 className='text-lg font-semibold mb-3'>Continue shopping deals</h1>

<div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>

<div>
<img src="https://images-eu.ssl-images-amazon.com/images/I/71+Zd3jtpCL._AC_UL600_SR600,600_.jpg"></img>
    <p class="text-sm mt-1">Starting 249 | </p>

</div>
<div>
<img src="https://cdn.suzukimotorcycle.co.in/public-live/uploads/media-images/original/Hayabusa_Digital_Banner_550X640-05_67ff64385baff.jpg"></img>
    <p class="text-sm mt-1">Starting 349 | </p>

</div>
<div>
<img src="https://storio.in/cdn/shop/files/41GynUOtS8L.jpg?v=1712374436"></img>
    <p class="text-sm mt-1">Starting 649 | </p>

</div>
<div>

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqQJRLgY5_ld2Uzk6zH7yQ-9wJiQpMTSQbA&s"></img>
    <p class="text-sm mt-1">Starting 149 | </p>

</div>
</div>
</div>

<div className="bg-white p-4 ">
    <h1 className='text-lg font-semibold mb-3'>Automotive essentials | Up to 60% off</h1>

  <div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>
<div>
<img src="https://mmtoyworld.com/cdn/shop/files/e-com_01_1.jpg?v=1699077222&width=533"></img>
<p class="text-sm mt-1">Cleaning accessories</p>
</div>
<div>
<img src="https://kangaroocareindia.com/static/media/blog-120.7629f9879cab648cc6a4.png"></img>
<p class="text-sm mt-1">Tyre & rim care</p>

</div>
<div>
<img src="https://myneemoe.in/cdn/shop/files/c-15.jpg?v=1725700936"></img>
<p class="text-sm mt-1">Helmets</p>

</div>
<div>
<img src="https://m.media-amazon.com/images/I/91h8tT8KrnL.jpg"></img>
<p class="text-sm mt-1">Vacuum cleaner</p>

</div>
</div>
  </div>
  </div>


<div className="bg-white p-4 rounded-md mt-40">
    <h2 className="text-lg font-semibold">
    Starting ₹70,348 | From daily commutes to weekend thrills
  </h2>
<div className="grid grid-cols-5 gap-3 mt-15">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJfLtba0f0GDjvqhM-3cTdu5fjE6Z6WpEuw&s"
 className="w-full h-40 object-cover rounded"></img>

<img src="https://cdn.bikedekho.com/processedimages/triumph/bajaj-350/source/bajaj-35068da30b3c619a.jpg?tr=w-360"
className="w-full h-40 object-cover rounded"
></img>


<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmE2bPZMkUQggWVKbogUOGgmhijh0w2WhD0Q&s"
className="w-full h-40 object-cover rounded"
></img>


<img src="https://cdn.suzukimotorcycle.co.in/public-live/uploads/media-images/original/Hayabusa_Digital_Banner_550X640-05_67ff64385baff.jpg"
className="w-full h-40 object-cover rounded"
></img>

<img src="https://media1.thrillophilia.com/filestore/bhvou6x4btoy5nno3u2srvh76sb5_WhatsApp-Image-2019-12-13-at-10.27.09-PM.jpeg?w=576&h=650"
className="w-full h-40 object-cover rounded"
></img>

</div>
</div>
<div className="bg-white p-4 rounded-md mt-15">
    <h2 className="text-lg font-semibold">
    Min. 50% off | Unique home finds | Amazon Brands & more
  </h2>
<div className="grid grid-cols-6 gap-3 mt-10">
<img src="	https://m.media-amazon.com/images/I/61vihvwHdBL._SX679_.jpg"
 className="w-full h-40 object-cover rounded"></img>
<img src="https://m.media-amazon.com/images/I/61zvPe52NQL._SX522_.jpg"
className="w-full h-40 object-cover rounded"
></img>


<img src="https://m.media-amazon.com/images/I/71LwLRvsd5L._SX522_.jpg"
className="w-full h-40 object-cover rounded"
></img>

<img src="https://m.media-amazon.com/images/I/51D08foYn4L._SX522_.jpg"
className="w-full h-40 object-cover rounded"
></img>
<img src="https://m.media-amazon.com/images/I/513D065GkoL._SX522_.jpg"
className="w-full h-40 object-cover rounded"
></img>
<img src="https://m.media-amazon.com/images/I/71yozRRwveL._AC_UF1000,1000_QL80_.jpg"
className="w-full h-40 object-cover rounded"
></img>
</div>
</div>

<div className="bg-white p-4 rounded-md mt-15">
    <h2 className="text-lg font-semibold">
      Related to items you've viewed
  </h2>
<div className="grid grid-cols-6 gap-3 mt-10">
  <img src="https://m.media-amazon.com/images/I/31k7GAR2T1L._SY300_SX300_QL70_FMwebp_.jpg"
 className="w-full h-40 object-cover rounded"></img>
<img src="https://m.media-amazon.com/images/I/61Bv0alLJYL._SX679_.jpg"
className="w-full h-40 object-cover rounded"
></img>


<img src="https://m.media-amazon.com/images/I/61qe7hzT8SL._SY879_.jpg"
className="w-full h-40 object-cover rounded"
></img>

<img src="https://m.media-amazon.com/images/I/41mAhb7zhzL._SX679_.jpg"
className="w-full h-40 object-cover rounded"
></img>
<img src="https://m.media-amazon.com/images/I/41mAhb7zhzL.jpg"
className="w-full h-40 object-cover rounded"
></img>
<img src="https://images-eu.ssl-images-amazon.com/images/I/71+Zd3jtpCL._AC_UL600_SR600,600_.jpg"
className="w-full h-40 object-cover rounded"
></img>
</div>
</div>

<div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 mt-[20px] relative z-20">
  <div className="bg-white p-4 flex align-center flex-col">
    <div className='flex flex-col'>
    <h2 className="text-lg font-semibold mb-3">
     Continue shopping for
    </h2>
    <div className='flex justify-center'>
    <img src="https://woodstage.in/wp-content/uploads/2022/02/main-01-2.jpg" 
    className="w-40 h-40 object-cover rounded"

    ></img>
    </div>
    <p>SH Arts Solid sheeham Wood Bedside table with 1 Drawer Wooden Nightstand End Ta...</p>
    <h2>&#8377;3,999</h2>
</div>
<div className='grid grid-cols-4 gap-3 mt-[15px]'>
<img src="https://mysleepyhead.com/media/catalog/product/t/e/teak_wood_bedside_table.jpg"
className="w-20 h-20 object-cover rounded"

></img>
<img src="https://mysleepyhead.com/media/catalog/product/b/e/bed_side_table_size_1.jpg"
className="w-20 h-20 object-cover rounded"
></img>
<img src="https://ganpatiarts.com/cdn/shop/files/COFFEE-TABLE-1ST-9.jpg?v=1757772508&width=1214"
className="w-20 h-20 object-cover rounded"
></img>
<img src="https://mywakeup.in/cdn/shop/files/Alphabedside_Lifestyle_2800x1860..png?v=1748581232&width=1214"
className="w-20 h-20 object-cover rounded"
></img>
</div>
</div>
  <div className="bg-white p-4 flex align-center flex-col">
    <div className='flex flex-col'>
    <h2 className="text-lg font-semibold mb-3">
     Keep Shopping for
    </h2>
    <div className='flex justify-center'>
    <img src="https://www.ikea.com/in/en/images/products/uppatvind-air-purifier__1295399_ph190374_s5.jpg?f=s" 
    className="w-40 h-40 object-cover rounded"

    ></img>
    </div>
    <p>Airofy Airo Essential Portable Air Purifier with HEPA H13 Filter,Diffusee & aromathe....</p>
    <h2>&#8377;2,999</h2>
</div>
<div className='grid grid-cols-4 gap-3 mt-[15px]'>
<img src="https://electronicparadise.in/cdn/shop/files/1_98365efc-bf16-49f6-a9ab-b92d7a603032.jpg?v=1730792232&width=679"
className="w-20 h-20 object-cover rounded"

></img>
<img src="https://m.media-amazon.com/images/I/51VJcXz9V6S._AC_UF894,1000_QL80_.jpg"
className="w-20 h-20 object-cover rounded"
></img>
<img src="https://www.electrolux.in/contentassets/e3f1f217e6f048b48c3e7b35e88f20f1/air-purifier-image-3.jpg"
className="w-20 h-20 object-cover rounded"
></img>
<img src="https://americanmicronic.in/cdn/shop/files/71CIH22fmBL._SL1500.jpg?v=1723608261&width=2048"
className="w-20 h-20 object-cover rounded"
></img>
</div>
</div>

   <div className="bg-white p-4">
    <h2 className="text-lg font-semibold mb-3">
      Up to 60% off | Trending products from Emerging
    </h2>
   <div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>
    <div>
    <img src="https://m.media-amazon.com/images/I/51my99g9nIL._AC_UF350,350_QL80_.jpg" className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://bhutatva.com/wp-content/uploads/2021/06/fitkari.jpg"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/51o5XhgsXzL._AC_UF894,1000_QL80_.jpg"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://m.media-amazon.com/images/I/71jYdEPTZ+L._AC_UF894,1000_QL80_.jpg"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>

   </div>
   </div>
   </div>



 <div className="bg-white p-4">
    <h2 className="text-lg font-semibold mb-3">
      Best Sellers in beauty
    </h2>
   <div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>
    <div>
    <img src="https://www.bbassets.com/media/uploads/p/l/40007012_3-godrej-no1-bathing-soap-sandal-turmeric.jpg" className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://images-static.nykaa.com/media/catalog/product/9/4/940d7bc8901526401604_10.jpg?tr=w-500"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://images-static.nykaa.com/media/catalog/product/7/c/7c8878dNYKBNDCTP0010_1b.jpg?tr=w-500"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://weherbal.in/cdn/shop/files/Kumkumadi-face-cream.webp?v=1761720924&width=2048
"  className="w-full h-[120px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
   </div>
   </div>
   </div>
</div>

<div className="flex justify-center align-center bg-white">
  <div>
<img src="https://img.freepik.com/premium-vector/furniture-l…isolated_22345-858.jpg?semt=ais_hybrid&w=740&q=80"
className="w-30 h-30 object-cover rounded"

></img>
<h1>Optimize Your Space:Strata Storage Bunk Beds!</h1>
  </div>
  <div>
  <img src="https://img.freepik.com/free-photo/3d-rendering-lu…abinet_105762-2280.jpg?semt=ais_hybrid&w=740&q=80"
    className="w-40 h-40 object-cover rounded"

  ></img>

  </div>
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
</div>
  

<div className="bg-white p-4 rounded-md mt-15">
    <h2 className="text-lg font-semibold">
      Up to 40% off| Smart storage,clutter-free living
  </h2>
<div className="grid grid-cols-6 gap-3 mt-10">
  <img src="https://m.media-amazon.com/images/I/91ULfAhzVQL._AC_UF894,1000_QL80_.jpg"
 className="w-55 h-55 object-cover rounded"></img>
<img src="https://www.peachymart.com/cdn/shop/products/H7bc5d4457cf643d7853e6e29df4e4b58p_500x500_crop_center.jpg?v=1643520473"
className="w-55 h-55 object-cover rounded"
></img>


<img src="https://www.islandroofingtt.com/wp-content/uploads/2023/10/5.jpg"
className="w-55 h-55 object-cover rounded"
></img>

<img src="https://m.media-amazon.com/images/I/61Q9yrt99LL.jpg"
className="w-55 h-55 object-cover rounded"
></img>
<img src="https://www.milton.in/cdn/shop/files/SZ_CLEAN_UP_12_4.jpg?v=1758526763"
className="w-55 h-55 object-cover rounded"
></img>
<img src="https://www.ferio.in/image/cache/catalog/bathroom/913/913-1100x1100.jpg.webp"
className="w-55 h-55 object-cover rounded"
></img>
</div>
</div>


<div className="bg-white p-4 flex align-center ">
<div className="bg-white p-4">
    <h2 className="text-lg font-semibold mb-3">
      Best Sellers in beauty
    </h2>
   <div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>
    <div>
    <img src="https://www.bbassets.com/media/uploads/p/l/40007012_3-godrej-no1-bathing-soap-sandal-turmeric.jpg" className="w-full h-[170px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://images-static.nykaa.com/media/catalog/product/9/4/940d7bc8901526401604_10.jpg?tr=w-500"  className="w-full h-[170px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://images-static.nykaa.com/media/catalog/product/7/c/7c8878dNYKBNDCTP0010_1b.jpg?tr=w-500"  className="w-full h-[170px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
    </div>
    <div>
    <img src="https://weherbal.in/cdn/shop/files/Kumkumadi-face-cream.webp?v=1761720924&width=2048
"  className="w-full h-[170px] object-cover rounded"></img>
    <p className="text-sm mt-1"></p>
   </div>
   </div>
   </div>


 <div className="bg-white p-4">
    <h2 className="text-lg font-semibold mb-3">
      Minimum 50% off | Men's clothing
    </h2>
   <div className='grid grid-cols-2  gap-[15px] flex-grow h-[260px]'>
    <div>
    <img src="https://m.media-amazon.com/images/I/51rEeqfhmAL._AC_UY1100_.jpg" className="w-40 max-h-[130px] object-cover rounded"></img>
    <p class="text-sm mt-1">T-shirts</p>
    </div>
    <div>
    <img src="https://static.cilory.com/793385-thickbox_default/nologo-navy-pure-cotton-polo-t-shirt.jpg"  className="w-40 h-[130px] object-cover rounded"></img>
    <p class="text-sm mt-1">Classic polos</p>
    </div>
    <div>
    <img src="https://levi.in/cdn/shop/files/A94900007_01_Elevated.jpg?v=1743418283"  className="w-40 h-[130px] object-cover rounded"></img>
    <p class="text-sm mt-1">Casual shirts</p>
    </div>
    <div>
    <img src="https://cottonfolk.in/cdn/shop/files/38.jpg?v=1746075637&width=800"  className="w-40 h-[130px] object-cover rounded"></img>
    <p class="text-sm mt-1">Jeans</p>

   </div>
   </div>
   </div>




  <div className="bg-white p-4">
  <h2 className='text-lg font-semibold mb-3'>
    Appliances for your home | Up to 55% off
  </h2>
  <div className='grid grid-cols-2  gap-[15px] flex-grow h-[60px]'>
<div>
<img src="https://5.imimg.com/data5/SELLER/Default/2025/9/545208338/SL/CN/GH/101515409/split-air-conditioners-500x500.jpeg"
className="w-40 h-[170px] object-cover rounded"
></img>
</div>
<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-MY7a-nZs5xMqt50y4iUJCHFBGqwg180JA&s"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
<div>
<img src="https://www.lg.com/content/dam/channel/wcms/in/images/microwave-ovens/mc2886brum_dbkqiln_eail_in_c/gallery/MC2886BRUM-Microwave-ovens-Right-Side-view-DZ-06.jpg"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
<div>
<img src="https://whirlpoolindia.vtexassets.com/arquivos/ids/167790/Xpert-care-Silver-lid-open-7kg_1500x1500.jpg?v=638731268018600000"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
</div>
</div>



  <div className="bg-white p-4">
  <h2 className='text-lg font-semibold mb-3'>
  Up to 55% off | Best selling furniture from stores nearby
  </h2>
  <div className='grid grid-cols-2  gap-[15px] flex-grow h-[60px]'>
<div>
<img src="https://cdn.media.amplience.net/i/boconcept/f06156a6-9cad-4fef-a487-ae6d00c83f51?w=3020&fmt=auto&upscale=false&sm=c&qlt=75&h=2265&%24auto-poi%24="
className="w-40 h-[170px] object-cover rounded"
></img>
</div>
<div>
<img src="https://cane-line.eu/cdn/shop/files/50804T_P144COB_3492.png?v=1755173957"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
<div>
<img src="https://cdn2.zohoecommerce.com/product-images/VROFS_A_0.jpg/473239000004621305/600x600?storefront_domain=www.vikinterio.com"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
<div>
<img src="https://woodentwist.com/cdn/shop/files/Wooden_Twist_AFR7989.png?v=1743298280"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
</div>
</div>
 </div> 



<div className="bg-white p-4 rounded-md mt-15">
    <h2 className="text-lg font-semibold">
    More items to consider
  </h2>
<div className="grid grid-cols-6 gap-3 mt-10">
<img src="https://m.media-amazon.com/images/I/71ouPdKwbCL._SX679_.jpg"
 className="w-full h-50 object-cover rounded"></img>
<img src="https://5.imimg.com/data5/GL/CV/RR/SELLER-89387230/sofa-cushion-500x500.jpg"
className="w-full h-50 object-cover rounded"
></img>


<img src="https://m.media-amazon.com/images/I/61Orte6JBIL._AC_UF894,1000_QL80_.jpg"
className="w-full h-50 object-cover rounded"
></img>

<img src="https://i.pinimg.com/736x/e1/4a/fc/e14afcd8e81119147d41fc18e14f36a1.jpg"
className="w-full h-50 object-cover rounded"
></img>
<img src="https://www.orderyourchoice.com/123990-medium_default/elephant-soft-toy.jpg"
className="w-full h-50 object-cover rounded"
></img>
<img src="https://i.ebayimg.com/images/g/67kAAOSwAxpnIkKv/s-l400.jpg"
className="w-full h-50 object-cover rounded"
></img>
</div>
</div>

<div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 mt-[20px] relative z-20">
  <div className="bg-white p-4 flex align-center flex-col">
    <div className='flex flex-col'>
    <h2 className="text-lg font-semibold mb-3">
Pick up where you left off

    </h2>
    <div className='flex justify-center'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLk0TSwCN8o4imm16WNWh7TQU_oznT5EJww&s" 
    className="w-42 h-50 object-cover rounded"

    ></img>
    </div>
    <p>EASY2HOME Magnifying Shaving Makeup Mirror | Stainless Steel| Makeup Mirror|Sh..</p>
    <h2>&#8377;1,999 </h2>
</div>
<div className='grid grid-cols-4 gap-3 mt-[15px]'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLk0TSwCN8o4imm16WNWh7TQU_oznT5EJww&s"
className="w-30 h-25 object-cover rounded"

></img>
<img src="https://www.aquieen.com/cdn/shop/files/BA-8471-RG-IMG1.jpg?v=1745519468"
className="w-30 h-25 object-cover rounded"
></img>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_zaQD2I2ovl48RU4T4SgiLX7VLd2Xrwskw&s"
className="w-30 h-25 object-cover rounded"
></img>
<img src="https://5.imimg.com/data5/ANDROID/Default/2024/1/374882528/KG/GO/VI/26482855/product-jpeg-500x500.jpg"
className="w-30 h-25 object-cover rounded"
></img>
</div>
</div>
  <div className="bg-white p-4 flex align-center flex-col">
    <div className='flex flex-col'>
    <h2 className="text-lg font-semibold mb-3">
      Featured in Kitchen
    </h2>
    <div className='flex justify-center'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkIqTceBv5PKX6RlLtDnH_arSREHLcfRu6A&s" 
    className="w-40 h-40 object-cover rounded"

    ></img>
    </div>
    <p>Airofy Airo Essential Portable Air Purifier with HEPA H13 Filter,Diffusee & aromathe....</p>
</div>

</div>

   <div className="bg-white p-4">
    <h2 className="text-lg font-semibold mb-3">
Best Sellers in Books

    </h2>
   <div className='grid grid-cols-2  gap-[15px] flex-grow h-[60px]'>
    <div>
    <img src="https://cms.buybooksindia.com/uploads/books/674ee5d89ef59.jpg" className="w-40 h-[170px] object-cover rounded"></img>
    </div>
    <div>
    <img src="https://images.meesho.com/images/products/473457038/onltr_512.webp?width=512"  className="w-40 h-[170px] object-cover rounded"></img>
    </div>
    <div>
    <img src="https://images.meesho.com/images/products/471674687/snvtd_512.webp?width=512"  className="w-40 h-[170px] object-cover rounded"></img>
    </div>
    <div>
    <img src="https://images.meesho.com/images/products/473455762/rmir2_512.webp?width=512"  className="w-40 h-[170px] object-cover rounded"></img>

   </div>
   </div>
   </div>
  <div className="bg-white p-4">
  <h2 className='text-lg font-semibold mb-3'>
    Up to 75% off | Top offers from Small Businesses

  </h2>
  <div className='grid grid-cols-2  gap-[15px] flex-grow h-[60px]'>
<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8E7Vnicb_6512wFgNgGpPhSfZZ1n4NJodrw&s"
className="w-40 h-[170px] object-cover rounded"
></img>
</div>
<div>
<img src="https://images.meesho.com/images/products/394692053/xv8tq_512.webp?width=512"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS48NTEINIEDVDbk7mDIrV-iCfILQWtjG1-Bg&s"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
<div>
<img src="https://thumbs.dreamstime.com/b/portrait-cheerful-smiling-young-man-folded-arms-joyful-handsome-men-crossed-hands-studio-shot-isolated-gray-195089624.jpg"
className="w-40 h-[170px] object-cover rounded"

></img>
</div>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-md mt-15">
    <h2 className="text-lg font-semibold">
      Up to 60% off | Best offers on kitchen products | Amazon Launchpad
  </h2>
<div className="grid grid-cols-6 gap-3 mt-10">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0T-VOoQdK0jTZGlKHCmi_plZOtzMJdt7hZA&s"
 className="w-55 h-55 object-cover rounded"></img>
<img src="https://5.imimg.com/data5/SELLER/Default/2022/6/LY/YA/VH/88425674/nutristar-lunch-box-tiffen-set-of-4-box-stainless-steel-traveling-tiffin-picnic-tiffin-box-set-500x500.jpg"
className="w-65 h-55 object-cover rounded"
></img>
<img src="https://www.jiomart.com/images/product/original/rvtkodwdk6/milton-stainless-steel-silver-legend-deluxe-4-insulated-tiffin-box-200-ml-product-images-orvtkodwdk6-p603501541-4-202410111457.jpg?im=Resize=(420,420)"
className="w-55 h-55 object-cover rounded"
></img>

<img src="https://rukminim2.flixcart.com/image/480/640/xif0q/kitchen-knife/s/a/3/3-bao-3-set-kitchen-knife-chaku-with-protective-cover-4-5-inch-original-imah3fd8rm58tgxh.jpeg?q=90"
className="w-55 h-55 object-cover rounded"
></img>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxLtOKDUz42CNUArEQqM-O-Kf8NJtCzcXpiA&s"
className="w-65 h-55 object-cover rounded"
></img>
<img src="https://vinodcookware.com/cdn/shop/files/VinodHardAnodisedDeepKadai_InductionFriendly_grande.jpg?v=1754127216"
className="w-55 h-55 object-cover rounded"
></img>
</div>
</div>




{/* div className='flex flex-col items-center justify-center'>
  <h1 className='text-center'>TG Furniture Sheesham Wood King Size Bed with...</h1>
<Rate/>
<Button/>
   <div className="flex items-baseline gap-1 mt-2">
  <span className="relative -top-3 text-sm">&#8377;</span>
  <span className="text-2xl font-medium leading-none">501</span>
  <span className="relative -top-3 text-sm">00</span>
  <span className="relative  text-m line-through ">&#8377;1,199.00</span>

</div>
<button className="bg-[#FFA41C] p-2 color-black w-24 rounded-full">
  Shop Now
</button> */}
















<Footer/>
</div>
  );
}

export default Home;






