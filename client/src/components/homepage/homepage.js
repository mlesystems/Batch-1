import React from "react"
import {NavBar} from "../NavBar"
import Header from "../Header"
import { Desc } from "../Desc"
import { Footer } from "../Footer"

import "./homepage.css"

function Homepage() {
    return (
        <>
            <NavBar/>
            <Header />
            <Desc />
            <Footer />
        </>
    )
}

export default Homepage