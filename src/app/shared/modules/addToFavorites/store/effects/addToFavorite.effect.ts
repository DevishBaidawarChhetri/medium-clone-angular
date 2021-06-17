import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import { ArticleInterface } from "src/app/shared/types/article.interface";
import { AddToFavoriteService } from "../../services/addToFavorites.service";
import { addToFavoritesAction, addToFavoritesFailureAction, addToFavoritesSuccessAction } from "../actions/addToFavorites.action";

@Injectable()

export class AddToFavoritesEffect {

  constructor(
    private actions$: Actions,
    private addToFavoriteService: AddToFavoriteService,
  ){}

  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({isFavorited, slug}) => {
        const article$ = isFavorited
          ? this.addToFavoriteService.removeFromFavorites(slug)
          : this.addToFavoriteService.addToFavorites(slug)
        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({article})
          }),
          catchError(() => {
            return of(
              addToFavoritesFailureAction()
            )
          })
        )
      })
    )
  )
}