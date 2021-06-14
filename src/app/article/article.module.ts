import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticleService } from "../shared/services/article.service";
import { ArticleComponent } from "./components/article/article.component";

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArticleComponent
  ],
  providers: [
    ArticleService
  ]
})

export class ArticleModule {}
