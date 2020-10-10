import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {FaRegComment} from 'react-icons/fa'
import {BiLike} from 'react-icons/bi'

import { Container, UserContainer, DataContainer, BestPostsContainer} from './styles';

function Dashboard(props){
  const user= props.location.state.user;
  console.log(user);

  const [data, setData] = useState();

  useEffect(()=>{
    api.get(`/bestposts/${user.username}`).then(response=>{
      setData(response.data);
    })
  }, [])

  return(
      <Container>
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
            {data &&
              <DataContainer>
                <div>
                  <h2>Imagens</h2>
                  <p>Média Comentários: {data.mediaCommentsImage}</p>
                  <p>Média Likes: {data.mediaLikesImage} </p>
                </div>
                <div>
                  <h2>Vídeos</h2>
                  <p>Média Comentários: {data.mediaCommentsVideo}</p>
                  <p>Média Likes: {data.mediaLikesVideo} </p>
                </div>
              </DataContainer>
            }
            <BestPostsContainer>
            { data && data.threeBestPosts.map((post)=>{
              return(
                <div>
                  {post.media_type == "IMAGE" ?
                    <img src={post.media_url}/> :
                    <video width="320" height="240" controls>
                      <source src={post.media_url} type="video/mp4"/>
                    </video>

                  }
                  <div>
                    <p><FaRegComment/> {post.comments_count}</p>
                    <p><BiLike/> {post.like_count}</p>
                  </div>
                  <p>{post.caption}</p>
                </div>
              
              )
            })}
            </BestPostsContainer>
      </Container>
  )
}

export default Dashboard;