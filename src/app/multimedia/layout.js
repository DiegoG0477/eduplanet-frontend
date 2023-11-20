"use client"
import Footer from '@/components/organisms/Footer'
import Nav from '@/components/organisms/Nav'
function layoutVideos({children}) {
  return (
    <>
    <Nav/>
    {children}
    <Footer/>
    </>
  )
}

export default layoutVideos