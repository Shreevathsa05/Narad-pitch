import React from 'react'
import Dashboard from '../Components/Dashboard'

function Analytics() {
  return (
    <div className="p-6">

      {/* Dashboard Component */}
      <Dashboard />

      {/* Page Description */}
      <p className="mb-6 text-gray-600 border-2 border-black rounded-lg p-2">
        Explore this demo analytics dashboard, designed to showcase key metrics
        and provide a foundation for prototyping and experimentation.
      </p>
    </div>
  )
}

export default Analytics
