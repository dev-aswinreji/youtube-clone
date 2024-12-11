import React from "react"
import './Home.css'
import Sidebar from "../../components/Sidebar/Sidebar.jsx"

function Home({sidebar}){
    return (
        <>
        <Sidebar sidebar={sidebar}/>
        </>
    )
}

export default Home