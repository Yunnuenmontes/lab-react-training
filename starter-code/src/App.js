import React, { Component } from 'react';
import IdCard from './components/idcard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor.js';
import CreditCard from './components/CreditCard.js';
import Rating from './components/Rating.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992/07/14").toDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1993/05/11").toDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />



        <h1>Greetings</h1>
          <Greetings lang="es">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
          <Greetings lang="en">John</Greetings>


          <h1>Random</h1>
            <Random min={1} max={6}/>
            <Random min={1} max={100}/>

          <h1>BoxColor</h1>
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
            <div class="flex">
              <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white" />
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222" />
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white" />
          </div>

              <h1>Rating</h1>
                <Rating>0</Rating>
                <Rating>1.49</Rating>
                <Rating>1.5</Rating>
                <Rating>3</Rating>
                <Rating>4</Rating>
                <Rating>5</Rating>
      </div>


    );
  }
}

export default App;
