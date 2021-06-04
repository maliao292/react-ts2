import React from "react";
// import robots from "./mockdata/robots.json";
// import Robot from "./components/Robot";
import MyHook from "./components/MyHook/MyHook";
import ShoppingCart from "./components/ShoppingCart";
import style from "../src/static/css/style.module.css";
interface State {
  robotGallery: any[];
}
interface Props {}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
    };
   }
   static getDerivedStateFromProps(){
     return null
   }
   componentDidMount(){
     fetch('http://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then(data=>{
       this.setState({
        robotGallery:data
       })
     })
   } 
  render() {
    let {robotGallery} = this.state
    return (
      <div className={style.app}>
        {/* <h1>狂拽炫酷的字体</h1> */}
        {/* <ShoppingCart></ShoppingCart> */}
        {/* <div className={style.robotList}>
          {robotGallery.map(({ id, name, email }) => {
            return <Robot id={id} name={name} email={email} key={id}></Robot>;
          })}
        </div> */}
        <MyHook name={'123'}></MyHook>
      </div>
    );
  }
}

export default App;
