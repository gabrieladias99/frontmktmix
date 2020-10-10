import styled from 'styled-components';


export const SearchBox = styled.div`
  form{
    background-color: #f9f9f9;
    border-radius: 5px;
    width: 500px;
    height: 50px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size:20px;
    font-weight:500;
    padding: 0 10px;

  }
    

  input{
    width: 90%;
    border:none;
    background-color: #f9f9f9;
    height: 40px;
    font-size:20px;
    font-weight:500;

    ::placeholder{
      color: #666;
      font-size:15px;
    }
  }

  button{
    background:none;
    border:none;
  }
`;

export const Container = styled.section`
  padding-top: 50px;
  height: 100%;
  width: 100%;
  background-color: #23b24b;
  display: flex;
  flex-direction: column;
  align-items:center;
`;

export const UserContainer = styled.div`
  width: 500px;
  background-color: #f9f9f9;
  margin-top:20px;
  display:flex;
  padding: 20px;
  border-radius: 10px;

  img{
    width: 80px;
    height:80px;
    border-radius:50%;
    margin-right: 15px;
  }

  div{
    color: black;

    aside{
      margin-top: 8px;
    }
  }
`;