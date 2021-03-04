import React, { FC, ReactElement, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from './components/Header/Header'
import PostsContainer from './components/PostsContainer/PostsContainer'
import { fetchData, PostWithUserInfoType } from './api/api'
// import { fetchData, PostType, PostWithUserInfoType, UserType, UserWithPostsType } from './api'

const AppWrapper = styled.div`
  overflow: hidden;
  max-width: 720px;
  width: 100%;
  margin: 20px auto 20px auto;
  background-color: white;
  border-radius: 5px;
  padding: 20px 20px;
  height: calc(100vh - 80px);
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border-width: 6px;
    border-style: solid;
    border-color: #3DBDF6 transparent #3DBDF6 transparent;
    animation: ${rotateAnimation} 1.2s linear infinite
  }
`

const App: FC = (): ReactElement => {

    // список не стал виртуализировать, всё-таки не 1000+ статей

    const [data, setData] = useState<PostWithUserInfoType[] | undefined | []>(undefined)
    // const [data, setData] = useState<UserWithPostsType[] | undefined | []>(undefined)

    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        fetchData().then((data) => {
            setData(data)
        })
    }, [])

    return (
        <AppWrapper>
            <Header handleChange={setSearchTerm}/>
            {
                !data ? <Loader/> : <PostsContainer
                    data={data.filter(post => searchTerm === '' || post.body.toLocaleLowerCase().includes(searchTerm))}/>
            }
            {/*{*/}
            {/*    !data ? <Loader/> : <PostsContainer*/}
            {/*        data={*/}
            {/*            data.map((user: UserWithPostsType) => {*/}
            {/*                const newPosts = user.posts.filter((post: PostType) => searchTerm === '' || post.body.toLocaleLowerCase().includes(searchTerm))*/}
            {/*                return {*/}
            {/*                    ...user, posts: newPosts*/}
            {/*                }*/}
            {/*            })*/}
            {/*        }*/}
            {/*    />*/}
            {/*}*/}
        </AppWrapper>
    )
}

export default App
