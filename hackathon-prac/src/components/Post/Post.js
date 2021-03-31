import React from "react";
import { Item } from "semantic-ui-react";
const Post = ({ post }) => {
  return (
    <Item>
      <Item.Image size="tiny" src={post.avatar} />
      <Item.Content verticalAlign="middle">
        {post.content} {post.user}
      </Item.Content>
    </Item>
  );
};

export default Post;
