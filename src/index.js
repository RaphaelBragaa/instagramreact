import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Mobile from "./components/Mobile";

function App(){

    return(
        <>
        <Navbar />
        <Body />
        <Mobile />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));