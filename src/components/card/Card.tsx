import styles from './Card.module.css'
interface Props{
  title: string
}
const Card = ({title}:Props) => {
  return (
    <div className={styles.card}>
        <h3>{title}</h3>
    </div>
  )
}

export default Card
