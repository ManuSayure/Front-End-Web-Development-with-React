import { COMMENTS } from '../shared/comments';
import * as Action from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {   
    switch (action.type) {
        
        case Action.ADD_COMMENT:
            var comment = action.payload;
            console.log("addcomment")
            comment.id = state.length; //o tamanho do conjunto de comentarios
            comment.date = new Date().toISOString(); // data de agora
            console.log("Comment: ", comment);
            return state.concat(comment);            

        default:
            console.log("default")
          return state;
      };
};