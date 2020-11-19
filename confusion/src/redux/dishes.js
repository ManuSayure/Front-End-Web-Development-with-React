import { DISHES } from '../shared/dishes';

export const Dishes = (state = DISHES, action) => {
    console.log(action.type);
    switch (action.type) {
        default:
          return state;
      }
};