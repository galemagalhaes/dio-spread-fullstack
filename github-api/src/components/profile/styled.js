import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`
export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 200px;
  margin-left: 8px;
  h1 {
    font-size: 32px;
    font-weight: 500;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: 500;
  }
`
export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 250px;
  margin: 8px;
`
export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  
  div {
    margin: 8px;
    text-align: center;
    font-weight: 500;
  }
`
export const WrapperUserName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
    font-weight: 500;
  }
  a {
    color: #0d0a;
    font-weight: 500;
    font-size: 14px;
  }
`