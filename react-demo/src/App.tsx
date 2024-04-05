 import  { useEffect,useState } from 'react';

import Banner from "./Banner";
import Slide from "./components/Slide";
import { } from "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";
import Nav from './components/Nav';
import Home from "./components/Home";
import Lecture from "./components/Lecture";
import AOS from 'aos';
import 'aos/dist/aos.js';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Registation from './components/registation';
import Registration from './components/Registration';

function AppendIcetSuffix(username: string) {
  return username + " ICET";
}



function App() {
  const username = "Bihan";
  const [content,setContent]=useState("Select your Course for More details")
  const [languageName] = useState('Java');


  function buyCourseClickEvent(){
    setContent(`You selected ${languageName}`);
}



useEffect(()=>{
  AOS.init({
    duration: 3000,
    easing: 'ease-in-out-sine',
    once: true,
    mirror: false,
    delay: 100,
    offset: 100,
    
  });
}, []);


  return (
    <div className="App  text-lg-center ">
      <Nav />
      <Home />
     
      <Lecture />
      <Banner />
      <h1 className="">Hello {AppendIcetSuffix(username)}</h1>
      <Slide title="bread">Good bread</Slide>
      <Slide title="Bun">Good Bun</Slide>

      <div className="container">
        <div className=" d-flex justify-content-center">
          
          <Card languageName="Java" description="Java is Good" buyCourseClickEvent={buyCourseClickEvent}>System.out.println("HI")</Card>
          <Card languageName="JS" description="JS is Good" buyCourseClickEvent={buyCourseClickEvent}>console.log("HI")</Card>

        </div>

        <div className=" d-flex justify-content-center">
          <p>{content}</p>
        </div>
        
      </div>

      <div className="container">
        <div className="row">
          <Header/>
        </div>

        <div className="row">
          <Registation/>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Registration/>
        </div>
      </div>

    </div>
    
  );

}

export default App