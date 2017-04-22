import { Component, ViewChild } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'event-manager',
  template: `
    <div id='container'>
      <div #ball class="ball"
        [style.left]="position.x + 'px'"
        [style.top]="position.y + 'px'">
      </div>
    </div>
    <div id='message'>Press arrows to move the circle</div>
  `,
  styles: [
    '#message { font-style: italic; }',
    '#container { height : 300px; width: 300px; border: 2px solid black; background-color: gray; }',
    '.ball { width: 80px; height: 80px; background: red; -moz-border-radius: 40px; -webkit-border-radius: 40px; border-radius: 50px; border: 1px solid black; position: relative; }'
  ]
})
export class EventManagerComponent {

  @ViewChild('ball') ball;

  position: any = { x: 110, y: 110 };

  constructor(private eventManager: EventManager) { 
    this.eventManager.addGlobalEventListener(
      'window',
      'keyup',
      (e) => {
        if (e.keyCode === 38 && this.position.y > 0) {
          // Up
          this.position.y -= 5;
        } else if (e.keyCode === 40 && this.position.y < 220) {
          // Down
          this.position.y += 5;
        } else if (e.keyCode === 37 && this.position.x > 0) {
          // Left
          this.position.x -= 5;
        } else if (e.keyCode === 39 && this.position.x < 220) {
          // Right
          this.position.x += 5;
        }
      }
    );
  }

}
