import { ACTIVE_TAB, ACTIVE_COLOR, ACTIVE_BACKGROUND_SIDEBAR } from './commonTypes';

const initialState = {
  menuItems: [
    {
      title: 'DashBoard',
      icon: 'dashboard',
      link: ''
    },
    {
      title: 'User Profile',
      icon: 'person',
      link: 'users'
    },
    {
      title: 'Table List',
      icon: 'content_paste',
      link: 'table'
    },
    {
      title: 'Typography',
      icon: 'library_books',
      link: 'typography'
    },
    {
      title: 'Icons',
      icon: 'bubble_chart',
      link: 'icons'
    },
    {
      title: 'Maps',
      icon: 'location_ons',
      link: 'maps'
    },
    {
      title: 'Notifications',
      icon: 'notifications',
      link: 'notifications'
    },
    {
      title: 'RTL Support',
      icon: 'language',
      link: 'supports'
    },
    {
      title: 'Upgrade to PRO',
      icon: 'unarchive',
      link: 'upgrade'
    }
  ],
  tabActive: 0,
  styleFade: { opacity: 1, from: { opacity: 0 }, duration: 1000 },
  itemBackground: '',
  colorActive: 0,
  activeIndexBGSidebar: 0,
  navbavStatus: false,
};

const commonReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIVE_TAB: {
      return Object.assign({}, state, {
        tabActive: action.payload
      });
    }
    case ACTIVE_COLOR: {
      return Object.assign({}, state, {
        itemBackground: action.payload.color,
        colorActive: action.payload.index
      });
    }
    case ACTIVE_BACKGROUND_SIDEBAR: {
      return Object.assign({}, state, {
        activeIndexBGSidebar: action.payload
      });
    }
    default: 
      return state;
  }
}
export default commonReducer;
