import React from 'react'
import './ExploreCSS/Explore.css'
import { Outlet } from 'react-router-dom'
export default function Explore() {
  return (
    <div className="test">
      Explore PAGE HERE
      <Outlet/>
    </div>
  )
}
