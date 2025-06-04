import './Brands.css'
import Dell_Brand from '../../assets/images/DELL-Footer-Logos-for-website.webp'
import Nvidia_Brand from '../../assets/images/nvidia-Footer-Logos-for-website.webp'
import Logitech_Brand from '../../assets/images/Logitech-Footer-Logos-for-website.webp'
import LG_Brand from '../../assets/images/LG-Footer-Logos-for-website.webp'
import Hp_Brand from '../../assets/images/HP-Footer-Logos-for-website-.webp'

const Brands = () => {
  return (
    <div className='brands'>
       <div className="brand-icon">
        <img src={Dell_Brand} alt="DELL-Footer-Logos-for-website.webp" />
       </div>
       <div className="brand-icon">
        <img src={Nvidia_Brand} alt="nvidia-Footer-Logos-for-website.webp" />
       </div>
       <div className="brand-icon">
        <img src={LG_Brand} alt="LG-Footer-Logos-for-website.webp" />
       </div>
       <div className="brand-icon">
        <img src={Logitech_Brand} alt="Logitech-Logos-for-website.webp" />
       </div>
       <div className="brand-icon">
        <img src={Hp_Brand} alt="HP-Logos-for-website.webp" />
       </div>
    </div>
  )
}

export default Brands