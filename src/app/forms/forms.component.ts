import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  cityList: any[] = ['北京', '上海', '深圳', '广州', '东莞', '苏州', '杭州'];
  public mark: String = '';
  public date:Date=new Date();
  public hobby:any= [
    {
      item: "吃饭",
      flag: false
    }, {
      item: "睡觉",
      flag: false
    }, {
      item: "学习",
      flag: true
    }
  ];
  public peopleInfo: any = {
    userName: "",
    sex: "1",
    city: '北京',
    hobby: [{
      item: "",
      flag:false,
    }],
    mark: "",
    date:Date
  }
  
  constructor() { }
  ngOnInit(): void {
  }
  selectHobby() {
    this.peopleInfo.hobby = this.hobby;
    console.log(this.peopleInfo.hobby);
  }
  doSubmit() {
    //  var nameDom:any=document.getElementById('userName');
    //  console.log(nameDom.value);
    console.log(this.peopleInfo);
    this.peopleInfo.date = this.date;

  }
  keyUp() {
    this.mark = this.peopleInfo.mark;
    console.log(this.mark);
  }
}
