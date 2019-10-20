import {initialState} from './initialState';

export const UPDATE_MOBILE = (state, mobile) => {
  state.mobile = mobile;
};

export const UPDATE_IS_MOBILE_VERIFIED = (state, isMobileVerified) => {
  state.isMobileVerified = isMobileVerified;
};

export const CLEAR_ALL_DATA = (state) => {
  state.mobile = initialState.mobile;
  state.isMobileVerified = initialState.isMobileVerified;
};
