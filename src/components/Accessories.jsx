import React, { useState } from 'react'
import "./ishop.css"
import {Link} from "react-router-dom"
import iphone8 from "../assests/iphone_8.png"
import { APIData } from './Data'
import {useCart} from "react-use-cart"

const Accessories = () => {

    const [ApiData] = useState(APIData);
    const { addItem }= useCart();
    console.log(ApiData);
  return (
    <div className='container'>
        <div>
       <div className='first'>
         <span className='first-heading'>Accessories</span><br/><br/>
         {/* <span className='first-list'>AppleCar <br/><br/>Cables & Docks<br/><br/>Cases 7 Films<br/><br/>Charging Devices<br/><br/>Connected home<br/><br/>Headphones</span> */}
         <Link to="#"className='first-list'>AppleCar</Link><br/><br/>
         <Link to="#"className='first-list'>Air port & Wireless</Link><br/><br/>
         <Link to="#"className='first-list'>Cables & Docs</Link><br/><br/>
         <Link to="#"className='first-list'>Cases & Films</Link><br/><br/>
         <Link to="#"className='first-list'>Charging Devices</Link><br/><br/>
         <Link to="#"className='first-list'>Connected Home</Link> <br /><br />
         <Link to="#"className='first-list'>Headphones</Link>

       </div>
       <div className='second'>
        <span className='second-heading'>Price</span><br/><br/>
        <span className='range'>Ranger</span>
        <span className='cost'>$13.99-$25.99</span>
        {/* <label for="customRange1" class="form-label">Example range</label> */}
        <input type="range" class="form-range" id="customRange1"style={{marginTop:"30px"}}></input>
       </div>
       <div className='third'>
         <span className='third-heading'>Colors</span><br/><br/>
         <span className='colors' style={{backgroundColor:"blue" , color: 'blue'}}>Red</span>
         <span className='colors' style={{backgroundColor:"red" ,color: 'Red'}}>Red</span>
         <span className='colors' style={{backgroundColor:"black",color: 'Black'}}>Red</span>
         <span className='colors'style={{backgroundColor:"yellow",color: 'Yellow'}}>Red</span>
         <span className='colors'style={{backgroundColor:"pink",color: 'Pink'}}>Red</span>
       </div>
       <div className='four'>
        <span className='third-heading'>Brand</span><br/><br/>
       <Link to="#"className='first-list'>Apple</Link><br/><br/>
         <Link to="#"className='first-list'>LG</Link><br/><br/>
         <Link to="#"className='first-list'>SamSung</Link><br/><br/>
         <Link to="#"className='first-list'>Siemens</Link><br/><br/>
       </div>
       </div>
       <div className='right'>
        <div className='header1'></div>
          <span className='iphone'>iPhone 8</span><br/><br/>
          <span className='content'>Performance and design. Taken right to the edge.</span><br/><br/>
          <Link to="#"><span className='shop'>SHOP NOW</span></Link>
          <img src={iphone8} alt="iphone-8"className='iphone_img'/>
       </div>
       <div className='products'>
        {
            ApiData.map(item=>{
                return(
                <div className='productdiv' onClick={()=>{addItem(item)}}>
                    <img src={item.img} alt="cover" className='product-img'></img><br/><br/>
                    <span>{item.name}</span><br/>
                    <span className='product-cost'>$499 <del style={{color:"red"}}>$599</del></span><br/><br/>
                    <button className='cart-btn' onClick={()=>{addItem(item)}}>Purchase</button>
                </div>
                )
            })
        }
       </div>
    </div>
  )
}

export default Accessories