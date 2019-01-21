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
          "stage_no":1,
          "arm_count":4,
          "arms":[
            // arm1
            {
              "mode":"vehicular",
              "arm_id":1,
              "active_lamps": [
                  // "green_straight",
                  // "green_left",
                  "green_right",
                  // "u_turn",
                  // "red",
                  // "amber"
                ],
              "flashing_lamps":[],
              "time":30
            },
            // arm 2
           {
              "mode":"filter_green",
              "arm_id":2,
              "active_lamps": [
                // "green_straight",
                // "green_left"
                // "green_right",
                ],
              "flashing_lamps":[],
              "time":30
            },
            // arm 3
            {
              "mode":"vehicular",
              "arm_id":3,
              "active_lamps": [
                  // "green_straight",
                  // "green_left"
                  // "green_right",
                  // "u_turn",
                  // "amber",
                  
                  // "red"
                ],
              "flashing_lamps":[],
              "time":30
            },
            // arm 4
           {
              "mode":"filter_green",
              "arm_id":4,
              "active_lamps": [
                // "green_straight",
                // "green_left",
                // "green_right",
                // "amber",
                // "red",
                // "green_pedestrian"
                ],
              "flashing_lamps":[],
              "time":30
            },
            // // // arm 5
            // {
            //   "mode":"filter_green",
            //   "arm_id":4,
            //   "active_lamps": [
            //     // "green_straight",
            //     // "green_left",
            //     // "green_right"
            //     ],
            //   "flashing_lamps":[],
            //   "time":30
            // },
            // // arm 6
            // {
            //   "mode":"filter_green",
            //   "arm_id":4,
            //   "active_lamps": [
            //     // "green_straight",
            //     // "green_left",
            //     // "green_right"
            //     ],
            //   "flashing_lamps":[],
            //   "time":30
            // },
            // // arm 7
            // {
            //   "mode":"filter_green",
            //   "arm_id":4,
            //   "active_lamps": [
            //     // "green_straight",
            //     // "green_left",
            //     // "green_right"
            //     ],
            //   "flashing_lamps":[],
            //   "time":30
            // },
            // // arm 8
            // {
            //   "mode":"filter_green",
            //   "arm_id":4,
            //   "active_lamps": [
            //     // "green_straight",
            //     // "green_left",
            //     // "green_right",
            //     // "u_turn"
            //     ],
            //   "flashing_lamps":[],
            //   "time":30
            // }
            ]
          },

          // STAGE 2
          {
            "stage_no":1,
            "arm_count":4,
            "arms":[
              // arm1
              {
                "mode":"vehicular",
                "arm_id":1,
                "active_lamps": [
                    // "green_straight",
                    // "green_left",
                    "green_right",
                    // "amber"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 2
             {
                "mode":"filter_green",
                "arm_id":2,
                "active_lamps": [
                  "green_straight",
                  // "green_left"
                  "green_right",
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 3
              {
                "mode":"vehicular",
                "arm_id":3,
                "active_lamps": [
                    // "green_straight",
                    "green_left",
                    // "green_right",
                    // "u_turn",
                    // "amber",
                    // "red"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 4
             {
                "mode":"filter_green",
                "arm_id":4,
                "active_lamps": [
                  // "green_straight",
                  "green_left",
                  // "green_right",
                  // "amber",
                  // "red",
                  // "green_pedestrian"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // // arm 5
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 6
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 7
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 8
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right",
              //     // "u_turn"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // }
              ]
            },

          // STAGE 3
          {
            "stage_no":1,
            "arm_count":4,
            "arms":[
              // arm1
              {
                "mode":"vehicular",
                "arm_id":1,
                "active_lamps": [
                    // "green_straight",
                    // "green_left",
                    // "green_right",
                    // "amber",
                    "red",
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 2
             {
                "mode":"filter_green",
                "arm_id":2,
                "active_lamps": [
                  "green_straight",
                  // "green_left"
                  // "green_right",
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 3
              {
                "mode":"vehicular",
                "arm_id":3,
                "active_lamps": [
                    // "green_straight",
                    // "green_left"
                    // "green_right",
                    // "u_turn",
                    // "amber",
                    "red",
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 4
             {
                "mode":"filter_green",
                "arm_id":4,
                "active_lamps": [
                  "green_straight",
                  // "green_left",
                  // "green_right",
                  // "amber",
                  // "red",
                  // "green_pedestrian"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // // arm 5
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 6
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 7
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 8
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right",
              //     // "u_turn"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // }
              ]
            },

          // STAGE 4
          {
            "stage_no":1,
            "arm_count":4,
            "arms":[
              // arm1
              {
                "mode":"vehicular",
                "arm_id":1,
                "active_lamps": [
                    "green_straight",
                    // "green_left",
                    // "green_right",
                    // "amber"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 2
             {
                "mode":"filter_green",
                "arm_id":2,
                "active_lamps": [
                  // "green_straight",
                  // "green_left"
                  // "green_right",
                  "red",
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 3
              {
                "mode":"vehicular",
                "arm_id":3,
                "active_lamps": [
                    "green_straight",
                    // "green_left"
                    // "green_right",
                    // "u_turn",
                    // "amber",
                    // "red"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 4
             {
                "mode":"filter_green",
                "arm_id":4,
                "active_lamps": [
                  // "green_straight",
                  // "green_left",
                  // "green_right",
                  // "amber",
                  "red",
                  // "green_pedestrian"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // // arm 5
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 6
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 7
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 8
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right",
              //     // "u_turn"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // }
              ]
            },

          // STAGE 4
          {
            "stage_no":1,
            "arm_count":4,
            "arms":[
              // arm1
              {
                "mode":"vehicular",
                "arm_id":1,
                "active_lamps": [
                    // "green_straight",
                    "green_left",
                    // "green_right",
                    // "amber"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 2
             {
                "mode":"filter_green",
                "arm_id":2,
                "active_lamps": [
                  // "green_straight",
                  "green_left"
                  // "green_right",
                  // "red",
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 3
              {
                "mode":"vehicular",
                "arm_id":3,
                "active_lamps": [
                    // "green_straight",
                    // "green_left"
                    // "green_right",
                    // "u_turn",
                    // "amber",
                    // "red",
                    "amber"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // arm 4
             {
                "mode":"filter_green",
                "arm_id":4,
                "active_lamps": [
                  "green_straight",
                  // "green_left",
                  // "green_right",
                  // "amber",
                  // "red",
                  // "green_pedestrian"
                  ],
                "flashing_lamps":[],
                "time":30
              },
              // // arm 5
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 6
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 7
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // },
              // // arm 8
              // {
              //   "mode":"filter_green",
              //   "arm_id":4,
              //   "active_lamps": [
              //     // "green_straight",
              //     // "green_left",
              //     // "green_right",
              //     // "u_turn"
              //     ],
              //   "flashing_lamps":[],
              //   "time":30
              // }
              ]
            },
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
