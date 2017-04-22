import { Component } from '@angular/core';

@Component({
  selector: 'ng-template-outlet',
  template: `
    <ng-container 
      *ngTemplateOutlet="product; context: {item:item1}">
    </ng-container>
    
    <ng-container 
      [ngTemplateOutlet]="product"
      [ngOutletContext]="{item:item2}">
    </ng-container>

    <ng-template #product let-myproduct="item">
      <div>
        {{ myproduct. name }} - {{ myproduct.type }}
      </div>
    </ng-template>
  `
})
export class NgTemplateOutletComponent {

  item1 = { name: 'Emonda SL5',     type: 'bike'  };
  item2 = { name: 'Go Meb Speed 3', type: 'shoes' };

}
