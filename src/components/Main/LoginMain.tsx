import MyPlanner from "./MyPlanner"
import MyStudyRoom from "./MyStudyRoom"
import StudyRoomRecommend from "./StudyRoomRecommend"

import styles from 'styles/components/Main/login_main.module.scss'

const LoginMain = () => {
  return (
    <div className={styles.login_main}>
      <div className={styles.main_top}>
        <MyStudyRoom/>
        <MyPlanner/>
      </div>
      <div className={styles.main_bottom}>
        <StudyRoomRecommend/>
      </div>
    </div>
  )
}

export default LoginMain
