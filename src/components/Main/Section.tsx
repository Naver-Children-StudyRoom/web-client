import Image from 'next/image'

import styles from 'styles/components/Main/section.module.scss'

type direction = 'LEFT' | 'RIGHT'

interface Props {
  image?: StaticImageData
  align?: direction
  children: JSX.Element
}

const Section = ({ image, align = 'LEFT', children }: Props) => {
  return (
    <div
      className={align === 'LEFT' ? styles.section_left : styles.section_right}
    >
      {image && (
        <div className={styles.image}>
          <Image src={image} alt="section image" />
        </div>
      )}
      <div className={styles.text}>{children}</div>
    </div>
  )
}

export default Section
