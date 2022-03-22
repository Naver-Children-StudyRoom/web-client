import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

import StudyRoom from 'resources/Main/studyRoom.png'

import styles from 'styles/components/Main/main.module.scss'

const Main = () => {
  return (
    <div className={styles.main}>
      <Parallax speed={-30}>
        <Image src={StudyRoom} alt="main image" width={1500} height={1000} />
      </Parallax>
      <Parallax speed={10}>
        <div className={styles.service_introduction}>main home</div>
      </Parallax>
    </div>
  )
}

export default Main
