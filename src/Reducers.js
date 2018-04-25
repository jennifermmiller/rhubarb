import * as actions from './Actions';
import * as str from './ActionStrings';

const dstr = dn => new Date(dn).toString()

export const twReducer = (state=[
  {
    msg : 'Welcome to your timeline',
    posted : dstr(Date.now())
  }
],
  action
) => {
  console.log('twReducer() : state:'+JSON.stringify(state)+"\n\n");
  switch (action.type) {
    case str.post :
        return [{
          msg : action.msg,
          posted : dstr(Date.now())
        }, ...state];
    default :
      break;
  }
  return [...state];
}
