import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap} from "rxjs/operators";

import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/getArticle.action";

@Injectable()

export class GetArticleEffect {

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
    private router: Router,
  ){}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({article})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getArticleFailureAction()
            )
          })
        )
      })
    )
  )
}
