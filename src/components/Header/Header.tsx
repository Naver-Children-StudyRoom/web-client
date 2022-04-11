import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { services } from 'constants/serivces.constant'
import { RootState } from 'redux/reducer'
import { onHandleLogout } from 'redux/reducer/login'

import Logo from 'resources/Header/logo.png'

import styles from 'styles/components/Header/header.module.scss'

const Header = () => {
  const isLogin = useSelector((state: RootState) => state.login.isLogin)
  const dispatch = useDispatch()
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
        {isLogin ? (
          <div
            className={styles.login_button}
            onClick={() => dispatch(onHandleLogout())}
          >
            로그아웃
          </div>
        ) : (
          <Link
            href={{
              pathname: '/login',
            }}
          >
            <div className={styles.login_button}>로그인</div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
