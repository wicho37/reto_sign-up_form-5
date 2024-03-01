import style from "./Card.module.css"




const Card = () => {
  return (
    <div>
      <button className={style.press}>
        <p className={style.bond}>try it free 7days</p>
        <p className={style.bond1}>then $20/mo. there after</p>
      </button>
    </div>
  )
}

export default Card