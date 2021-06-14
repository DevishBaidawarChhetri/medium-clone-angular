import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import { ArticleService as SharedArticleService} from "src/app/shared/services/article.service";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/getArticle.action";

@Injectable()

export class GetArticleEffect {

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
  ){}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => { // destructuing slug so directly => {slug}
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article})
          }),
          catchError(() => {
            return of(
              getArticleFailureAction()
            )
          })
        )
      })
    )
  )
}
