import { Component } from "@angular/core";

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss']
})

export class CreateArticleComponent {
  initialValues = {
    title: 'Foo',
    description: 'Bar',
    body: 'Baz',
    tagList: ['123', '456']
  }

  onSubmit(res: any): void {
    console.log('res', res);
  }
}
