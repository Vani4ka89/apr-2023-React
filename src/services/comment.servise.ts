import {placeAxiosServise} from "./axios.servise";

import {IComment} from "../interfaces/comment.interface";
import {IRes} from "../types/response.type";
import {urls} from "../configs/urls";

export const commentServise = {
    getAll:():IRes<IComment[]> => placeAxiosServise.get(urls.placeAPI.comments),
    create:(comment:IComment):IRes<IComment> => placeAxiosServise.post(urls.placeAPI.comments, comment)
}