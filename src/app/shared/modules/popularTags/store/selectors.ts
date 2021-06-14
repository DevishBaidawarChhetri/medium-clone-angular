import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/appState.interface";
import { PopularTagsStateInterface } from "../types/popularTagState.interface";

export const popularTagsFeatureSelector = createFeatureSelector<
AppStateInterface, PopularTagsStateInterface
>('popularTags')

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector, (popularTagState: PopularTagsStateInterface) => popularTagState.data
)

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector, (popularTagState: PopularTagsStateInterface) => popularTagState.isLoading
)

export const errorSelector = createSelector(
  popularTagsFeatureSelector, (popularTagState: PopularTagsStateInterface) => popularTagState.error
)
