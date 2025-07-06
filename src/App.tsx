import React from 'react'
import Home from './pages/Home/Home'
import Layout from './Layout/Layout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App:React.FC = () => {
  return (
    <div>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* other routes */}
        </Routes>
      </Layout>
    </Router>
    </div>
  )
}

export default App  