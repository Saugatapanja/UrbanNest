import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews(120)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the buting and selling of products or services over the internate. It serves as a virtual marketplace where business and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical E-commerce websites hovaegained immense popularity dut to
          their convenience, accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically displays products or services along with detailed descriptions, images, prices and any available variations (e.g. sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
