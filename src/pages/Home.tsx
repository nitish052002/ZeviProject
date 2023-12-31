import React, { useState } from 'react'
import "./home.scss"
import Search from '../components/Search'
import SuggestionBox from '../components/SuggestionBox'

function Home() {

    const [active , setActive] = useState(false)
    
   // This function will display the filterbox when we will click on the search tab
    const displayFilterBox = () => {setActive(!active)}

    return (
        <div className="home">
            <Search displayFilterBox={displayFilterBox} />
            <SuggestionBox active={active}/>
        </div>
    )
}

export default Home