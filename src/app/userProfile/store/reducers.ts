import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { UserProfileStateInterface } from "../types/userProfileState.interface";
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from "./actions/getUserProfile.action";

const initialState: UserProfileStateInterface = {
  data: null,
  isLoading: false,
  error: null,
}

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, aciton): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: aciton.userProfile
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
)

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action);
}
