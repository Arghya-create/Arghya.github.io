import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.setInterval(this.updateClock, 1);
    
  }
  title = 'arghya';

  // showClock(){
  //   if(window.innerWidth<950){
  //     document.getElementsByClassName('clock')
  //   }
  // }

  updateClock() {
    var now = new Date();
    var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate().toString(),
      yr = now.getFullYear().toString(),
      hou = now.getHours().toString(),
      min = now.getMinutes().toString(),
      sec = now.getSeconds().toString(),
      pe = "AM";

      if(now.getHours()==0){
        hou = '12';
      }
      if(now.getHours()>12){
        if(now.getHours()<10){
          hou='0'+(now.getHours()-12).toString();
        }
        hou=(now.getHours()-12).toString();
        pe="PM";
      }
      if(now.getHours()<10){
        hou='0'+now.getHours().toString();
      }
      if(now.getMinutes()<10){
        min='0'+now.getMinutes().toString();
      }
      if(now.getSeconds()<10){
        sec='0'+now.getSeconds().toString();
      }
     

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values:string[] = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
    for(var i=0;i<ids.length;i++){
      document.getElementById(ids[i])!.firstChild!.nodeValue = values[i];
    }
    // window.setTimeout("up")
  }


}
