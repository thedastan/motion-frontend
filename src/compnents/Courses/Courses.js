import React from "react";
import Header from "./Header/header";
import Hero from "./Hero/hero";
import Catalog from "./About/Catalog";
import Form from "./Form/form";
import Footer from "./Footer/footer";
import './media.css'


const Courses = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <Catalog />
            <Form />
            <Footer />
        </div>
    );
}
export default Courses