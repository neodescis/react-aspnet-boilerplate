export enum ActionTypeKeys {
  CHANGEPASSWORD_START = 'react/manage/CHANGEPASSWORD_START',
  CHANGEPASSWORD_COMPLETE = 'react/manage/CHANGEPASSWORD_COMPLETE',
  CHANGEPASSWORD_ERROR = 'react/manage/CHANGEPASSWORD_ERROR'
}

export function changePassword(body) {
  return {
    types: [ActionTypeKeys.CHANGEPASSWORD_START, ActionTypeKeys.CHANGEPASSWORD_COMPLETE, ActionTypeKeys.CHANGEPASSWORD_ERROR],
    promise: (client) => client.post('/api/manage/changepassword', { data: body })
  };
}
