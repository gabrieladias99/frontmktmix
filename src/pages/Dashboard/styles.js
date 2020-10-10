import styled from 'styled-components';

export const HashTags = styled.div`
  width: 1200px;
  background-color: #f9f9f9;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 50px;

  p{
    margin-left: 10px;
  }
`;

export const BestPostsContainer = styled.div`
  width: 1200px;
  margin:20px 0;
  background-color: #f9f9f9;
  display:flex;
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;

  div{
    display:flex;
    flex-direction: column;
    align-items: center;
    width:33%;
    font-size:14px;
    padding: 10px 20px;
    background-color: #f1f1f1;
    border-radius: 10px;



    img, video{
      width:250px;
    }
    
    div{
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight:500;
      }
    }
  }
`;

export const DataContainer = styled.div`
  width: 500px;
  margin-top:20px;
  background-color: #f9f9f9;
  display:flex;
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
`;


export const Container = styled.section`
  padding-top: 50px;
  height: 100%;
  width: 100%;
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

