import React from "react";
import Input from "./Input";
import Weather  from "./Weather";
import Footer from "./Footer";
const MainContainer = () => {

    return (

        <div className="main-container">
            <Input />
            <Weather />
            <Footer />
        </div>

    )
}


export default MainContainer;