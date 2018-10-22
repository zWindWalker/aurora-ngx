export default `
    <div class="radio_container">
    <div
            class="radio_button"
            (click)="change.emit(value)"
            [class.active]="is_selected"
    ></div>
    <img class="img-responsive" [src]="label" alt="">
</div>
`