import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  number="0";
  sum = 0;

  myCardStyle="style1";
  btnCaption="change to style 2";

  btnAddNumberClick(){
    this.sum=this.sum+Number(this.number);
  }

  btnChangeStyleClick(){
    if(this.myCardStyle === "style1") {
      this.myCardStyle = "style2"
      this.btnCaption = "change to style 1"
    } else {
      this.myCardStyle = "style1"
      this.btnCaption = "change to style 2"
    }
  }

}
