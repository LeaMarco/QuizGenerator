import {
    ADD_QUESTION,
    ADD_OPTION,
    DELETE_QUESTION,
    DELETE_OPTION,
    MODIFY_QUESTION,
    MODIFY_OPTION,
    MODIFY_DESCRIPTION,
    MODIFY_TITLE
  } from "../actions/actionNames";
  
  export function modifyTitle(payload) {
    return {
      type: MODIFY_TITLE,
      payload
    };
  }

  export function modifyDescription(payload) {
    return {
      type: MODIFY_DESCRIPTION,
      payload
    };
  }

  
  export function addQuestion(question_type, text) {
    console.log(question_type, text, "question_type en la action")
    return {
      type: ADD_QUESTION,
      payload:{
        question_type,
        text
      },
    };
  }

  export function addOption(questionId,option) {
    return {
      type: ADD_OPTION,
      payload:{
        questionId,
        option
    },
    };
  }
  
  export function deleteQuestion(payload) {
    return {
      type: DELETE_QUESTION,
      payload,
    };
  }
  
  export function deleteOption(questionId,id) {
    return {
      type: DELETE_OPTION,
      payload:{
        questionId,
        id,
      }
    };
  }


  export function modifyOption(questionId, id, text) {
    return {
      type: MODIFY_OPTION,
      payload:{
        questionId,
        id,
        text
      }
    };
  }

  export function modifyQuestion(id, question_type, text) {
    return {
      type: MODIFY_QUESTION,
      payload:{
          id,
          question:{
          question_type,
          text
          }
      }
    };
  }
  
  