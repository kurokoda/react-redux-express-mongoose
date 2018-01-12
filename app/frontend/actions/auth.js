import {CALL_API} from '../shared-fe/middleware/api';

export const LOGIN_SUCCESS  = Symbol('LOGIN_SUCCESS');
export const SIGNUP_SUCCESS = Symbol('SIGNUP_SUCCESS');
export const LOGOUT_SUCCESS = Symbol('LOGOUT_SUCCESS');


export function login(username, password) {
  return {
    [CALL_API]: {
      method     : 'post',
      path       : '/api/login',
      body       : {username, password},
      successType: LOGIN_SUCCESS
    }
  };
}

export function logout() {
  return {
    [CALL_API]: {
      method     : 'get',
      path       : '/api/logout',
      successType: LOGOUT_SUCCESS
    }
  };
}

export function signup(username, password) {
  return {
    [CALL_API]: {
      method     : 'post',
      path       : '/api/login',
      body       : {username, password},
      successType: SIGNUP_SUCCESS
    }
  };
}
