import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateProjectComponent } from './containers/create-project.component';
import { SharedModule } from '../../shared/shared.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { QuizComponent } from './components/quiz/quiz.component';


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
    QuizComponent
  ],
  exports: [CreateProjectComponent]
})
export class CreateProjectModule {
}
