import React from 'react'
import stylesWeb from './stylesWeb.module.css'
import stylesMobile from './stylesMobile.module.css'
import { isDesktop, deviceDetect } from 'react-device-detect'

const AppLayout = ({ children }) => {
  const style =
    !isDesktop || deviceDetect().os === 'iOS' ? stylesMobile : stylesWeb
  return (
    <div className={style.container}>
      <div className={style.topbar}>
        <img
          src={`./bicevida.png`}
          alt="latam-white-logo"
          className={style.logo}
        />
      </div>
      <div className={style.content}>{children}</div>
    </div>
  )
}

export default AppLayout
