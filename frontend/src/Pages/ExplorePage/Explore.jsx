import React from 'react'
import './ExploreCSS/Explore.css'
import { Outlet } from 'react-router-dom'
import Nav from '../../Components/Nav/Nav'
export default function Explore() {
  return (
    <div className="test">
      <Nav/>
      Explore PAGE HERE
      <Outlet/>
    </div>
  )
}
