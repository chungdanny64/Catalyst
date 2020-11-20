// import { types } from "@babel/core";
import * as types from '../constants/actionTypes'



const initialState = {
  // describe: ""
  // state bois goes here
  // 
  counter : 0,
  fileTree: []
};

export const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      console.log('working in reducer')
      return{
        ...state,
        counter: action.payload
      };

    case types.CONSTRUCT_FILETREE:
      console.log('about to construct file');
      console.log('in reducer with directory imported', action.payload);
      return {
        ...state,
        fileTree: action.payload
      };






    default: 
      return state;

  }
}