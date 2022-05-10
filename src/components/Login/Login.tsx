import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { onHandleLogin } from 'redux/reducer/login'

import ServiceName from 'resources/Login/ServiceName.png'
import ExclamationMark from 'resources/Login/ExclamationMark.png'

import styles from 'styles/components/Login/login.module.scss'

const Login = () => {
  const [idValue, setIdValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [warning, setWarning] = useState<boolean>(false)

  const dispatch = useDispatch()

  const onChangeId = (str: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    setIdValue(str.replace(/[^a-zA-Z\d@.]/gi, ''))
    if (emailRegex.test(str)) {
      setWarning(false)
    } else {
      setWarning(true)
    }
  }

  const onClickLogin = () => {
    if (!idValue) {
      alert('id를 입력 해 주세요')
      return
    }
    if (!passwordValue) {
      alert('비밀번호를 입력 해 주세요')
      return
    }
    if (warning) {
      alert('email 형식을 확인 해 주세요')
      return
    }
    dispatch(onHandleLogin())
    Router.replace('/main')
  }

  return (
    <div className={styles.login}>
      <div className={styles.login_container}>
        <div className={styles.service_name}>
          <Image src={ServiceName} alt="service name" />
        </div>
        <div className={styles.input_section}>
          <span className={styles.label}>아이디</span>
          <input
            className={styles.input}
            value={idValue}
            type="text"
            placeholder="아이디"
            onChange={(e) => onChangeId(e.target.value)}
          />
          {warning && (
            <div className={styles.warning}>
              <Image
                src={ExclamationMark}
                alt="warning"
                width={20}
                height={20}
              />
            </div>
          )}
        </div>
        <div className={styles.input_section}>
          <span className={styles.label}>비밀번호</span>
          <input
            className={styles.input}
            value={passwordValue}
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        <div className={styles.login_button} onClick={onClickLogin}>
          로그인
        </div>
        <div className={styles.login_function}>
          <span>비밀번호 찾기</span> | <span>아이디 찾기</span> | <span>회원가입</span>
        </div>
      </div>
    </div>
  )
}

export default Login
