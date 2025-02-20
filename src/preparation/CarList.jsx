// import React from "react";
// const cars = [
//     { id: 1, name: "Toyota", model: "Corolla", color: "White", price: 20000, year: 2020 },
//     { id: 2, name: "Honda", model: "Civic", color: "Black", price: 22000, year: 2021 },
//     { id: 3, name: "Ford", model: "Focus", color: "Blue", price: 21000, year: 2019 },
//     { id: 4, name: "BMW", model: "X5", color: "Silver", price: 45000, year: 2022 },
//     { id: 5, name: "Mercedes", model: "C-Class", color: "Gray", price: 40000, year: 2021 },
//     { id: 6, name: "Audi", model: "A4", color: "Red", price: 39000, year: 2022 },
// ];

// function Car({id,name,model,color,price,year}){
//     return <li className="nav-item">
//         <a className="nav-link text-secondary" href="#">{name}</a>
//     </li>
// }
// export default function CarList(){
//     const displayCars=()=>{
//         return cars.map(car => {
//             const {id,name,model,color,price,year} =car ;
//             return <Car key={id} id={id} name={name} model={model} />
//         });

//     };
//     return(
//         <div>
//             <nav className="navbar navbar-expend-sm navbar-light bg-light">
//                 <ul className="nav navbar">
//                     {displayCars()}
//                 </ul>
                
//             </nav>
//         </div>
//     )
// }
import React, {useState} from 'react';

let cars = [
    {
        "brand": "Mercedes-Benz",
        "model": "Citan",
        "body": "van",
        "color": "red",
        "price": "10000$",
        "year": 2010
    },
    {
        "brand": "Lexus",
        "model": "GX",
        "body": "4WD",
        "color": "black",
        "price": "50000$",
        "year": 2020
    },
    {
        "brand": "Toyota",
        "model": "RAV4",
        "body": "crossover",
        "color": "gray",
        "price": "15000$",
        "year": 2015
    },
    {
        "brand": "Hyundai",
        "model": "Grand i10 Nios",
        "body": "hatchback",
        "color": "yellow",
        "price": "30000$",
        "year": 2018
    },
    {
        "brand": "Honda",
        "model": "Civic",
        "body": "sedan",
        "color": "blue",
        "price": "25000$",
        "year": 2010
    }
]
function Car({brand, model, body, color, price, year}) {
    return <tr>
        <td>{brand}</td>
        <td>{model}</td>
        <td>{body}</td>
        <td>{color}</td>
        <td>{price}</td>
        <td>{year}</td>
    </tr>
}

export default function CarList() {
    const [isLoggedIn,setIsLoggedIn] = useState(true)
    const displayCars = () => {

        return cars.map((car,key) => {
            console.log(key)
            const {brand, model, body, color, price, year} = car
            return <Car brand={brand} year={year} body={body} color={color} model={model} price={price} key={key}/>
        })
    }

    /*
    * if (cars.length>0) {
        return <table className="table">
            <thead>
            <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Car body</th>
                <th>Color</th>
                <th>Price</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
            {displayCars()}
            </tbody>
        </table>
    }else {
        return <h2>Empty car list</h2>
    }
    * */
    return (
        <div>
            { (isLoggedIn && cars.length > 0) ?
                <table className="table">
                    <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Car body</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayCars()}
                    </tbody>
                </table>
                :
                <h2><a className={'btn btn-primary'} href="#">Connexion</a></h2>

            }

            {/* cars.length > 0 &&
                <table className="table">
                    <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Car body</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayCars()}
                    </tbody>
                </table>
            */}

        </div>
    );
}