import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

//to rendor component
ReactDOM.render(<App/>, document.getElementById('root'));

// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     //speak is method
//     speak(){
//         console.log('I am', this.name, 'and I am',this.age, 'years old');
//     } 
// }

// //aminal1 is like object
// const animal1 = new Animal('Simba', 3);
// animal1.speak() ;

// console.log(animal1);

// class Lion extends Animal{
//     constructor(name,age,furColor,speed){
//         super(name,age);
//         this.furColor=furColor;
//         this.speed=speed;
//     }

//     roar(){
//         console.log(
//             'ROOOOAR! I have',
//             this.furColor,
//             'fur, and I can run',
//             this.speed,
//             'miles an hour'
//         );
//     }
// }

// const lion1 = new Lion('Mufasa', 20, 'golden',20);
// lion1.speak();
// lion1.roar();
// console.log(lion1);