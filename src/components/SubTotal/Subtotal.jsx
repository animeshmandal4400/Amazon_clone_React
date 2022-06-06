import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from '../redux/StateProvider';
import {getBasketTotal} from '../redux/reducer';

function Subtotal() {
  const [{ basket }, ] = useStateValue();
  return (
    <div className='subtotal'>
  <CurrencyFormat
    renderText={(value) =>(
      <>
        <p>
          Subtotal ({basket?.length} items): <strong>{value}</strong>
        </p>
            <small className="subtotal_gift">
                <input type="checkbox"/> 
                  This order contains a gift
            </small>
      </>
     )}
        decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"₹"}
    />
    <button>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal