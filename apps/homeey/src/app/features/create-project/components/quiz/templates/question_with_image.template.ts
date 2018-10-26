export default `
    <div class="radio_container"  (click)="change.emit(option?.value)">
        <div
                class="radio_button"
                [class.active]="is_selected"
        ></div>
        <img class="img-responsive" [src]="option?.image" alt="">
        <h2>{{option?.label}}</h2>
</div>
`