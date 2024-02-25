import Header from './components/Header/Header'
import Form from './components/Form/Form'
import style from "./App.module.css"

function App() {
  return (
    <div className={style.container}>
        <Header />
        <Form />
    </div>
  )
}

export default App