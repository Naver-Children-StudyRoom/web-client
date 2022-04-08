import Link from 'next/link'
import Image from 'next/image'
import { services } from 'constants/serivces.constant'

import Logo from 'resources/Header/logo.png'

import styles from 'styles/components/Header/header.module.scss'

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
        <div className={styles.service_name}>
          <Image src={Logo} alt="logo image" />
        </div>
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
        <Link href="/login">
          <div className={styles.login_button} onClick={onClickLogin}>
            로그인
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
