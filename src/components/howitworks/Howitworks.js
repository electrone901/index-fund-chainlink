import React from 'react'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import './Howitworks.css'
function Howitworks(props) {
  return (
    <div>
      <img src={img1} alt="img1" className="works-img" />
      <img src={img2} alt="img1" className="works-img" />
      <img src={img3} alt="img1" className="works-img" />
      <img src={img4} alt="img1" className="works-img" />
      <img src={img5} alt="img1" className="works-img" />
    </div>
  )
}

export default Howitworks
