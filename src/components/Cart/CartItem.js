import React from 'react';
import { FaTrash } from "react-icons/fa";

function CartItem({item,value}) {
    const{id,title,img,price,total,count} = item;
    const{increment,decrement,removeItem} = value;
    return (
        <div className="row text-capitalize justify-content-center text-center mb-3">
            <div className="col-10 col-lg-2 mb-2">
                <img src={img} style={{width:"100px",height:"100px"}} className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 col-lg-2 text-capitalize mb-2">
                <span className="d-lg-none"> product : </span>
                {title}
            </div>
            <div className="col-10 col-lg-2 text-capitalize mb-2">
                <span className="d-lg-none"> price : </span>
                {price}
            </div>
            <div className="col-10 col-lg-2 text-capitalize mb-2">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-quantity mx-1" onClick={()=>decrement(id)}> - </span>
                        <span className="btn btn-quantity mx-1">{count}</span>
                        <span className="btn btn-quantity mx-1" onClick={()=>increment(id)}> + </span>
                    </div>
                </div>
            </div>
            <div className="col-10 col-lg-2 text-capitalize mb-2 d-flex justify-content-center">
                <div className="cartIcon" onClick={() => removeItem(id)}>
                    <FaTrash />
                </div>
            </div>
            <div className="col-10 col-lg-2 text-capitalize mb-2">
                <strong>item total : ${total}</strong>
            </div>
        </div>
    )
}

export default CartItem
