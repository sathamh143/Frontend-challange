import './App.css'
import Nav from './Shopping/Nav'
import Grid from './Dashboard/Grid'
import Sidebar from './Trecking/Sidebar'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


function App() {
 
  return (
      <>
            <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Dashboard
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            SHOPPING 
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/time" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                           Travel
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Grid />} />
                    <Route exact path="/about" element={<Nav />} /> 
                    <Route exact path="/time" element={<Sidebar />} />
                </Routes>
            </BrowserRouter>
        </>
  )
}

export default App
