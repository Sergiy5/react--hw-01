import styled from "styled-components";

export const Card = styled.div`

  margin-right: auto;
  margin-left: auto;
text-align: center;
width: 450px;
border: solid 3px red;
border-radius: 10px;
overflow: hidden;

&.description {
  background-color: #c4dbf1;
  border: none;
  border-radius: 0;
}
`
export const Avatar = styled.img` 
  overflow: hidden;
  width: 450px;
 border-radius: 10%;
 `

export const UserData = styled.p`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 600;

&.location{
  margin-top: 10px;
  font-size: 25px;
  margin-bottom: 0;
  padding-bottom: 20px;
}
&.tag{
  font-size: 25px;
}
`

export const Stats = styled.ul`
  display: flex;
  width: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Label = styled.span`
margin-bottom: 8px;
  font-size: 30px;
  font-weight: 400;
&.quantity {
  font-size: 30px;
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
 background-color: rgb(172, 168, 168);
 border: solid 2px rgb(100, 167, 238);
`

