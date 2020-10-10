import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';

import { Form } from '@unform/web';

import Input from '../../components/Input'
import { Container, SearchBox, UserContainer } from './styles';

function Main(){
  const [user, setUser] = useState();

  useEffect(()=>{
    console.log(user);
  }, [user])

  const handleSubmit = ({user})=>{
    console.log(user);
    api.get(`/user/${user}`).then(response=>{
      console.log(response)
      setUser(response.data.business_discovery);
    })
  }

  return(
    <>
      <Container>
        <SearchBox>
          <Form onSubmit={handleSubmit}>
            <p>@</p>
            <Input name="user" type="text" placeholder="Digite um usuário do Instagram"/>
            <button type="submit">
              <FaSearch></FaSearch>
            </button>
          </Form>
        </SearchBox>
        {user &&
          <Link to={{
            pathname:'/media',
            state: {
              user: user}
          }}>
            <UserContainer>
              <img src={user.profile_picture_url}/>
              <div>
              <h2>@{user.username}</h2>
              <aside>
                <div>
                  <p>Seguidores: {user.followers_count}</p>
                </div>
                <div>
                  <p>Publicações: {user.media_count}</p>
                </div>
              </aside>
              </div>
            </UserContainer>
          </Link>
         }
      </Container>
    </>
  )
}

export default Main;