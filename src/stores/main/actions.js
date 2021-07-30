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
