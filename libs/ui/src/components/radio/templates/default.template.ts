export default `
    <div class="radio_container">
    <div
            class="radio_button"
            (click)="change.emit(value)"
            [class.active]="is_selected"
    ></div>
    <label>{{label}}</label>
</div>
`