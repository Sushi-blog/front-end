import React from "react";
import * as s from './styles';

const PostDetail = () => {
  return(
    <>
      <s.WhiteBox></s.WhiteBox>
      <s.MainContainer>
        <p className="title">이승윤 바보 멍청이</p>
        <s.Header>
          <s.Category>
            <p>Category2</p>
          </s.Category>
          <div>
            <div className="date">2021-02-24 10: 38</div>
            <div className="writer">sadadsds</div>
          </div>
        </s.Header>
        <s.Content>
          (1절)
          동해물과 백두산이 마르고 닳도록
          하느님이 보우하사 우리나라만세
          (후렴)무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
        </s.Content>
      </s.MainContainer>
    </>
  )
}

export default PostDetail;