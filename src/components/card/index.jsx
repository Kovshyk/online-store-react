import React from "react";

export default class CardComponent extends React.Component{
    constructor(props) {
        super(props);
        this.render()
    }
    render (){
        return (<div className="product shadows">
            <div className="product-img"><img src="https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg" alt="photo-product"/></div>
            <div className="rating-price">
                <div className="rating"><p>2.89</p><i className="bi bi-star"></i></div>
                <p>15999</p>
            </div>
            <p>Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black</p>
            <p>laptops</p>
            <button className="button-add-to-cart" data-element="button-add-to-cart" onClick={()=> {this.props.onClick()}}>ADD TO CART</button>
        </div>)

    }}
