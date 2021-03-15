import React, { useState } from 'react';
import * as s from './styles';

const WritePost = () => {
    const [inputFile, setInputFile] = useState("파일을 선택해주세요");

    const onChangeInputFile = (e) => {
        if(e.target.value === "") {
            setInputFile("파일을 선택해주세요");
        }else {
            setInputFile(e.target.value);
        }
    };

    return (
        <>
            <div>
                <s.Title>게시물 작성</s.Title>
                <s.CenterContainer>
                    <s.WritePostContainer>
                        <s.WriteHeader>
                            <s.TitleInput placeholder="제목을 입력해주세요"></s.TitleInput>
                            <s.CategoryInput>
                                <option value="">카테고리를 선택해주세요</option>
                                <option value="카테고리 1">카테고리 1</option>
                                <option value="카테고리 2">카테고리 2</option>
                                <option value="카테고리 3">카테고리 3</option>
                                <option value="카테고리 4">카테고리 4</option>
                            </s.CategoryInput>
                        </s.WriteHeader>
                        <s.CenterContainer>
                            <s.ContentContainer placeholder="내용을 입력해주세요"></s.ContentContainer>
                        </s.CenterContainer>
                        <s.WriteFooter>
                            <s.FileInput onChange={onChangeInputFile} className="inputFile" type="file" ></s.FileInput>
                            <div className="input" onClick = {() => {
                                document.querySelector('.inputFile').click();
                            }}>
                                {inputFile}
                            </div>
                            <s.WriteBtn>작성</s.WriteBtn>
                        </s.WriteFooter>
                    </s.WritePostContainer>
                </s.CenterContainer>
                <s.BackPageBtn onClick={()=>{
                    window.location.href="/";
                }}>돌아가기</s.BackPageBtn>
            </div>
        </>
    )
}

export default WritePost;