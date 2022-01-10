import { RootState } from "../rootReduser";

export const dataSelector = (state: RootState) => state.receivedData;
export const privateRoute = (state: RootState) => state.privateRoute;
export const userInfoSelector = (state: RootState) => state.userInfo;
export const isLoading = (state: RootState) => state.isLoading;
export const setPageNumber = (state: RootState) => state.pageNumber;
export const isDataFetchError = (state: RootState) => state.isDataFetchError;
export const isActiveButtonSelector = (state: RootState) => state.isActiveButton;
export const languageSelector = (state: RootState) => state.localLanguage;
export const isUsersSelector = (state: RootState) => state.isUsers;
export const stateSelector = (state: RootState) => state;
