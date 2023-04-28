import styled from "styled-components";

export const Section = styled.section`
    margin-left: auto;
    margin-right: auto;
    width: 750px;
    text-align: center;
    border: solid 3px red;
    border-radius: 10px;
    overflow: hidden;
    background-color: #e26be2;
`
export const Title = styled.h2`
    width: auto;
    margin-top: 50px;
    height: 130px;
    font-size: 40px;
    font-weight: 600;
`
export const StatsList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    width: auto;
`
export const Label = styled.span`  
/* display: inline-block; */
margin-bottom: 8px;
  font-size: 30px;
  font-weight: 400;
&.percentage {
  font-size: 40px;
  font-weight: 600;
  }
`
 export const Item = styled.li` 
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
 width: 147px;
 height: 130px;
 border: solid 2px rgb(100, 167, 238);
 `