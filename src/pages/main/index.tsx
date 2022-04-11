import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducer'
import LogoutMain from 'components/Main/LogoutMain'
import LoginMain from 'components/Main/LoginMain'

const index = () => {
  const isLogin = useSelector((state: RootState) => state.login.isLogin)
  return <>{isLogin ? <LoginMain /> : <LogoutMain />}</>
}

export default index
