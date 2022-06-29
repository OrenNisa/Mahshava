import React, { useState } from 'react';
import { DetailsData } from './DetailsData';
import styled from 'styled-components';
import LogoPolygon1 from '../../mahshava-admin/LogoHelp/LogoPolygon1'
import LogoPolygon2 from '../../mahshava-admin/LogoHelp/LogoPolygon2'


const Container = styled.div`  
 position: absolute;
  top: 0%;
`;

const Wrap = styled.div`
  position: relative;
  color:  #333333;
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
    font-size: 2.7rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const AccordionData = () => {
    const [clicked, setClicked] = useState(new Array(3).fill(true));

    const toggle = index => {
        let newArr = [...clicked]
        newArr[index] = clicked[index] !== true;
        setClicked(newArr);
    };

    return (

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


    );
};

export default AccordionData;