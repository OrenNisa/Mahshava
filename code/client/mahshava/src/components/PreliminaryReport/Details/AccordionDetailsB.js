import React, {useState} from 'react';
import DetailsB from './DetailsB';
import styled from 'styled-components';
import LogoPolygon1 from '../../mahshava-admin/LogoHelp/LogoPolygon1'
import LogoPolygon2 from '../../mahshava-admin/LogoHelp/LogoPolygon2'


const AccordionSection = styled.div`
  display: flex;
  left: -37%;
  top: -16%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 30vh;
  width: 30%;
  
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: -127%;
`;

const Wrap = styled.div`
  color: #2F3A5F;
  display: flex;
  top: 20%;
  justify-content: right;
  align-items: center;
  width: 200%;
  text-align: center;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 600;
  font-size: 6px;
  line-height: 5px;
  text-align: left;
  cursor: pointer;
  h1 {
   padding: 0.7rem;
    font-size: 2rem;
}

color: #333333;
  }
  span {
    margin-right: 0.7 rem;
  }
  
`;
const Dropdown = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  p {
    font-size: 3 rem;
    font-family: 'Heebo';
font-style: normal;
text-align: right;

  }
`;


const AccordionDetailsB = () => {
    const [clicked, setClicked] = useState(new Array(4).fill(true));

    const toggle = index => {
        let newArr = [...clicked]
        newArr[index] = clicked[index] !== true;
        setClicked(newArr);
    };

    return (
        <AccordionSection>
            <Container>
                {DetailsB().map((item, index) => {
                    return (
                        <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <span>{clicked[index] === true ? <LogoPolygon1/> : <LogoPolygon2/>}</span>
                                <h1>{item.title}</h1>
                            </Wrap>
                            {clicked[index] === true ? (
                                <Dropdown>
                                    <p>{item.content}</p>
                                </Dropdown>
                            ) : null}
                        </>
                    );
                })}
            </Container>
        </AccordionSection>

    );
};

export default AccordionDetailsB;