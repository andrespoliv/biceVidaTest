import stylesWeb from "./stylesWeb.module.css"
import stylesMobile from "./stylesMobile.module.css"
import { isDesktop } from "react-device-detect"

const SelectedInsurance = ({props}) => {
  const styles = isDesktop ? stylesWeb : stylesMobile
  const imgUrl = props.image ? props.image : null

  const cardBackground = {
    backgroundImage: 'url(' + imgUrl + ')'
  }
  
  if(Object.keys(props).length > 0){
    return (
      <div className={styles.cardContainer}>
        <div className={styles.imageAndLabelContainer} style={cardBackground}>
          <div className={styles.labelContainer}>
            <div className={styles.label}>
              Conoce más
            </div>
          </div>
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.insuranceName}>
            {props.name}
          </div>
          <div className={styles.insuranceDescription}>
            {props.description}
          </div>
          <div className={styles.insurancePrice}>
            Costo: ${props.price}
          </div>
        </div>
      </div>
    )

  } else {
    return <></>
  }
  
}

export default SelectedInsurance