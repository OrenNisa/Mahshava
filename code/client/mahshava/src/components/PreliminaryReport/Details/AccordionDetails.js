import React, {useState} from 'react';
import Details from './Details';
import styled from 'styled-components';
import LogoPolygon1 from '../../mahshava-admin/LogoHelp/LogoPolygon1'
import LogoPolygon2 from '../../mahshava-admin/LogoHelp/LogoPolygon2'


const Container = styled.div`
  position: relative;
  top: -10%;
  left: -13%;
`;

const Wrap = styled.div`
  color: #2F3A5F;
  display: flex;
  font-family: 'Heebo';
  font-style: normal;
  align-items: center;
  width: 350%;
  text-align: center;
  cursor: pointer;
  justify-content: right;
  h1 {
    padding: 0.4rem;
    font-size: 2rem;
    color: #333333;
  }
  span {
    margin-right: 0.7 rem;
  }
  
`;
const Dropdown = styled.div`
  position: relative;
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  p {
    padding: 0.7rem;
    font-size: 1rem;
    color: #333333;
  }
`;


const AccordionDetails = () => {
    const [clicked, setClicked] = useState(new Array(5).fill(true));

    const toggle = index => {
        let newArr = [...clicked]
        newArr[index] = clicked[index] !== true;
        setClicked(newArr);
    };

    return (
        <Container>
            {Details().map((item, index) => {
                return (
                    <span key={index}>
                        <Wrap onClick={() => toggle(index)}>
                            <span>{clicked[index] === true ? <LogoPolygon1/> : <LogoPolygon2/>}</span>
                            <h1>{item.title}</h1>
                        </Wrap>
                        {clicked[index] === true ? (
                            <Dropdown>
                                <>{item.content}</>
                            </Dropdown>
                        ) : null}
                    </span>
                );
            })}
        </Container>

    );
};

export default AccordionDetails;