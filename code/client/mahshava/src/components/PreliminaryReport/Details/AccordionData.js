import React, { useState } from 'react';
import { DetailsData } from './DetailsData';
import styled from 'styled-components';
import LogoPolygon1 from '../../mahshava-admin/LogoHelp/LogoPolygon1'
import LogoPolygon2 from '../../mahshava-admin/LogoHelp/LogoPolygon2'


const AccordionSection = styled.div`
  display: flex;
  left: 55%;
  top: 0%;
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
  top: 0%;
  left: -60%;
`;

const Wrap = styled.div`

  color: #333333;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 200%;
  text-align: center;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  h1 {
    padding: 0.5rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1 rem;
  }
`;

const AccordionData = () => {
    const [clicked, setClicked] = useState(new Array(3).fill(false));

    const toggle = index => {
        let newArr = [...clicked]
        newArr[index] = clicked[index] !== true;
        setClicked(newArr);
    };

    return (
        <AccordionSection>
            <Container>
                {DetailsData.map((item, index) => {
                    return (
                        <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <span>{clicked[index] === true ? <LogoPolygon1 /> : <LogoPolygon2 />}</span>
                                <h1>{item.title}</h1>
                            </Wrap>
                            {clicked[index] === true ? (
                                <p>{item.content}</p>
                            ) : null}
                        </>
                    );
                })}
            </Container>
        </AccordionSection>

    );
};

export default AccordionData;