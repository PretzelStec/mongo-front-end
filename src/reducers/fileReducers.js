import {
  FILE_LIST_REQUEST,
  FILE_LIST_SUCCESS,
  FILE_LIST_FAIL,
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAIL,
  FILE_UPLOAD_RESET,
  FILE_DELETE_REQUEST,
  FILE_DELETE_SUCCESS,
  FILE_DELETE_FAIL,
  FILE_DELETE_RESET,
} from '../constants/fileConstants'

export const fileListReducer = (state = { files: {} }, action) => {
  switch (action.type) {
    case FILE_LIST_REQUEST:
      return { ...state, loading: true }
    case FILE_LIST_SUCCESS:
      return { loading: false, files: action.payload }
    case FILE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const uploadFileReducer = (state = { uploadedFile: [] }, action) => {
  switch (action.type) {
    case FILE_UPLOAD_REQUEST:
      return { loading: true, success: false }
    case FILE_UPLOAD_SUCCESS:
      return { loading: false, success: true, uploadedFile: action.payload }
    case FILE_UPLOAD_FAIL:
      return { loading: false, error: action.payload }
    case FILE_UPLOAD_RESET:
      return {}
    default:
      return state
  }
}

export const deleteFileReducer = (state = { deletedFile: [] }, action) => {
  switch (action.type) {
    case FILE_DELETE_REQUEST:
      return { loading: true, success: false }
    case FILE_DELETE_SUCCESS:
      return { loading: false, success: true, deletedFile: action.payload }
    case FILE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case FILE_DELETE_RESET:
      return {}
    default:
      return state
  }
}
