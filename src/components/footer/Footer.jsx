import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UserIcon,LinkIcon} from '@heroicons/react/outline'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.clogo}>
                <img src={Logo} alt="" />
                <span>ecommerce</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>contact</span>
                    <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}/>
                       <span>111 north avenue</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>account</span>
                    <span className={css.pngLine}>
                    <LoginIcon className={css.icon}/>
                       <span>Sign in</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                    <UserIcon className={css.icon}/>
                       <span>about us</span>
                    </span>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                    <LinkIcon className={css.icon}/>
                       <span>Safety Privacy & Terms</span>
                    </span>
                </div>
            </div>
            </div>

            <div className={css.copyRight}>
                <span>Copyright @2023 by ecommerce</span>
                <span> Rights Reserved</span>
            </div>
    </div>
  )
}

export default Footer