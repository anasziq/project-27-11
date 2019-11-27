import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
//import { } from '@google/maps';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { GeoService } from '../../../geo.service';


declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {


  @ViewChild('gmap', {static:false}) gmapElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsRenderer = new google.maps.DirectionsRenderer;
  directionForm: FormGroup;
  currentLocation: any = {
    lat: 31.9753,
    lng: 35.1960
  };
  markers: any;
  subscription: any;
  points: any;
   map:any;


  constructor(private fb: FormBuilder,private geolocation: Geolocation,private geo: GeoService) {
    this.createDirectionForm();
  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  ngAfterViewInit():void{
  
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
   
  });
  const mapOptions = {
    zoom:10,
    center: this.currentLocation//chicago
  }
  this.map = new google.maps.Map(this.gmapElement.nativeElement,mapOptions);
  console.log("lat= ",this.currentLocation.lat,"lng = ",this.currentLocation.lng);
    console.log("i will display");


    
    this.directionsRenderer.setMap(this.map);

 
   
    console.log("finished disp");
  }

  calculateAndDisplayRouteN() {
    this.findWaypoints();

    const that = this;
    console.log("im here");
    this.directionsService.route({
      origin: this.currentLocation,
      destination: this.directionForm.value.destination, //{lat:32.2227, lng:35.2621},
     
     waypoints:[
      {location: {lat:31.9038, lng:35.2034}, stopover: true},
      {location: {lat:31.7683, lng:35.2137}, stopover: true},
    ],
      //destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    console.log("fineshed");
  }

  findWaypoints(){

    this.getUserLocation();
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits);

    //let marker = new Array( this.markers.length);
    //let marker;
    console.log("my markers1 = ",this.markers);
    let i=0 ;
    for(i =0; i< this.markers.length;i++){
      // add marker to the map at the point from the database.
      let marker = new google.maps.Marker({
        position: {lat:this.markers[i].location[0], lng:this.markers[i].location[1]},
        map: this.map,
        clickable: true
      }); 
      // adding info window to each marker.   
      marker.infowindow = new google.maps.InfoWindow({
        content: "you are "+Math.round(this.markers[i].distance) +"KM from this point" ,
        maxWidth: 400
      });

      google.maps.event.addListener(marker, 'click', function(){
        marker.infowindow.open(this.map, marker);
      });
      // marker.addListener('click', function() {
      //   marker.infowindow.open(this.map, marker[i]);
      // });
    }
    
  }

  calculateAndDisplayRoute() {

    this.findWaypoints();

    console.log("value = ", this.directionForm.value);
    const that = this;
    console.log("im here");
    this.directionsService.route({
      origin: this.currentLocation,
      destination: this.directionForm.value.destination, //{lat:32.2227, lng:35.2621},
      //destination: formValues.destination,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    console.log("fineshed");
  }
  
  ngOnInit(){
    this.getUserLocation();
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits);

    let marker; 
    this.markers.forEach(element => {
       marker = new google.maps.Marker({
         position: {lat:element.location[0], lng:element.location[1]},
         map: this.map,
       }); 
     });

    console.log("my markers = ",this.markers);
    
  }

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.currentLocation.lat = position.coords.latitude;
        this.currentLocation.lng = position.coords.longitude;
 
        this.geo.getLocations(100, [this.currentLocation.lat, this.currentLocation.lng]);
 
      });
    }
  }
 
}
