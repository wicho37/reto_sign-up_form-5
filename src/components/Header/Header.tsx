import style from "./Header.module.css"


const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.first_Tittle}>
        <p>learn to code by </p>
        <p>watching others</p>
      </div>
      <p className={style.last_Tittle}>see how experenced developers solve problems in real-time. watching scripted tutorials is great, but understanding how developers thinsk is invaluable.</p>
    </div>
  )
}

export default Header