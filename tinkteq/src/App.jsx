import React, { lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/shared/Layout.jsx'
import Loading from './components/shared/Loading.jsx'
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const Booking = lazy(() => import('./pages/Booking.jsx'))
const Tracking = lazy(() => import('./pages/Tracking.jsx'))
const Settings = lazy(() => import('./pages/Settings.jsx'))
const App = () => {
 
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/booking" element={<Layout><Booking /></Layout>} />
          <Route path="/tracking" element={<Layout><Tracking /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App