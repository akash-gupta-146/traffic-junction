import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent implements OnInit {

  constructor() { }
 
  arms;
  angle;
  junctionSequence = [
    // STAGE 1
        {
          "arms":[
            // arm1
            {
              "name":"Arm 1",
              "slaves": [
                "S1",
                "S2",
                "S3"
              ],
              "detectors":[
                "D1",
                "D2",
                "D3"
              ],
              "poles":[
                "P1",
                "P2"
              ]
            },
            // arm2
            {
              "name":"Arm 1",
              "slaves": [
                "S1",
                "S2",
                "S3"
              ],
              "detectors":[
                "D1",
                "D2",
                "D3"
              ],
              "poles":[
                "P1",
                "P2"
              ]
            },
            // arm3
            {
              "name":"Arm 1",
              "slaves": [
                "S1",
                "S2",
                "S3"
              ],
              "detectors":[
                "D1",
                "D2",
                "D3"
              ],
              "poles":[
                "P1",
                "P2"
              ]
            },
            // // arm4
            // {
            //   "name":"Arm 1",
            //   "slaves": [
            //     "S1",
            //     "S2",
            //     "S3"
            //   ],
            //   "detectors":[
            //     "D1",
            //     "D2",
            //     "D3"
            //   ],
            //   "poles":[
            //     "P1",
            //     "P2"
            //   ]
            // },
            // // arm 5
            // {
            //   "name":"Arm 1",
            //   "slaves": [
            //     "S1",
            //     "S2",
            //     "S3"
            //   ],
            //   "detectors":[
            //     "D1",
            //     "D2",
            //     "D3"
            //   ],
            //   "poles":[
            //     "P1",
            //     "P2"
            //   ]
            // },
            // // arm 6
            // {
            //   "name":"Arm 1",
            //   "slaves": [
            //     "S1",
            //     "S2",
            //     "S3"
            //   ],
            //   "detectors":[
            //     "D1",
            //     "D2",
            //     "D3"
            //   ],
            //   "poles":[
            //     "P1",
            //     "P2"
            //   ]
            // },
            // // arm 7
            // {
            //   "name":"Arm 1",
            //   "slaves": [
            //     "S1",
            //     "S2",
            //     "S3"
            //   ],
            //   "detectors":[
            //     "D1",
            //     "D2",
            //     "D3"
            //   ],
            //   "poles":[
            //     "P1",
            //     "P2"
            //   ]
            // },
            // // arm 8
            // {
            //   "name":"Arm 1",
            //   "slaves": [
            //     "S1",
            //     "S2",
            //     "S3"
            //   ],
            //   "detectors":[
            //     "D1",
            //     "D2",
            //     "D3"
            //   ],
            //   "poles":[
            //     "P1",
            //     "P2"
            //   ]
            // },
            ]
          }

        ]

armLength = this.junctionSequence[0].arms.length;
  

  ngOnInit() {
    this.displayArms();
    this.armLength = this.junctionSequence['arm_count'];
  }

  displayArms(){
    switch(this.armLength){
      case  2:
        this.arms= [1,2]
        console.log('creating 2 arm junction');
        this.angle = 180;
        break;

        case  3:
          this.arms= [1,2,3]
          console.log('creating 3 arm junction');
          this.angle = 90;
          break;

        case  4:
        this.arms= [1,2,3,4]
          console.log('creating 4 arm junction');
          this.angle = 90;
          break;

        case  5:
        this.arms= [1,2,3,4,5]
          console.log('creating 5 arm junction');
          this.angle = 72;
          break;

        case  6:
        this.arms= [1,2,3,4,5,6]
          console.log('creating 6 arm junction');
          this.angle = 60;
          break;

        case  7:
        this.arms= [1,2,3,4,5,6,7]
          console.log('creating 7 arm junction');
          this.angle = 51.42;
          break;

        case  8:
        this.arms= [1,2,3,4,5,6,7,8]
          console.log('creating 8 arm junction');
          this.angle = 45;
          break;

        default:
          console.log('hello i am in default '+this.armLength);
    }
  }

}
