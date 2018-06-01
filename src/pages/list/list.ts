import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  selectedItem: any;
  icons: string[];
  users: any;
  items: Array<{title: string, note: string, icon: string}>;

  todo = {}


  apiUrl = 'http://localhost:3000/api';


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
    this.getUsersFront();
  }


  // consumo front
  getUsersFront() {
    this.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  // metodo api
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/produtos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  addUser(data) {
    data = JSON.stringify(this.todo);
    console.log(data);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/produtos', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  };
tlist
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
