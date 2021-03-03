import axios from 'axios'

export type PostType = {
    userId: string | number
    id: string | number
    title: string
    body: string
}

export type UserType = {
    id: string | number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export type PostWithUserInfoType = PostType & {
    user: UserType
}

export type UserWithPostsType = UserType & {
    posts: PostType[]
}

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const PostsApi = {

    fetchPosts: async (): Promise<PostType[]> => {
        const { data } = await apiInstance.get('/posts')
        return data
    },

    fetchUsers: async (): Promise<UserType[]> => {
        const { data } = await apiInstance.get('/users')
        return data
    }
}

// два варианта решения загрузки и хранения данных:
// 1. пройтись по двум массивам полученных данных и объединить пост и пользователя по совпадающим id
// 2. так как предоставленное API используется json-server под капотом  - значит, можно получить пользователей и сделать "?_embed=posts" в запросе,
//    получив посты для каждого пользователя
// PS реализовал оба варианта

// 1
export const fetchData = async (): Promise<PostWithUserInfoType[]> => {

    const posts: PostType[] = await PostsApi.fetchPosts()
    const users: UserType[] = await PostsApi.fetchUsers()

    return posts.map((post: PostType) => ({
        ...post as PostType, user: { ...users.find((user: UserType) => user.id === post.userId) }
    })) as PostWithUserInfoType[]
}

// 2
// export const fetchData = async (): Promise<UserWithPostsType[]> => {
//     const { data } = await apiInstance.get('/users?_embed=posts')
//     return data
// }
