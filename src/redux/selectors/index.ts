import { RootState } from "../rootReduser";

export const dataSelector = (state: RootState) => state.receivedData;
export const privateRoute = (state: RootState) => state.privateRout;
export const userInfoselector = (state: RootState) => state.userInfo;
export const isLoading = (state: RootState) => state.isLoading;
export const numberUsers = (state: RootState) => state.numberUsers;
export const isDataFetchError = (state: RootState) => state.isDataFetchError;
export const isActiveButtonSelector = (state: RootState) => state.isActiveButton;
export const isLanguage = (state: RootState) => state.isLanguage;
export const stateSelector = (state: RootState) => state;
