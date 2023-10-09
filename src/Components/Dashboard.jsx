import Layout from '../Components/Layout/Layout'
import Stats from '../Components/Stats/Stats.jsx'
import { Route, Routes } from "react-router-dom";
import ExtraCard from '../Components/ExtraCard/ExtraCard'
import My from '../Components/My/My.jsx'

export default function Dashboard() {
    return (
    
        <Layout>
        <Routes>  
            <Route path="/stats" Component={Stats}/>
            <Route path="/cards" Component={ExtraCard}/>
        </Routes>
        </Layout>
      
    )
}