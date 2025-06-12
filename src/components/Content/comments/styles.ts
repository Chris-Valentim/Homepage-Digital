import styled from "styled-components";

export const CommentsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  background-color: transparent; 
  padding: 8px 12px; 
   border-radius: 4px; 
  width: 600px;
  outline: 0;
  font-size: 16px;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  padding-left: 45px;
`;

export const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background-color: #333;
  padding: 10px 15px;
  border-radius: 8px;
  color: #eee;
  word-break: break-word;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  span {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

export const CommentTimestamp = styled.span`
  font-size: 12px;
  color: #aaa;
`;
