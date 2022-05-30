import React, {useState} from 'react';
import style from './PageFullnitialReport.module.css';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Accordion from './components/Accordion';
import {Data} from "./components/Data";
import LogoPolygon1 from "../mahshava-admin/LogoHelp/LogoPolygon1";
import LogoPolygon2 from "../mahshava-admin/LogoHelp/LogoPolygon2";
import styled from "styled-components";


const Container = styled.div`
  position: absolute;
  top: 20%;
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

const PageFullnitialReport = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <Card className={style.SchoolInformation} >
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

                   <Container>
                       {Data.map((item, index) => {
                           return (
                               <>
                                   <Wrap onClick={() => toggle(index)} key={index}>
                                       <span>{clicked === index ? <LogoPolygon1 /> : <LogoPolygon2 />}</span>
                                       <h1>{item.title}</h1>
                                   </Wrap>
                                   {clicked === index ? (
                                       <p>{item.content}</p>
                                   ) : null}
                               </>
                           );
                       })}
                   </Container>


        </Card>

    );
};

export default PageFullnitialReport;