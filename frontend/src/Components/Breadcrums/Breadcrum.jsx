
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {

    const {product} = props;

    return (
        
        <div className="breadcrum">
            
            Home <img src={arrow_icon} alt=''></img>Shop<img src={arrow_icon} alt=''></img>{product.category} <img src={arrow_icon} alt=''></img>{product.name}
        </div>
      
        
    )
}

export default Breadcrum;