import React from 'react';
import  { Wrapper } from './Item.style';
import Button from '@material-ui/core/Button';
import { CartItemType } from '../Types/Types';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item : React.FunctionComponent<Props> = ({ item,  handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </ Wrapper>
);

export default Item;