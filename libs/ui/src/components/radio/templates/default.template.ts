export default `
    <div 
        class="radio_container" 
         (click)="!is_selected && change.emit(option?.value)"
     >
        <div
                class="radio_button"
              
                [class.active]="is_selected"
        ></div>
        <label>{{option?.label}}</label>
</div>
`