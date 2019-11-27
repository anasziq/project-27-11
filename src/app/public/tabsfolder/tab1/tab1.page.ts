import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList,AngularFireAction  } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(
    private fireauth :AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase     
     ) { }
  userName;
  userEmail;
  userRank;
  userphoto;
  ngOnInit() {
    this.userName = this.fireauth.auth.currentUser.displayName;
    this.userEmail = this.fireauth.auth.currentUser.email;
    //this.userphoto = this.fireauth.auth.currentUser.photoURL;
    this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value',(snapshot)=>{
      this.userphoto = snapshot.val().imageURL;
     
    });
    this.userRank = 0;
  }
  logout(){
    console.log(this.fireauth.auth.currentUser.email);
    
     
      return this.fireauth.auth.signOut().then(() => {
        this.router.navigate(['login']);
      })
  }
}
