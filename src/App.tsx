import Header from './components/Header/Header'
import Formulario from './components/Form/Form'
import style from "./App.module.css"


function App () {
  return (
    <div className={style.container}>
        <Header />
        <Formulario/>
    </div>
  )
}

export default App