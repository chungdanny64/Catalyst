// import { types } from "@babel/core";
import * as types from '../constants/actionTypes'



const initialState = {
  // describe: ""
  // state bois goes here
  // 
  fileTree: [],
  fileToView: ''
};

export const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {

    case types.CONSTRUCT_FILETREE:
      console.log('about to construct file');
      console.log('in reducer with directory imported', action.payload);
      return {
        ...state,
        fileTree: action.payload
      };

    case types.SET_FILE_VIEW:
      return{
        ...state,
        fileToView: action.payload
      }






    default: 
      return state;

  }
}