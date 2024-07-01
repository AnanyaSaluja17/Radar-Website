// import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react"
import ReactImg from "../../assets/TIET-Logo.png"
import { Link } from "react-scroll"
import "./Cards.css"
const Cards = () => {
  return (
    <>
      <div className="cards-container">
        <div className="card1">
          <CCard style={{ width: "20rem", borderRadius: "1rem" }}>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card 1</CCardTitle>
              <CCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </CCardText>
              <Link to="chart1" smooth={true} duration={500}>
                <CButton color="primary">Go to Chart 1</CButton>
              </Link>
            </CCardBody>
          </CCard>
        </div>
        <div className="card1">
          <CCard style={{ width: "20rem", borderRadius: "1rem" }}>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card 1</CCardTitle>
              <CCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </CCardText>
              <Link to="chart1" smooth={true} duration={500}>
                <CButton color="primary">Go to Chart 1</CButton>
              </Link>
            </CCardBody>
          </CCard>
        </div>
        <div className="card1">
          <CCard style={{ width: "20rem", borderRadius: "1rem" }}>
            <CCardImage orientation="top" src={ReactImg} />
            <CCardBody>
              <CCardTitle>Card 1</CCardTitle>
              <CCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </CCardText>
              <Link to="chart1" smooth={true} duration={500}>
                <CButton color="primary">Go to Chart 1</CButton>
              </Link>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </>
  )
}

export default Cards
