import * as actionTypes from './actionTypes';

export const selectLever = (uuid: string) => {
    return {
        type: actionTypes.SELECT_LEVER,
        payload : {
            leverUUID : uuid,
        }
    }
}

export const selectedLeverUUID = (uuid: string) => {
    return {
        type: actionTypes.SHOW_SELECTED_LEVER_UUID,
        payload : {
            selectedLeverUUID : uuid,
        }
    }
}