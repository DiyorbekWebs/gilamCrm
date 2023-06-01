import React from 'react'
import Offer from '../../components/Offer'
import Slide from '../../components/Slider/Slide'
import Cost from '../../components/Cost'
import Cards from '../../components/Cards'
import About from '../../components/About/About'
import ContectH from '../../components/ContactH'

export default function Home() {
  return (
    <div>
      <Slide />
      <Cost/>
      <Cards/>
      <Offer/>
      <About/>
      <ContectH/>
    </div>
  )
}
