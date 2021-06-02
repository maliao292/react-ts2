import React, { Component } from "react";
import style from "./index.module.css";
import { FiShoppingCart } from 'react-icons/fi'
export interface Props {}

export interface State {
  isOpen: boolean;
}

class ShoppingCart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isOpen: false };
  }
  
  handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if((e.target as HTMLElement).nodeName === 'SPAN'){
      this.setState({ isOpen: !this.state.isOpen });

    }
  };
  render() {
    return (
      <div className={style.cartContainer}>
        <button className={style.button} onClick={this.handleClick}>
          <FiShoppingCart></FiShoppingCart>
          <span>购物车 2 （件）</span>
        </button> 
        <div style={{ display: this.state.isOpen ? "block" : "none" }}>
          <ul>
            <li>robot1</li>
            <li>robot2</li>
          </ul> 
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
