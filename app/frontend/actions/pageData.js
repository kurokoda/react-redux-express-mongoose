import {CALL_API} from '../shared-fe/middleware/api';

export const PAGE_DATA_FETCH_SUCCESS = Symbol('PAGE_DATA_FETCH_SUCCESS');
export const PAGE_DATA_FETCH_FAILURE = Symbol('PAGE_DATA_FETCH_FAILURE');
export const PAGE_DATA_PURGE         = Symbol('PAGE_DATA_PURGE');

export function fetchPageData(page, afterSuccess, afterError) {
  return {
    [CALL_API]: {
      method     : 'post',
      path       : '/api/fetchPageData',
      body       : {page},
      successType: PAGE_DATA_FETCH_SUCCESS,
      failureType: PAGE_DATA_FETCH_FAILURE,
      afterSuccess,
      afterError
    }
  }
}

export function purgePageData() {
  return {
    type: PAGE_DATA_PURGE
  };
}