import { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import axios from 'axios';

const CartItems = () => {




    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    var totalProducts = {
        nome : "Yuri",
        id: 7,
        price: 85.5

    }
    //var jsonString = JSON.stringify(totalProducts);

    function checkout() {
        fetch('http://localhost:8080/produtos/list1', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Acess-Control-Allow-Origin': 'http://localhost:5173',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                totalProducts
            )
        })
            .then(response => {
                if(response.status === 200){
                    return response.json();
                } else {
                throw Error('erro!!');
                }
            })
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/produtos/list1',
        //     data: totalProducts,
        //   });
    }

    return (
        <div className="cartitems">
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr /> 
            {all_product.map((e)=>{
                if(cartItems[e.id]>0) 
                     {   
                        //{totalProducts.name = e.name}
                      //  {totalProducts.id = e.id}
                      //  {totalProducts.price = e.new_price}
                    

                        return <div>                   
                                 <div className='cartitems-format           cartitems-format-main'>
                                    <img src={e.image} alt='' className='carticon-product-icon'/>
                                    <p>{e.name}</p>
                                    <p>{e.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>${e.new_price*cartItems[e.id]}</p>
                                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='' />
                                </div>
        
                        <hr />
                    </div>
                }

                
                return null;
            })}
            
            {console.log(totalProducts)}
            

            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>

                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={checkout()}>proceed to checkout</button>
                </div>

                <div className='cartitems-promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

            {console.log(JSON.stringify(totalProducts))}

            

        </div>
    
    //{jsonString = JSON.stringify(totalProducts)}
     
    )

            
}

export default CartItems;