const baseURL = 'https://jsonplaceholder.typicode.com/'

const posts = '/posts'


const urls = {
    posts: {
        byId: (id) => `${posts}/${id}`
    },
    comments: '/comments',
    albums: '/albums',
    todos: '/todos'
}

export {
    baseURL,
    urls
}