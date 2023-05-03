const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1';

const placeBaseURL = 'https://jsonplaceholder.typicode.com';

const cars = '/cars';
const users = '/users';
const comments = '/comments';

const urls = {
    carAPI: {
        cars,
        byId: (id) => `${cars}/${id}`
    },
    placeAPI: {
        users,
        comments
    }
}

export {
    carsBaseURL,
    placeBaseURL,
    urls
}