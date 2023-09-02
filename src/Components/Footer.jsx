import React from 'react'
import footer from '../img/footer.svg'
import footerMobile from '../img/footerMobile.svg'

const Footer = () => {
    let screen=window.screen.width;
  return (
    <div className='relative'>
        <img src={screen<=680?footerMobile:footer}/>
    </div>
  )
}

export default Footer