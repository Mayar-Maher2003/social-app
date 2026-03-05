import React from 'react'
import Nav from '../../components/layout/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../../components/layout/footer/Footer';

export default function MainLayout() {
  return (
    <>
    <Nav/>
    <Outlet/>
{/* <Footer/>       */}
    </>
  )
}
