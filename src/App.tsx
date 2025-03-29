import { Route, Routes } from "react-router-dom"
import Allrender from "./Allrender"
import Mainbase from "./base-map/Mainbase"
import MovementsPage from "./base-map/componentbase/DeviceMovements"
import NetworkGraph from "./base-map/componentbase/NetworkGraph"
import NetworkBandwidthDashboard from "./base-map/componentbase/BandwidthCHarting"
import General from "./base-map/componentbase/General"

const App = () => {
  return (
    <div className='p-0 '>
      <Routes>
<Route path="/" element={<Allrender/>}/>
<Route path="/main" element={<Mainbase/>}/>
<Route path="/movement" element={<MovementsPage/>}/>
<Route path="/bandwidth" element={<NetworkBandwidthDashboard/>}/>
<Route path="/general" element={<General/>}/>
      </Routes>
   
    </div>
  )
}

export default App
