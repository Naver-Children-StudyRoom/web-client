import Link from 'next/link'
import { services } from 'constants/serivces.constant'

import styles from 'styles/header.module.scss'

interface Props {
  isLogin: boolean
}

const Header = ({ isLogin }: Props) => {
  const onClickLogin = () => {
    console.log('log in!')
  }
  return (
    <div className={styles.header}>
      <Link href="/main">
        <div className={styles.service_name}>서비스 명</div>
      </Link>
      <div className={styles.service_list}>
        {isLogin && (
          <div className={styles.services}>
            {services.map((service) => (
              <Link key={service.id} href={`/${service.id}`}>
                <span className={styles.service}>{service.name}</span>
              </Link>
            ))}
          </div>
        )}
        <div className={styles.login_button} onClick={onClickLogin}>
          로그인
        </div>
      </div>
    </div>
  )
}

export default Header
