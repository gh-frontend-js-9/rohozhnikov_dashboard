import React from 'react'
import './assets/styles/css/normalize.css'
import './assets/styles/css/style.css'
import GoogleFontLoader from 'react-google-font-loader'
import { Header } from '../../components/Header/header'
// import { Navbar } from '../../components/Navbar/navbar'

const AppProjectPage: React.FC = () => {
    return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Montserrat',
            weights: [400, 700],
          }
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />
      <Header />
    </>
        
    )
  }
   
export default AppProjectPage;