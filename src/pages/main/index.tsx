import { ParallaxProvider } from 'react-scroll-parallax'

import Main from 'components/Main/Main'

const index = () => {
  return (
    <ParallaxProvider>
      <Main />
    </ParallaxProvider>
  )
}

export default index
