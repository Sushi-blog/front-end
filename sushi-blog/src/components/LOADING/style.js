import styled from 'styled-components';

export const WhiteBox = styled.div`
    z-index: 1;
    top: 0%;
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: white;
    opacity: 0.5;
`

export const Loading = styled.div`
  position: fixed;
  z-index: 5;
  border: 16px solid #f3f3f3;
  border-top: 16px solid rgba(0, 0, 0, 0.3); 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`