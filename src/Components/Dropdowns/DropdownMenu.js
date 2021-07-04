import SelectedInsurance from "../Cards/SelectedInsurance"
import React, { useState } from "react"
import axios from 'axios'
import stylesWeb from "./stylesWeb.module.css"
import stylesMobile from "./stylesMobile.module.css"
import { isDesktop } from "react-device-detect"

const DropdownMenu = () => {
  const styles = isDesktop ? stylesWeb : stylesMobile
  const [selectInsurance, setSelectedInsurance] = useState({})
  const [showCard, setShowCard] = useState(false)

  const selected = async (e) => {
    const fromValueToId = {
      "1":58,
      "2":59
    }

    try {
      if(fromValueToId[e.target.value]){
        const request = await axios.get(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${fromValueToId[e.target.value]}`)
        setSelectedInsurance(request.data.insurance)
      }
    } catch (error) {
      console.log(error.message)
    }
    
    
  }

  const submit = () => {
    if(Object.keys(selectInsurance).length > 0){
      setShowCard(true)
    } 
  }

  return (
    <div className={styles.container}>
        <div className={styles.selectAndButtonContainer}>
          <select onChange={(e)=>selected(e)} className={styles.selectMenu}>
            <option></option>
            <option value="1">Seguro Vida Activa</option>
            <option value="2">Seguro Viaje Protegido</option>
          </select>
          <button type="submit" onClick={() => submit()} className={styles.button}>Botón</button>
        </div>
      
      <div className={styles.selectedInsuranceContainer}>
        {
          showCard &&
          <SelectedInsurance props={selectInsurance}/>
        }
        
      </div>

    </div>
    
  )
}

export default DropdownMenu