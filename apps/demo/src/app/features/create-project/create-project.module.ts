import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateProjectComponent } from './containers/create-project.component';
import { SharedModule } from '../../shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizDirective } from './directives/quiz.directive';
import { QuizItemComponent } from './components/quiz/quiz-item.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: CreateProjectComponent
    }])
  ],
  declarations: [
    CreateProjectComponent,
    UserInfoComponent,
    QuizComponent,
    QuizDirective, QuizItemComponent
  ],
  exports: [CreateProjectComponent],
  entryComponents: [
    QuizItemComponent
  ]
})
export class CreateProjectModule {
}
