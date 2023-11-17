import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className='descriptionbox-navigator'>
                <div className='descriptionbox-nav-box'>Description</div>
                <div className='descriptionbox-nav-box fade'>Reviews</div>
            </div>

                <div className='descriptionbox-description'>
                    <p>An e-commerce website is an online plataform that facilitate buying and selling of products</p>

                    <p>
                        E-commerce websites typicall display products or services 
                    </p>
                </div> 
        </div>    
    )
}

export default DescriptionBox