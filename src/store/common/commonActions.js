import { ACTIVE_TAB, ACTIVE_COLOR, ACTIVE_BACKGROUND_SIDEBAR } from './commonTypes';

export const setActiveTab = activeId => {
  return dispatch => {
    return dispatch({
      type: ACTIVE_TAB,
      payload: activeId
    })
  }
}

export const setActiveColor = (activeColor, e) => {
  e.preventDefault();
  return dispatch => {
    return dispatch({
      type: ACTIVE_COLOR,
      payload: activeColor
    });
  }
}

export const setBackgroundSidebar = (activeIndex, e) => {
  e.preventDefault();
  return dispatch => {
    return dispatch({
      type: ACTIVE_BACKGROUND_SIDEBAR,
      payload: activeIndex
    })
  }
}