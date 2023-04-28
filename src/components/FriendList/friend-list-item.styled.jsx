import styled from "styled-components";


export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 300px;
    height: 100px;
    background-color: #d3cea0;
    border-radius: 10px;
    box-shadow: 10px 5px 5px #6b6853;
`
export const StatusIsOnline = styled.span`
    margin-left: 10px;
    width: 20px;
    height: 20px;
    background-color: ${span => span.isOnline ? "green" : "red"};
    border-radius: 50%;
`
export const Img = styled.img`
margin: 0 20px;
background-color: #fff;
border-radius: 20px;
`
export const TextName = styled.p`

    font-size: 30px;
`