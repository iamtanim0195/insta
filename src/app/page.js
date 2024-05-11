import FixedBottomNavigation from '@/components/Navigation/BottomNavigation'
import Navigation from '@/components/Navigation/Navigation'
import { Container } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Navigation />
      <FixedBottomNavigation />
    </Container>
  )
}

export default Home