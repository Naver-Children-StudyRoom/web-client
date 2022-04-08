import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'

import ServiceName from 'resources/Login/ServiceName.png'
import ExclamationMark from 'resources/Login/ExclamationMark.png'

import styles from 'styles/components/Login/login.module.scss'

const Login = () => {
  const [idValue, setIdValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  const [warning, setWarning] = useState<boolean>(false)

  const onChangeId = (str: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    setIdValue(str.replace(/[^a-zA-Z\d@.]/gi, ''))
    if (emailRegex.test(str)) {
      setWarning(false)
    } else {
      setWarning(true)
    }
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
      </div>
    </div>
  )
}

export default Login
