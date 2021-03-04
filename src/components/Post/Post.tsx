import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { PostWithUserInfoType } from '../../api/api'

// import { PostType, PostWithUserInfoType, UserType } from '../../api'

const ArticleWrapper = styled.div`
  padding: 20px 20px;
  border: 1px solid ${props => props.theme.secondaryColor};
`

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`

const User = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Name = styled.div`
  margin-right: 5px;
`

const UsernameLink = styled.a`
  text-transform: lowercase;
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
`

const Title = styled.h3`
  margin: 0;
  text-transform: capitalize;
  display: inline-block;
`

type Props = {
    post: PostWithUserInfoType
}

// type Props = {
//     post: PostType
//     user: UserType
// }

const Post: FC<Props> = ({ post }): ReactElement => {
    return (
        <ArticleWrapper>
            <Header>
                <User>
                    <Name>{post.user.name}</Name>
                    <UsernameLink href="#">@{post.user.username}</UsernameLink>
                </User>
                <Title>{post.title}</Title>
            </Header>
            <div>
                {post.body}
            </div>
            {/*<User>*/}
            {/*        <Name>{user.name}</Name>*/}
            {/*        <UsernameLink href="#">@{user.username}</UsernameLink>*/}
            {/*    </User>*/}
            {/*    <Title>{post.title}</Title>*/}
            {/*</Header>*/}
            {/*<ArticleContent>*/}
            {/*    {post.body}*/}
            {/*</ArticleContent>*/}
        </ArticleWrapper>
    )
}

export default Post