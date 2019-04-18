import { ACTIVE_TAB, ACTIVE_COLOR, ACTIVE_BACKGROUND_SIDEBAR, ACTIVE_PAGE, TOGGLE_SIDEBAR } from './commonTypes';

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

export const setActivePage = (activePage) => {
  return dispatch => {
    return dispatch({
      type: ACTIVE_PAGE,
      payload: activePage
    })
  }
}

export const toggleSidebar = status => {
  return dispatch => {
    return dispatch({
      type: TOGGLE_SIDEBAR,
      payload: status
    })
  }
}