import Layout from '../Components/Layout/Layout'
import Stats from '../Components/Stats/Stats.jsx'
import { Route, Routes } from "react-router-dom";
import ExtraCard from '../Components/ExtraCard/ExtraCard'
import My from '../Components/My/My.jsx'
import History from '../Components/History/History.jsx'
import Banner from '../Components/Banner/Banner.jsx'

export default function Dashboard() {
    return (
    
        <Layout>
        <Routes>  
            <Route path="/home" Component={Banner}/>
            <Route path="/cards" Component={Stats}/>
         
        </Routes>
        </Layout>
      
    )
}