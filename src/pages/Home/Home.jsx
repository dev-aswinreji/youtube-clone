import React from "react"
import './Home.css'
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import Feed from "../../components/Feed/Feed.jsx"

function Home({ sidebar }) {
    return (
        <>
            <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar ? "" : "large-container"}`}>
                <Feed/>
            </div>
        </>
    )
}

export default Home