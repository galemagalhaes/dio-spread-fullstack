import React from "react";
import * as S from './styled'

const Profile = () => {
  return(
  <S.Wrapper>
    <S.WrapperImage src="https://avatars.githubusercontent.com/u/80106417?v=4" alt="User's photograph" />
          <S.WrapperInfoUser>
          <div>
            <h1>Glaucia Magalhães</h1>
            <S.WrapperUserName>
              <h3>Username: </h3>
              <a href="https://github.com/galemagalhaes" target="_blank" rel="noreferrer">
              galemagalhaes
              </a>
            </S.WrapperUserName>           
          </div>
          
          <S.WrapperStatusCount>
            <div>
            <h4>Followers</h4>
            <span>37</span>
            </div>
            <div>
            <h4>Starreds</h4>
            <span>2</span>
            </div>
            <div>
            <h4>Followings</h4>
            <span>41</span>
            </div>
          </S.WrapperStatusCount>
          </S.WrapperInfoUser>
  </S.Wrapper>)
}

export default Profile