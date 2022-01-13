import {
  FILE_LIST_REQUEST,
  FILE_LIST_SUCCESS,
  FILE_LIST_FAIL,
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
  FILE_UPLOAD_FAIL,
  FILE_UPLOAD_REQUEST,
} from '../constants/fileConstants'

export const uploadFile = (file) => async (dispatch, getState) => {
  const formData = new FormData()

  // ! WHAT FILE TYPE??? ! //
  formData.append('image', file)
  try {
    dispatch({
      type: FILE_UPLOAD_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    // ! NEED POST ROUTE??? ! //
    const { data } = await axios.post('', formData, config)

    dispatch({
      type: FILE_UPLOAD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: FILE_UPLOAD_FAIL,
      payload: message,
    })
  }
}

export const listFiles = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FILE_LIST_REQUEST,
    })

    // ! NEED GET ROUTE??? ! //
    const { data } = await axios.get('')

    dispatch({
      type: FILE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: FILE_LIST_FAIL,
      payload: message,
    })
  }
}

export const deleteFile = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FILE_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // ! NEED DELETE ROUTE !?????? //
    await axios.delete(`/../${id}`, config)

    dispatch({
      type: FILE_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: FILE_DELETE_FAIL,
      payload: message,
    })
  }
}
