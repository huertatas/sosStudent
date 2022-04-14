import { DISPLAY_ROOMS, DISPLAY_ROOM_BY_ID } from '../actions/room'

const initialState = {
  rooms: [],
  room: {},
  infoForNotifee: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROOMS:
      return { ...state, rooms: action.payload }
    case DISPLAY_ROOM_BY_ID:
      if (Object.keys(state.room).length === 0) {
        console.log('neutre one')
        return { ...state, room: action.payload, infoForNotifee: '' }
      } else if (state.room.attributes.notifs.data.length === 0) {
        console.log('neutre two')
        return { ...state, room: action.payload, infoForNotifee: '' }
      } else if (
        state.room.attributes.notifs.data.length <
        action.payload.attributes.notifs.data.length
      ) {
        console.log('nouvelle demande')
        return {
          ...state,
          room: action.payload,
          infoForNotifee: 'nouvelle demande'
        }
      } else {
        console.log('neutre three', state.room.attributes.notifs.data.length)
        return { ...state, room: action.payload, infoForNotifee: '' }
      }
    default:
      return state
  }
}
