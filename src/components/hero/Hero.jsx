import React from 'react'
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition ={duration:3, type:"spring"}
  return (
    <div className={css.container}>
        {/*left side*/}
        <div className={css.h_sides}>
            <span className={css.text1}>Skin Protection Cream</span>
            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Seedily say has suitable disposal and boy</span>
            </div>            
        </div>

        {/*Middle side-contains hero image*/}
        <div className={css.wrapper}>
           <motion.div
           initial={{bottom: "2rem"}}
           whileInView={{botton:"0rem"}}
           className={css.blueCircle}
            transition={transition}>
            </motion.div> 
           <img src={HeroImg} alt='heroimg' width ={600}/>
           <div className={css.cart2}>
            <RiShoppingBagFill/>
            <div className={css.signup}>
                <span>Best Signup Offers</span>
                <BsArrowRight/>
            </div>
           </div>
        </div>

                {/*Right side*/}

        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy Customers</span>
            </div>
        </div>


    </div>
  )
}

export default Hero;