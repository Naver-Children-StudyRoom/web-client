import Image from 'next/image'
import Section from 'components/Main/Section'

import studyRooms from 'resources/Main/studyRooms.png'
import calendar from 'resources/Main/calendar.png'
import mobileApplication from 'resources/Main/mobileImage.png'
import appleIcon from 'resources/Main/appleIcon.png'

import styles from 'styles/components/Main/logout_main.module.scss'

const LogoutMain = () => {
  const onHandleTutorial = () => {
    console.log('link to tutorial!')
  }
  const onHandleAppStore = () => {
    console.log('link to app store!')
  }
  return (
    <div className={styles.main}>
      <div className={styles.main_image}>
        <div className={styles.service_name}>온라인 스터디룸</div>
        <div className={styles.service_introduction}>
          온라인으로 다양한 사람과 스터디를 진행 해 보세요.
          <br />
          거리에 구애받지 않고, 장소에 구애받지 않고
          <br />
          원하는 사람과 편안한 장소에서 언제든 스터디 진행을 가능하게 하는
          <br />
          온라인 스터디 플랫폼, OnsROOM
        </div>
      </div>
      <div className={styles.section_wrapper}>
        <Section image={studyRooms}>
          <div className={styles.section_text}>
            여러종류의 스터디 방을 한 눈에 만나보세요.
            <br />
            원하는 스터디 룸을 개설할 수도 있습니다.
            <br />
            내가 생성한 방이나 참여하는 방은 '나의 독서실'에서
            <br />한 눈에 확인할 수 있어요.
            <div className={styles.button} onClick={onHandleTutorial}>
              자세히 알아보기
            </div>
          </div>
        </Section>
        <Section image={calendar} align="RIGHT">
          <div className={styles.section_text}>
            나만의 플래너를 관리해보세요.
            <br />
            나의 월간 목표, 데일리 todo list를 설정할 수 있습니다.
            <div className={styles.button} onClick={onHandleTutorial}>
              자세히 알아보기
            </div>
          </div>
        </Section>
        <Section image={mobileApplication}>
          <div className={styles.section_text}>
            <div style={{ fontSize: '30px' }}>IOS 다운로드</div>
            <br />
            모바일 어플리케이션으로도 온라인 스터디룸을 만나보세요
            <div className={styles.button} onClick={onHandleAppStore}>
              <Image src={appleIcon} alt="icon" width={20} height={20} />
              <div style={{ marginLeft: '5px' }}>App Store</div>
            </div>
          </div>
        </Section>
      </div>
      <div>사이트맵 영역</div>
    </div>
  )
}

export default LogoutMain
