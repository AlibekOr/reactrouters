import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ items, addItem, removeItem }) => {
    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addItem({ id: 1, name: 'Item 1', price: 10 })}>Add Item</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);