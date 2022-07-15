import React from "react";
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            cartCounter:undefined,
        }
        this.cartCounter=this.cartCounter.bind(this);
    }
cartCounter(){
        if (this.state.cartCounter===undefined){
            this.setState({cartCounter:1})
        }else{
        this.setState({cartCounter:this.state.cartCounter+1})
        }

}


render (){
    return (
       <div>
        <div className="header">
            <h1>Online Store</h1>
            <button className="cart-button" ><i className="bi bi-cart"></i> CART <span className="counter">{this.props.counter}</span></button>
        </div>
        <div className="button-low-width">
            <p className="site-name">Online Store</p>

            <button className="cart-button cart-button-low-screen"><i className="bi bi-cart"></i> CART</button>
            <div className="search-low-screen">
                <form ><input className=" shadows" placeholder="Search" type="text"></input> </form>
            </div>
            <div className="button-on"><i className="bi bi-filter-right"></i>
            </div>
            <div className="button-off"><i className="bi bi-x-lg"></i>
            </div>
        </div>
       </div>
)}
}
export default Header