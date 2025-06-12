import React, { useState, KeyboardEvent } from 'react';
import * as S from './styles';
import Avatar2 from '../../../assets/avatar2.svg';

interface Comment {
  text: string;
  timestamp: string;
}

export const CommentsArea = () => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && commentText.trim() !== '') {
      const now = new Date();
      const formattedDate = now.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      const newComment: Comment = {
        text: commentText,
        timestamp: formattedDate
      };

      setComments((prevComments) => [...prevComments, newComment]);
      setCommentText('');
    }
  };

  return (
    <div>
      <S.CommentsArea>
        <img
          src={Avatar2}
          alt="avatar"
        />
        <S.Input
          type="text"
          placeholder='Adicione um comentário'
          value={commentText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </S.CommentsArea>

      <S.CommentsList>
        {comments.map((comment, index) => (
          <S.CommentItem key={index}>
            <img src={Avatar2} alt="avatar" />
            <S.CommentContent>
              <span>{comment.text}</span>
              <S.CommentTimestamp>{comment.timestamp}</S.CommentTimestamp>
            </S.CommentContent>
          </S.CommentItem>
        ))}
      </S.CommentsList>
    </div>
  );
};
