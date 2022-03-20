import styles from 'styles/header.module.scss'

interface Props {
  isLogin: boolean
}

const Header = ({ isLogin = false }: Props) => {
  const onClickLogin = () => {
    console.log('log in!')
  }
  return (
    <div className={styles.header}>
      <div className={styles.service_name}>서비스 명</div>
      <div className={styles.service_list}>
        {isLogin && <div>로그인 시 구현되는 리스트</div>}
        <div className={styles.login_button} onClick={onClickLogin}>
          로그인
        </div>
      </div>
    </div>
  )
}

export default Header
