import React , { useState }from 'react'
import { APIData } from './Data'
import "./ishop.css"
import iphone8 from "../assests/iphone_8.png"
import {useCart} from "react-use-cart"

const Home = () => {
    const [ApiData] = useState(APIData);
    const { addItem }= useCart();
    console.log(addItem);
    console.log(ApiData);
  return (
    <div className='container'>
        <div className='header' style={{marginLeft:"230px" ,backgroundColor:"pink"}}></div>
          <img src={iphone8} alt="iphone-8"className='iphone_img , iphone-img-home'/>
        <div className='home-product'>
           <span className='best-sel'>BEST SELLER</span><br/>
           <div className='product-home'>
        {
            ApiData.filter(item=>item.id<=6).map(item=>{
                return(
                <div className='productdiv'>
                    <lable className="home-lable">HOT</lable>
                    <img src={item.img} alt="cover" className='product-img-home'></img><br/><br/>
                    <span className='product-name'>{item.name}</span><br/>
                    <span className='product-cost'>$499 <del style={{color:"red"}}>$599</del></span><br/><br/>
                    <button className='cart-btn' onClick={()=>{addItem(item)}}>Purchase</button>
                </div>
                )
            })
        }
        </div>
        </div>
    </div>
  )
}

export default Home