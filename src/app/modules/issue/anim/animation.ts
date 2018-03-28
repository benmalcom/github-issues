import {animate, state, style, transition, trigger} from '@angular/animations';
const animations =  [
    trigger('fade', [
        // Transition Styles
        transition('void => *', [
            // 'From' styles
            style({
                opacity: 0.2,
            }),
            animate('1000ms ease-in',
                // 'To' styles
                // 1 - Comment this to remove the item's grow...
                style({
                    opacity: 1,
                })
            )
        ]),

        // :LEAVE TRANSITION
        // 2 - Uncomment this to apply the leave transition
         transition('* => void', [
          animate('1000ms ease-in-out',
            style({
              opacity: 0.2,
            })
          )
        ])
    ])
];
export default animations;

