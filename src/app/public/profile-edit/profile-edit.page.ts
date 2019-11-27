import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {


  ngOnInit() {
    this.image = this.afAuth.auth.currentUser.photoURL;
  }
  profileForm: FormGroup;
  image;
  actionSheet: any;
  fileUrl: any = null;
  respData: any;
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;
  private imageCollection: AngularFirestoreCollection<MyData>;
  fileName: string;
  fileSize: number;
  isUploading: boolean;
  isUploaded: boolean;


  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public fb: FormBuilder,
    public camera: Camera,
    public afDb: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router: Router,
    private storage: AngularFireStorage,
    private database: AngularFirestore,
    public zone: NgZone,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private transfer: FileTransfer
  ) {
    this.isUploading = false;
    this.isUploaded = false;
    this.imageCollection = database.collection<MyData>('UserImages');
    this.images = this.imageCollection.valueChanges();

    this.profileForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  }
  // uploadFile(event: FileList) {
  //   // The File object
  //   const file = event.item(0);
  //    // Validation for Images Only
  //   if (file.type.split('/')[0] !== 'image') { 
  //    console.error('unsupported file type :( ')
  //    return;
  //   }
  //    this.isUploading = true;
  //   this.isUploaded = false;
  //   this.fileName = file.name;
  //   // The storage path
  //   const path = 'UserImages/U'+this.afAuth.auth.currentUser.uid;  
  //   // Totally optional metadata
  //   const customMetadata = { app: 'User images for Torusim app' };
  //   //File reference
  //   const fileRef = this.storage.ref(path);
  //   // The main task
  //   this.task = this.storage.upload(path, file, { customMetadata });
  //   // Get file progress percentage
  //   this.percentage = this.task.percentageChanges();
  //   this.snapshot = this.task.snapshotChanges().pipe(
  //       finalize(() => {
  //       // Get uploaded file storage path
  //       this.UploadedFileURL = fileRef.getDownloadURL();
  //       this.UploadedFileURL.subscribe(resp=>{
  //         this.addImagetoDB({
  //           name: file.name,
  //           filepath: resp,
  //           size: this.fileSize
  //         });
  //         this.image =  "https://firebasestorage.googleapis.com/v0/b/graduation-project-35720.appspot.com/o/UserImages%2FU"+this.afAuth.auth.currentUser.uid +"?alt=media&token=cbc23518-1ca8-4358-8c72-1b836620e2f6";          let userRef =this.afDb.database.ref('users/' + this.afAuth.auth.currentUser.uid);
  //         userRef.update({
  //           'imageURL':  "https://firebasestorage.googleapis.com/v0/b/graduation-project-35720.appspot.com/o/UserImages%2FU"+this.afAuth.auth.currentUser.uid +"?alt=media&token=cbc23518-1ca8-4358-8c72-1b836620e2f6"
  //         });

  //       },error=>{
  //         console.error(error);
  //       })
  //     }),
  //     tap(snap => {
  //         this.fileSize = snap.totalBytes;
  //     })
  //   )
  // }

  // addImagetoDB(image: MyData) {
  //   //Create an ID for document
  //   const id = this.database.createId();

  //   //Set document id with value in database
  //   this.imageCollection.doc(id).set(image).then(resp => {
  //     console.log(resp);
  //   }).catch(error => {
  //     console.log("error " + error);
  //   });
  // }

  backToUser() {
    this.router.navigate(["/tabs"]);

  }
  save(profile) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        if (profile.firstName != "") {
          user.updateProfile({
            displayName: profile.firstName + " " + profile.lastName,
          })
          if (profile.password != "") {
            user.updatePassword(profile.password);
          }
        }

      }
    });


  }

  cropUpload() {
    this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
      for (let i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.crop.crop(results[i], { quality: 100 })
            .then(
              newImage => {
                console.log('new image path is: ' + newImage);
                const fileTransfer: FileTransferObject = this.transfer.create();
                const uploadOpts: FileUploadOptions = {
                   fileKey: 'file',
                   fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
                };
  
                fileTransfer.upload(newImage, 'http://192.168.0.7:3000/api/upload', uploadOpts)
                 .then((data) => {
                   console.log(data);
                   this.respData = JSON.parse(data.response);
                   console.log(this.respData);
                   this.fileUrl = this.respData.fileUrl;
                 }, (err) => {
                   console.log(err);
                 });
              },
              error => console.error('Error cropping image', error)
            );
      }
    }, (err) => { console.log(err); });
  }


}
