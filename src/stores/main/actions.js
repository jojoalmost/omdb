import mainActionType from "./types";

export const showLoading = () => {
    return {
        type: mainActionType.SHOW_LOADING,
    }
}

export const hideLoading = () => {
    return {
        type: mainActionType.HIDE_LOADING,
    }
}

export const setErrorMessage = (payload) => {
    return {
        type: mainActionType.SET_ERROR_MESSAGE,
        payload,
    }
}

export const clearErrorMessage = () => {
    return {
        type: mainActionType.CLEAR_ERROR_MESSAGE
    }
}