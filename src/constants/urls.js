const placeBaseURL = 'https://jsonplaceholder.typicode.com/';

const carsBaseURL = 'http://owu.linkpc.net/carsAPI/v1';

const users = '/users';
const comments = '/comments';
const cars = '/cars';

const urls = {
    placeAPI: {
        users,
        comments
    },
    carsAPI: {
        cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    placeBaseURL,
    carsBaseURL,
    urls
}