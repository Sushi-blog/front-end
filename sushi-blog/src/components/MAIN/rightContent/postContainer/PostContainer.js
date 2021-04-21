import React, {memo} from 'react';
import * as s from './styles';

const PostContainer = memo((props) => {


  const onClickPost = () => {
    console.log(props.setPostDetail);
  };

  return (
    <s.PostContainer onClick= {onClickPost}>
        <s.Category>[카테고리1]</s.Category>
        <s.Title>이승윤 오늘은 디자인을 하다</s.Title>
        <s.CreateDate>2021-02-23</s.CreateDate>
    </s.PostContainer>
  );
});

export default PostContainer;