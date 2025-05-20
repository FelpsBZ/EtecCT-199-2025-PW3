
import React, { useEffect, useState } from 'react';
import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'

import styles from './Card.module.css'

function Card() {

  const [d1, setD1] = useState('')
  const [d2, setD2] = useState('')



  const [v1, setV1] = useState(false)
  const [v2, setV2] = useState(true)
    
  const addD2 = (text)=>{


    if(text === "."){
      let b = ""+d2;
        if(b.includes('.')){

        }else{
          setD2(d2+text)
        }
        
      
    }else{
      if(v1){
        setD2(parseFloat(text))
        setV1(false)
        setV2(true)
        if(v2){
          setD1(d1+" "+text)
          setV2(false)
        }
        
        
      }else{
  
        if(v2){
          setD2(parseFloat(d2+text))
        }else{
          setD2(parseFloat(d2+text))
          setD1(d1+text)
        }
      }
    }



    
  }

  const addD1 = (text)=>{
      if(!v1){
        if(v2){
          setD1(d2+" "+text)
          setV1(true)
        }
      }
      
    
    
  }

  const clear = () =>{
    setD2('')
    setD1('')
    setV1(false)
    setV2(true)
  }

  const deleteLast = () => {
    var b1 = "" + d1;
    var b2 = "" + d2;
    let c1, c2;
  
    
    if (b1[b1.length - 2] === " ") {
      c1 = b1.slice(0, -2);
    } else {
      c1 = b1.slice(0, -1);
    }
  
    c2 = b2.slice(0, -1);
  
    setD1(c1);
    setD2(c2);
  };
  

  const invertValue = ()=>{
    
      let a = parseFloat(d2);
      a *= -1
      setD2(a ? a: '')
    
    if(d1.length>0){
    let c = d1.split(" ");
      c[2] *= -1;
      let d = '';
      for(let i = 0; i < c.length; i++){
        if(i == 2){
          d += c[i]
        }else{
          d += c[i]+" "
        }
        
      }
      setD1(d)
    }
  }

  const toDivide100 = ()=>{
    
    
    
      let a = parseFloat(d2);
      a /= 100;
      setD2(a ? a: '')
    

    if(d1.length > 0){
      let c = d1.split(" ");
      c[2] /= 100;
      let d = '';
      for(let i = 0; i < c.length; i++){
        if(i == 2){
          d += c[i]
        }else{
          d += c[i]+" "
        }
        
      }
      setD1(d)
    }
  }


  

  const with3 = () => {
    let a = d1.split(" ");
    let expressao = "";
    if(a[1] == "X"){
      expressao = `${a[0]} * ${a[2]}`
    }else{
      expressao = d1;
    }

    
    return (eval(expressao));

    
    
  };
  const with2 = () => {
  let a = d1.split(" ");
  let expressao = "";
  if(a[1] == "X"){
    expressao = `${a[0]} * ${a[0]}`
  }else{
    expressao = `${a[0]} ${a[1]} ${a[0]}`;
  }

  
  return eval(expressao);
  };


  const pullCalc = async (expressao) => {
    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ expressao })
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Erro ao puxar cálculo:', error);
    }
};





  const Calcular = ()=>{
    
    pullCalc(d1)
    try {
      if(d1.split(' ').length == 3){
        setD2(parseFloat(with3().toFixed(5)))
        setD1('')
      }else if(d1.split(' ').length == 1){
        
      }else{
        setD2(parseFloat(with2().toFixed(5)))
        setD1('')
      }
    } catch (error) {
      setD2(parseFloat(with2().toFixed(5)))
      setD1('')
    }

    setV1(false)
    setV2(true)
    
  }


  

  const calc = (text) =>{
    if(text !== "C" && text !== "±" &&  text !== "%" && text !== "/" && text !== "X" &&  text !== "-" && text !== "+" &&  text !== "=" && text !== "←"){
      addD2(text);
    }
    if(text === "C"){
      clear();
    }else if(text === "←"){
      deleteLast();
    }
    else if(text === "±"){
      invertValue();
    }else if(text === "%"){
      toDivide100();
    }


    if(text === "/"){
      addD1(text);
    }else if(text === "X"){
      addD1(text);
    }else if(text === "-"){
      addD1(text);
    }else if(text === "+"){
      addD1(text);
    }else if(text === "="){
      Calcular();
    }
  }

  return (
    <>
      <div className={styles.card}>
          <Display d1={d1} d2={d2}></Display>
          <Keyboard calc={calc}></Keyboard>
      </div>
    </>
  );
}

export default Card;