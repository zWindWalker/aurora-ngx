import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CreateProjectComponent} from './containers/create-project.component';
import {SharedModule} from '../../shared/shared.module';
import {QuizComponent} from './components/quiz/quiz.component';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{
            path: '', component: CreateProjectComponent
        }])
    ],
    declarations: [
        CreateProjectComponent,
        QuizComponent
    ],
    exports: [CreateProjectComponent]
})
export class CreateProjectModule {
}
