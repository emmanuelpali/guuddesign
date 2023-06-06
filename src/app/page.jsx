import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
          <h1 className={styles.title}>World class designs</h1>
          <p className={styles.desc}>
            Ww bring ideas to reality, letting you focus on building your dream.
          </p>
          <Button text={"Our Works"} url={"/portfolio"}/>
      </div>
      <div className={styles.item}>
      <Image 
        src="https://source.unsplash.com/rVC6O_gDE0Q"
        alt="Unsplash Image"
        width={500}
        height={500}
        className={styles.img}
      />
    </div>
    </div>
  )
}
