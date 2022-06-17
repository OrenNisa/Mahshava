import React, { useState } from 'react';
import InitialReportContent from './InitialReportContent';
import styled from 'styled-components';
import LogoPolygon1 from '../../mahshava-admin/LogoHelp/LogoPolygon1'
import LogoPolygon2 from '../../mahshava-admin/LogoHelp/LogoPolygon2'


const AccordionSection = styled.div`
  display: flex;
  left: 51%;
  top: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 107%;
  background: white;
`;

const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 70%;
`;

const Wrap = styled.div`
  color: #2F3A5F;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 200%;
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

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <AccordionSection>
            <Container>
                {InitialReportContent().map((item, index) => {
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
        </AccordionSection>

    );
};

export default Accordion;