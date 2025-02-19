// export default function HelloWorld(props){
//     console.log(props)
//     return(<h1>hello world {props .lastname}</h1>)
// }

// import {Component} from "react";

// export default class HelloWorld extends  Component {
//     age = 15
//     clickbody =()=>{
//         alert('body clicked !')
//     }
//     componentDidMount(){
//         console.log('component mounted')
//         document.addEventListener('click', this.clickbody)
//     }   
//     componentDidUpdate(){
//         console.log('component updated')
//     }  
//     componentWillUnmount(){
//         console.log('component is dead')
//         document.addEventListener('click', this.clickbody)
//     }

//     render() {
//         return <h1>hello {this.props.lastName} {this.age>18 ? 'Adult' : 'Mineur'}</h1>;
//     }
// }
import { Component } from "react";

export default class HelloWorld extends Component {
    age = 19;
    // timer = null ;
    state = {
        timer: 0 // Initialisez l'état pour stocker la valeur du timer
      };
    // Méthode fléchée pour conserver 'this' dans le bon contexte
    clickbody = () => {
        alert('body clicked !');
    };

    // Méthode appelée après que le composant soit monté
    componentDidMount() {
        console.log('component mounted');
    //     document.addEventListener('click', this.clickbody);
    //     this.timer = setInterval(() => {
    //         console.log('tick');
    // },1000)
    this.timer = setInterval(() => {
        this.setState(prevState => ({ timer: prevState.timer + 1 }))
      }, 1000);
    
    }
    // Méthode appelée après que le composant a été mis à jour
    componentDidUpdate() {
        console.log('component updated');
    }

    // Méthode appelée juste avant le démontage du composant
    componentWillUnmount() {
        console.log('component is dead');
        // Utilisation de removeEventListener pour enlever l'écouteur
        document.removeEventListener('click', this.clickbody);
        // Arrêter le timer lorsque le composant est démonté
        clearInterval(this.timer);
    }

    render() {
        return (
            
            <h1>
                <p>Timer: {this.state.timer} seconds</p> {/* Affichage du timer */}
                hello {this.props.lastName} {this.age > 18 ? 'Adult' : 'Mineur'}
            </h1>
        );
    }
}
