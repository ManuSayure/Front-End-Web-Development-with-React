import * as Action  from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => (
    {
        type: Action.ADD_COMMENT,
        payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
        }
   
});