import React, {useState} from 'react';
import style from './PageFullInitialReport.module.css';
import Card from "@mui/material/Card";
import InitialReportContent from "./components/InitialReportContent";
import LogoPolygon1 from "../mahshava-admin/LogoHelp/LogoPolygon1";
import LogoPolygon2 from "../mahshava-admin/LogoHelp/LogoPolygon2";
import styled from "styled-components";


const Container = styled.div`
  position: absolute;
  top: 25%;
`;

const Wrap = styled.div`
  color: #2F3A5F;
  display: flex;
  font-family: 'Heebo';
  font-style: normal;
  align-items: center;
  width: 200%;
  text-align: center;
  cursor: pointer;
  justify-content: right;
  h1 {
    padding: 1.8rem;
    font-size: 1.6rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;
const Dropdown = styled.div`
   background-color: with;
  padding: 1em;

`;

// TODO fix name of class in all files
const PageFullnitialReport = () => {
    const [clicked, setClicked] = useState(new Array(7).fill(true));
    const toggle = index => {
        let newArr = [...clicked]
        newArr[index] = clicked[index] !== true;
        setClicked(newArr);
    };
    const { title, content } = InitialReportContent;


    return (
        <div className={style.FullInitialReport}>
            <div className={style.SchoolInformation}>
                <div className={style.tital}>
                    <p>הערכת חוסן אירגוני - דוח ראשוני</p>
                </div>
                <div className={style.ReportPurpose}>
                <span>
                     בדוח זה תוכלו לראות את הממצאים הראשוניים ממדידת החוסן הארגוני של בית הספר.
                     <br/>
                     מטרת הדוח לשקף את נקודות החולשה והחוזקה של בית הספר, לספק דוגמאות להתערבות ולהוות בסיס לשיח משותף לגיבוש תוכנית התערבות.
                </span>
                </div>
            </div>
            <Container>
            {InitialReportContent().map((item, index) => {
                return (
                    <div key={index}>
                        <Wrap onClick={() => toggle(index)} key={index}>
                            <span>{clicked[index] === true ? <LogoPolygon1/> : <LogoPolygon2/>}</span>
                            <h1>{item.title}</h1>
                        </Wrap>
                        {clicked[index] === true ? (

                            <Dropdown>{item.content}</Dropdown>

                        ) : null}
                    </div>
                );
            })}
        </Container>

        </div>
    );
};

export default PageFullnitialReport;