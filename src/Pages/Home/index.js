import DropdownMenu from "../../Components/Dropdowns/DropdownMenu"
import stylesWeb from "./stylesWeb.module.css"
import stylesMobile from "./stylesMobile.module.css"
import { isDesktop } from "react-device-detect"

const Home = () => {
  const styles = isDesktop ? stylesWeb : stylesMobile
  return (
    <div>
      <div className={styles.mainText}>
        Selector de plan
      </div>
      <div>
        <DropdownMenu/>
      </div>
    </div>
  )
}

export default Home