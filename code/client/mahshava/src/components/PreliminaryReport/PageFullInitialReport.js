import React, {useState} from 'react';
import style from './PageFullInitialReport.module.css';
import Card from "@mui/material/Card";
import InitialReportContent from "./components/InitialReportContent";
import LogoPolygon1 from "../mahshava-admin/LogoHelp/LogoPolygon1";
import LogoPolygon2 from "../mahshava-admin/LogoHelp/LogoPolygon2";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 12%;
  left: 69%;
`;
const Wrap = styled.div`
  color: #2F3A5F;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  h1 {
    padding: 1rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1 rem;
  }
`;
// TODO fix name of class in all files
const PageFullInitialReport = () => {
    const [clicked, setClicked] = useState(new Array(7).fill(false));
    const toggle = index => {
        let newArr = [...clicked]
        newArr[index] = clicked[index] !== true;
        setClicked(newArr);
    };

    return (
        <Card className={style.SchoolInformation}>
            {/*TODO fix name of misspelled words in all files*/}
            <div className={style.title}>
                <p>הערכת חוסן אירגוני - דוח ראשוני</p>
            </div>
            <div className={style.ReportPurpose}>
                
                <span>
                    בדוח זה תוכלו לראות את הממצאים הראשוניים ממדידת החוסן הארגוני של בית הספר.
                    <br/>
                    מטרת הדוח לשקף את נקודות החולשה והחוזקה של בית הספר, לספק דוגמאות להתערבות ולהוות בסיס לשיח משותף לגיבוש תוכנית התערבות.
                </span>
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
                                <p>{item.content}</p>
                            ) : null}
                        </div>
                    );
                })}
            </Container>
        </Card>
    );
};

export default PageFullInitialReport;