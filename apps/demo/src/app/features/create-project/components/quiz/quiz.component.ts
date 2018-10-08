import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuroraForm, AuroraFormTemplate} from '@aurora-ngx/forms';
import _ from 'lodash';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
    ///-----------------------------------------------  Variables   -----------------------------------------------///
    @Input() visible: Boolean;
    @Output() close = new EventEmitter();
    form_config: AuroraForm[] = [
        {
            type: 'input',
            name: 'name',
            label: 'Name'
        },
        {
            type: 'input',
            input_type: 'email',
            name: 'email',
            label: 'E-mail'
        },
        {
            type: 'input',
            input_type: 'number',
            name: 'mobile',
            label: 'Mobile'
        },
        {
            type: 'input',
            name: 'property_name',
            label: 'Property Name'
        },
        {
            type: 'input',
            name: 'city',
            label: 'City'
        },
        {
            type: 'input',
            name: 'post_code',
            label: 'Post code'
        },
        {
            name: 'question_1',
            type: 'radio',
            label: 'What are you looking for',
            options: [
                {label: 'Kitchen', value: 'kitchen'},
                {label: 'Full home interior', value: 'full_home_interior'}
            ]
        },
        {
            name: 'question_2',
            type: 'radio',
            label: 'Are you looking to design a new home or existing',
            options: [
                {label: 'New', value: 'new'},
                {label: 'Existing', value: 'existing'}
            ]
        },
        {
            name: 'question_3',
            type: 'radio',
            label: `That's great. When do you expect to get possessions of your property`,
            options: [
                {label: 'Already have', value: 'already_have'},
                {label: 'Possession', value: 'possession'},
                {label: 'In 1-5 months', value: 'in_1_to_5_months'},
                {label: 'After 5 months', value: 'after_5_months'}
            ]
        },
        {
            name: 'question_4',
            type: 'radio',
            label: `Please select the rooms you want to design`,
            options: [
                {label: 'Living room', value: 'living_room'},
                {label: 'Bedroom', value: 'bedroom'},
                {label: 'Dining room ', value: 'dining_room'},
                {label: 'Kitchen', value: 'kitchen'},
                {label: 'Office', value: 'office'},
                {label: 'Other', value: 'other'}
            ]
        },
        {
            name: 'question_5',
            type: 'radio',
            label: `When do you plan to get started?`,
            options: [
                {label: 'Right away', value: 'right_away'},
                {label: 'In a few months', value: 'few_months'},
                {label: 'Exploring for', value: 'exploring'},
                {label: 'Now', value: 'now'}
            ]
        },
        {
            name: 'question_6',
            type: 'radio',
            label: `What's your budget?`,
            options: [
                {label: ' > 100m VND', value: 'over_100m'},
                {label: '50-100m VND', value: '50-100m'},
                {label: '1-50m', value: '1-50m'},
                {label: ' < 1m', value: 'under_1m'}
            ]
        },
        {
            name: 'question_7',
            label: `That's it. We're ready to go`
        }
    ];

    user_info_template = ['name', 'email', 'mobile', 'property_name', 'city', 'city', 'post_code'];
    quiz_template = _.compact(_.map(this.form_config, item => {
        return (_.startsWith(item.name, 'question')) ? item.name : null;
    }));

    form_template_config: AuroraFormTemplate = {};
    quiz_formatted_data;

    index = 0;
    data = [
        {
            id: '0001',
            question: 'What are you looking for',
            options: [
                {label: 'Kitchen', value: 'kitchen'},
                {label: 'Full home interior', value: 'full_home_interior'}
            ]
        },
        {
            id: '0002',
            question: 'Are you looking to design a new home or existing',
            options: [
                {label: 'New', value: 'new'},
                {label: 'Existing', value: 'existing'}
            ]
        },
        {
            id: '0003',
            question: `That's great. When do you expect to get possessions of your property`,
            options: [
                {label: 'Already have', value: 'already_have'},
                {label: 'Possession', value: 'possession'},
                {label: 'In 1-5 months', value: 'in_1_to_5_months'},
                {label: 'After 5 months', value: 'after_5_months'}
            ]
        },
        {
            id: '0004',
            question: `Please select the rooms you want to design`,
            options: [
                {label: 'Living room', value: 'living_room'},
                {label: 'Bedroom', value: 'bedroom'},
                {label: 'Dining room ', value: 'dining_room'},
                {label: 'Kitchen', value: 'kitchen'},
                {label: 'Office', value: 'office'},
                {label: 'Other', value: 'other'}
            ]
        },
        {
            id: '0005',
            question: `When do you plan to get started?`,
            options: [
                {label: 'Right away', value: 'right_away'},
                {label: 'In a few months', value: 'few_months'},
                {label: 'Exploring for', value: 'exploring'},
                {label: 'Now', value: 'now'}
            ]
        },
        {
            id: '0006',
            question: `What's your budget?`,
            options: [
                {label: ' > 100m VND', value: 'over_100m'},
                {label: '50-100m VND', value: '50-100m'},
                {label: '1-50m', value: '1-50m'},
                {label: ' < 1m', value: 'under_1m'}
            ]
        }
    ];


    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {

        this.form_template_config.user_info = this.user_info_template;

        _.each(this.quiz_template, item => {
            this.form_template_config[item] = [item];
        });

        this.quiz_formatted_data = _.keys(this.form_template_config);
    }


    ///-----------------------------------------------  Main Functions   -----------------------------------------------///

    previousQuiz = () => {
        if (this.index !== 0) {
            this.index -= 1;
            this.cd.markForCheck();
        }
    };

    nextQuiz = () => {
        if (this.index !== this.data.length + 1) {
            this.index += 1;
            this.cd.markForCheck();
        } else {
            this.close.emit();
            this.resetQuiz();
        }
    };

    resetQuiz = () => {
        this.index = 0;
        this.cd.markForCheck();
    };

}
