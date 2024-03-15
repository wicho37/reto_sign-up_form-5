import style from "./Card.module.css"


const Card = () => {
  return (
    <div >
      <button className={style.press}>
        <p className={style.bond}><span className={style.sevent}>Try it free 7days </span>then $20/mo. thereafter</p>
      </button>
    </div>
  )
}

export default Card