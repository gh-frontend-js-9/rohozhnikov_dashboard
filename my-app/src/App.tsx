import React from 'react'
import './assets/styles/css/normalize.css'
import './assets/styles/css/style.css'
import './assets/styles/css/projects.css'
import GoogleFontLoader from 'react-google-font-loader'
import { Header } from './components/Header/header'
import { Navbar } from './components/Navbar/navbar'
import { ProjetsInfo } from './components/Projects/Info/projetsInfo'
import { ProjetsTitle } from './components/Projects/Title/projetsTitle'
import { ProjetsList } from './components/Projects/List/projetsList'


const App: React.FC = () => {
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
    <Navbar />
    <main className="main container container--background"> 
      <ProjetsInfo /> 
      <div className="projects-list">
        <ProjetsTitle />
        <ProjetsList />
      </div>
    </main>
  </>
      
  )
}
 
export default App;
