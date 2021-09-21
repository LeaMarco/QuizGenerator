import {
  ADD_QUESTION,
  ADD_OPTION,
  DELETE_QUESTION,
  DELETE_OPTION,
  MODIFY_QUESTION,
  MODIFY_OPTION,
  MODIFY_DESCRIPTION,
  MODIFY_TITLE,
} from "../actions/actionNames";

const initialState = {
  name: "",
  description: "",
  questions: []
};


export default (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_TITLE: {
      return { 
        ...state,
        name: action.payload,
      };
    }
    case MODIFY_DESCRIPTION: {
      return { 
        ...state,
        description: action.payload,
      };
    }
    case ADD_QUESTION: {
      return { 
        ...state,
        questions: state.questions.concat(action.payload),
      };
    }


    case MODIFY_QUESTION: {
      return {
        ...state,
        questions: state.questions.map((question, index) =>
          index === action.payload.id
            ? {...question, text : action.payload.question.text, question_type : action.payload.question.question_type }
            : question
        ),
      };
    }
    case DELETE_QUESTION: {
      return {
        ...state,
        questions: state.questions.filter(question => state.questions.indexOf(question) !== action.payload )
      };
    }
    case ADD_OPTION: {
      let questionId = action.payload.questionId
      if(!state.questions[action.payload.questionId].options) state.questions[action.payload.questionId].options = [] 
      return {
        ...state, 
        questions: state.questions.map((question, index) => index ===questionId? {...question, options: question.options.concat(action.payload.option)} :question)
        }
    }
    case MODIFY_OPTION: {
      let questionId = action.payload.questionId
      return {
        ...state, 
        questions: state.questions.map((question, index) => index ===questionId? {...question, options: question.options.map((option, index) => index === action.payload.id ? option=action.payload.text : option)} :question)
        }
    }
    case DELETE_OPTION: {
      let questionId = action.payload.questionId
      return {
        ...state, 
        questions: state.questions.map((question, index) => index ===questionId? {...question, options: question.options.filter((option,index) => index !== action.payload.id)}:question) 
        }
    }
    default:
      return state;
  }
};
