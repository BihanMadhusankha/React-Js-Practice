import  { useState } from 'react';

import Banner from "./Banner";
import Slide from "./components/Slide";
import { } from "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";

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


  return (
    <div className="App  text-lg-center ">
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

    </div>
    
  );

}

export default App