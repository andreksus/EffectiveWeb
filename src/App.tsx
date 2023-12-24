import './App.css'
import { Description } from './components/description/Description'
import { Header } from './components/header/Header'
import { Services } from './components/services/Services'
import img from './assets/element.svg'

import './index.css'
import { descriptions } from './model/descriptionModel'
import { Description2 } from './description2/Description2'
import { Description3 } from './description3/Description3'
import { Dots } from './components/dots/Dots'


function App() {

  return (
    <div>
      <Header></Header>
      <img className='img' src={img} alt="image" />
      <Description img={descriptions[0].img} titleBold={descriptions[0].titleBold} titleLight={descriptions[0].titleLight} titleButton={descriptions[0].titleButton}/>
      <Services/>
      <Description2 img={descriptions[1].img} titleBold={descriptions[1].titleBold} titleLight={descriptions[1].titleLight} titleButton={descriptions[1].titleButton}/>
      <Dots />
      <Description3 img={descriptions[2].img} titleBold={descriptions[2].titleBold} titleLight={descriptions[2].titleLight} titleButton={descriptions[2].titleButton}/>
    </div>
  )
}

export default App
