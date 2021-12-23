import { RootState } from "../rootReduser";

export const dataSelector = (state: RootState) => state.receivedData;
export const privateRoute = (state: RootState) => state.privateRout;
export const isPageGender = (state: RootState) => state.isPageGender;
export const userInfoselector = (state: RootState) => state.userInfo;
export const isLoading = (state: RootState) => state.isLoading;
export const numberUsers = (state: RootState) => state.numberUsers;
export const isDataFetchErrorSelector = (state: RootState) => state.isDataFetchError;
