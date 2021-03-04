import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

import Post from '../Post/Post'

import { PostWithUserInfoType } from '../../api/api'
// import { PostWithUserInfoType, UserWithPostsType } from '../../api'

const PostsWrapper = styled.div`
  height: calc(100% - 63px);
  overflow: auto;

  & div:not(:first-child) {
    margin-top: -1px;
  }
`

type Props = {
    data: PostWithUserInfoType[]
}

// type Props = {
//     data: UserWithPostsType[]
// }

const PostsContainer: FC<Props> = ({ data }): ReactElement => {

    return (
        <PostsWrapper>
            {
                data.map(post => (
                    <Post key={post.id} post={post}/>
                ))
                // data.map(user => (
                //     user.posts.map(post => (
                //         <Post key={post.id} post={post} user={user}/>
                //     ))
                // ))
            }
        </PostsWrapper>
    )
}

export default PostsContainer