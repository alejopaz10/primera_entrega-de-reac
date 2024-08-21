
import{Icon} from'@iconify/react'
import pill from '../pill';

const CartWidget = ({quantity}) =>{
return(
<div className='cart-widget'>
    <pill quantity={2}/>
    <Icon className='cart-widget__cart' icon="flowbite:cart-outline" />   
</div>
);
};
export default CartWidget;