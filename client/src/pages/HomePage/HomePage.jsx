import React from "react";
import { Route, Routes } from "react-router-dom";
import "./HomePage.scss";
//shared components
import Header from "./shared/Header";
import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";
//routed components
import Home from "./components/Home/Home";
import FindACar from "./components/Find a Car/FindACar";
//chatbot script
import "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";


const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-car" element={<FindACar />} />
      </Routes>
      <div className="HomePage__BotContainer">
        <df-messenger
          intent="WELCOME"
          chat-title="Carvis"
          agent-id="ad3b4099-d2f1-4e1f-bc80-a21f8cee15bb"
          language-code="en"
          chat-icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YFaAFVWcXjI43KYoa-Bp48J3lR8n1zvaaw&usqp=CAU"
        ></df-messenger>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
//"https://i.pinimg.com/originals/ef/03/c9/ef03c9fde1ca302311dceed7c277be58.jpg"
