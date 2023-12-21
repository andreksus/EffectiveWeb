import './App.css'
import { Description } from './components/description/Description'
import { Header } from './components/header/Header'
import { Services } from './components/services/Services'
import img from './assets/element.svg'

import './index.css'
import { descriptions } from './model/descriptionModel'


function App() {

  return (
    <div>
      <Header></Header>
      <img className='img' src={img} alt="image" />
      <Description img={descriptions[0].img} titleBold={descriptions[0].titleBold} titleLight={descriptions[0].titleLight} titleButton={descriptions[0].titleButton}/>
      <Services/>
    </div>
  )
}

export default App
