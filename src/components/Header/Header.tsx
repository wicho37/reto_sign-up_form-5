import style from "./Header.module.css"



const Header = () => {
  return (
    <div className={style.header}>
      <p className={style.first_Tittle}>learn to code by watching others</p>
      <p className={style.last_Tittle}>see how experenced developers solve problems in real-time. watching scripted tutorials is great, but understanding how developers thinsk is invaluable.</p>
    </div>
  )
}

export default Header