import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuroraForm, FormService } from '@aurora-ngx/forms';
import _ from 'lodash';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, AfterViewInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  user_infor_form_config: AuroraForm[] = [
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
    }
  ];
  quiz_form_config: AuroraForm[] = [
    {
      name: 'question_1',
      id: '001',
      type: 'radio',
      label: 'What are you looking for',
      options: [
        {
          label: 'Kitchen',
          image: 'https://www.magnet.co.uk/imagevault/publishedmedia/s7azom6fq48lm8ahzlpf/yellow-category-selector-2.jpg',
          value: 'kitchen'
        },
        {
          label: 'Full home',
          image: 'http://marceladick.com/wp-content/uploads/2016/03/home-and-furniture-store-new-with-picture-of-home-and-ideas-fresh-at-design.jpg',
          value: 'full_home_interior'
        }
      ],
      validators: ['required'],
      feedback: {
        'required': 'Please select 1 of the option'
      },
      template: require('./templates/question_with_image.template').default
    },
    {
      name: 'question_2',
      id: '002',
      type: 'radio',
      label: 'Are you looking to design a new home or existing',
      options: [
        {
          label: 'New',
          value: 'new'
        },
        {
          label: 'Existing',
          value: 'existing',
          next_question_id: '005'
        }
      ],
      validators: ['required'],
      feedback: {
        'required': 'Please select 1 of the option'
      }
    },
    {
      name: 'question_3',
      id: '003',
      type: 'radio',
      label: `That's great. When do you expect to get possessions of your property`,
      value: 'already_have',
      options: [
        { label: 'Already have', value: 'already_have' },
        { label: 'Possession', value: 'possession' },
        { label: 'In 1-5 months', value: 'in_1_to_5_months' },
        { label: 'After 5 months', value: 'after_5_months' }
      ],
      feedback: {
        'required': 'Please select 1 of the option'
      }
    },
    {
      name: 'question_4',
      id: '004',
      type: 'radio',
      label: `Please select the rooms you want to design`,
      value: 'living_room',
      options: [
        { label: 'Living room', value: 'living_room' },
        { label: 'Bedroom', value: 'bedroom' },
        { label: 'Dining room ', value: 'dining_room' },
        { label: 'Kitchen', value: 'kitchen' },
        { label: 'Office', value: 'office' },
        { label: 'Other', value: 'other' }
      ],
      feedback: {
        'required': 'Please select 1 of the option'
      }
    },
    {
      name: 'question_5',
      id: '005',
      type: 'input',
      label: `Please enter the project name`,
      validators: ['required'],
      feedback: {
        'required': 'Please enter a name for your next Homeey project'
      }
    },
    {
      name: 'question_6',
      id: '006',
      type: 'radio',
      label: `When do you plan to get started?`,
      options: [
        { label: 'Right away', value: 'right_away' },
        { label: 'In a few months', value: 'few_months' },
        { label: 'Exploring for', value: 'exploring' },
        { label: 'Now', value: 'now' }
      ],
      validators: ['required'],
      feedback: {
        'required': 'Please select 1 of the option'
      }
    },
    {
      name: 'question_7',
      id: '007',
      type: 'radio',
      label: `What's your budget?`,
      options: [
        { label: ' > 100m VND', value: 'over_100m' },
        { label: '50-100m VND', value: '50-100m' },
        { label: '1-50m', value: '1-50m' },
        { label: ' < 1m', value: 'under_1m' }
      ],
      validators: ['required'],
      feedback: {
        'required': 'Please select 1 of the option'
      }
    },
    {
      name: 'question_8',
      id: '008',
      label: `That's it. We're ready to go`,
      skip: true
    }
  ];

  carousel_config = {
    'slide_0': this.user_infor_form_config
  };

  form_config: AuroraForm[] = [
    ...this.user_infor_form_config,
    ...this.quiz_form_config
  ];

  index = 0;
  skip = [];

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private cd: ChangeDetectorRef, private formSvs: FormService) {
  }

  ngOnInit() {
    _.each(this.quiz_form_config, (item, i) => {
      _.assign(this.carousel_config, {}, {
        [`slide_${i + 1}`]: [item]
      });
    });
  }


  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }


///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onSubmit = form_data => {
    console.log(form_data);
  };

  onSelectAnswer = e => {
    if (e.selected_option && e.selected_option.next_question_id) {
      const quiz_array = _.flatten(_.drop(_.values(this.carousel_config)));
      const from_index = _.findIndex(quiz_array, ['id', e.config.id]);
      const to_index = _.findIndex(quiz_array, ['id', e.selected_option.next_question_id]);
      const number_of_step = to_index - from_index - 1;

      _.times(number_of_step, n => {
        this.skip.push(this.index + n + 1);
      });
    }
    else if (this.index < Math.min(...this.skip)) this.skip = [];

  };
  prevSlide = () => {
    do {
      this.index -= 1;
    } while (this.skip.includes(this.index) && this.index !== 0);
  };

  nextSlide = () => {
    let form_valid = true;
    _.each(this.carousel_config[`slide_${this.index}`], (form_control, i) => {
      this.formSvs._markAsDirty(form_control.name);
      form_valid = form_valid && this.formSvs._getControlValid(form_control.name);
    });

    if (form_valid) {
      do {
        this.index += 1;
      } while (this.skip.includes(this.index) && this.index !== _.keys(this.carousel_config).length - 1);
    }
  };
}