// components/Post.tsx

import * as React from 'react';
import { IPost } from '../types';

interface Props  {
  post: IPost;
  deletePost: (id: number) => void;
};

const Post = ({ post, deletePost }: Props) => {
  return (
    <div className="Card">
      <div className="Card--body">
        <h1 className="Card--body-title">{post.title}</h1>
        <p className="Card--body-text">{post.content}</p>
      </div>
      <button className="Card__button" onClick={() => deletePost(post.id)}>
        Delete
      </button>
    </div>
  );
};

export default Post;
