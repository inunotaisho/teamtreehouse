import * as PlayActionTypes from '../actiontypes/player';

export const addPlayer = name =>{
    return {
        type: PlayActionTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = index => {
    return {
        type: PlayActionTypes.REMOVE_PLAYER,
        index
    };
};

export const updatePlayerScore = (index, score) => {
    return {
        type: PlayActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    }
};

export const selectPlayer = index => {
  return {
    type: PlayerActionTypes.SELECT_PLAYER,
    index
  };
};