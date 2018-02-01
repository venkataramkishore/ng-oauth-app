import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input('show')
  public show: boolean;

  @Input('message')
  public message: string;

  @Input('type')
  public type: string;

  @Input('title')
  public title: string;

  constructor() { }

  ngOnInit() {
    this.show = false;
    this.title = 'Success';
    this.message = 'A sample message';
    this.type = 'success';
  }

}
