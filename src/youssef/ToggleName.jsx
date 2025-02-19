import {Component} from "react";
import HelloWorld from "./HelloWorld";
export default class ToggleName extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayName : true
            }

    }
    ToggleName=()=>{
       this.setState(prevState => {
        return {displayName :!prevState.displayName}
       }        
        )
    }
    render(){
        return <div>
            
            <button onClick={this.ToggleName} >{this.state.displayName.toString()}</button>

            {this.state.displayName === true ?
            <HelloWorld lastName={'Amzil'}></HelloWorld>
            :
            undefined
        }
            
            
        </div>
    }
}