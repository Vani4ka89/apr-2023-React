import {placeAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => placeAxiosService.get(urls.placeAPI.comments),
    create: (comment) => placeAxiosService.post(urls.placeAPI.comments, comment)
}

export {
    commentService
}