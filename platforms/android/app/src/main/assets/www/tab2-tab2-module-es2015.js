(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/public/tabsfolder/tab2/tab2.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/public/tabsfolder/tab2/tab2.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\n\n    <ion-menu side=\"start\">\n\n        <ion-header>\n            <ion-toolbar translucent>\n                <ion-title>Menu</ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content>\n\n            <ion-list>\n                <ion-item button detail (click)='getAllPlaces()'>\n                    <ion-icon name=\"md-trending-up\" slot=\"start\"></ion-icon>\n                    <ion-label>All Places</ion-label>\n                </ion-item>\n                <ion-item button detail (click)='getMostPopular()'>\n                    <ion-icon name=\"md-trending-up\" slot=\"start\"></ion-icon>\n                    <ion-label>Most Popular</ion-label>\n                </ion-item>\n                <ion-item button detail (click)='getVisited()'>\n                    <ion-icon name=\"md-done-all\" slot=\"start\"></ion-icon>\n                    <ion-label>Visited</ion-label>\n                </ion-item>\n\n                <ion-item button detail (click)='getSaved()'>\n                    <ion-icon name=\"ios-bookmark\" slot=\"start\"></ion-icon>\n                    <ion-label>Saved</ion-label>\n                </ion-item>\n\n                <ion-item button detail (click)='getNear()'>\n                    <ion-icon name=\"ios-locate\" slot=\"start\"></ion-icon>\n                    <ion-label>Near to me</ion-label>\n                </ion-item>\n\n            </ion-list>\n\n        </ion-content>\n    </ion-menu>\n\n\n\n\n    <div class=\"ion-page\" main>\n        <ion-header>\n            <ion-toolbar>\n                <ion-buttons slot=\"start\">\n                    <ion-menu-button></ion-menu-button>\n                </ion-buttons>\n                <ion-title>Home</ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content class=\"ion-padding\">\n            <h4>{{wherIam}}</h4>\n\n\n            <!-- all places -->\n            <div *ngFor=\"let item of items$   | async json\">\n                <ion-card *ngIf=\"allplaces\">\n                    <img src={{item.payload.val().url}} />\n                    <ion-card-header>\n                        <ion-card-subtitle>Destination</ion-card-subtitle>\n                        <ion-card-title>{{item.payload.val().name}}</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                        {{item.payload.val().description}}\n                    </ion-card-content>\n                    <ion-button expand=\"block\" routerLink=\"/more-info\">More Information</ion-button>\n                    <ion-button expand=\"block\" (click)=\"addToSaved(item.payload.val().name)\">Saved</ion-button>\n                    <ion-button expand=\"block\" (click)=\"addToVisited(item.payload.val().name)\">Visited</ion-button>\n                </ion-card>\n            </div>\n            <!-- Visted Places places -->\n            <div *ngFor=\"let place of visitedplaces   \">\n                <div *ngFor=\"let item of items$   | async json\">\n                    <ion-card *ngIf=\"visited && (item.payload.val().name == place) \">\n                        <img src={{item.payload.val().url}} />\n                        <ion-card-header>\n                            <ion-card-subtitle>Destination</ion-card-subtitle>\n                            <ion-card-title>{{item.payload.val().name}}</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            {{item.payload.val().description}}\n                        </ion-card-content>\n                        <ion-button expand=\"block\" routerLink=\"/more-info\">More Information</ion-button>\n                    </ion-card>\n                </div>\n            </div>\n             <!-- Most popular places -->\n             <div *ngFor=\"let place of arrayVisit   \">\n                <div *ngFor=\"let item of items$   | async json\">\n                    <ion-card *ngIf=\"mostPop && (item.payload.val().visited != 0) &&(item.payload.val().visited == place) \">\n                        <img src={{item.payload.val().url}} />\n                        <ion-card-header>\n                            <ion-card-subtitle>Destination</ion-card-subtitle>\n                            <ion-card-title>{{item.payload.val().name}}</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            {{item.payload.val().description}}\n                        </ion-card-content>\n                        <ion-button expand=\"block\" routerLink=\"/more-info\">More Information</ion-button>\n                    </ion-card>\n                </div>\n            </div>\n\n            <!-- saved places -->\n            <div *ngFor=\"let place of savedplaces   \">\n                <div *ngFor=\"let item of items$   | async json\">\n                    <ion-card *ngIf=\"saved  && (item.payload.val().name == place)\">\n                        <img src=\"{{item.payload.val().url}} \" />\n                        <ion-card-header>\n                            <ion-card-subtitle>Destination</ion-card-subtitle>\n                            <ion-card-title>{{item.payload.val().name}}</ion-card-title>\n                        </ion-card-header>\n                        <ion-card-content>\n                            {{item.payload.val().description}}\n                        </ion-card-content>\n                        <ion-button expand=\"block\" routerLink=\"/more-info\">More Information</ion-button>                         \n                        <ion-button expand=\"block\" (click)=\"deleteSaved(item.payload.val().name)\">Remove from saved </ion-button>\n\n                    </ion-card>\n                </div>\n            </div>\n\n                <!-- near to me places places -->\n    <div *ngFor=\"let mark of markers\">\n        <div *ngFor=\"let item of items$   | async json\">\n            <ion-card *ngIf=\"(item.payload.val().location == mark.key) && near\">\n                <img src=\"{{item.payload.val().url}} \" />\n                <ion-card-header>\n                    <ion-card-subtitle>Destination</ion-card-subtitle>\n                    <ion-card-title>{{item.payload.val().name}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    {{item.payload.val().description}}\n                </ion-card-content>\n                <ion-button expand=\"block\" routerLink=\"/more-info\">More Information</ion-button>\n                <ion-button expand=\"block\" (click)=\"addToSaved()\">Saved</ion-button>\n                <ion-button expand=\"block\" (click)=\"addToVisited()\">Visited</ion-button>\n            </ion-card>\n        </div>\n    </div>\n\n        </ion-content>\n    </div>"

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/operator/switchMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.switchMap = _operator_switchMap__WEBPACK_IMPORTED_MODULE_1__["switchMap"];
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/switchMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/switchMap.js ***!
  \*****************************************************************/
/*! exports provided: switchMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchMap", function() { return switchMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function switchMap(project) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(project)(this);
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./src/app/public/tabsfolder/tab2/tab2.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/public/tabsfolder/tab2/tab2.module.ts ***!
  \*******************************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/public/tabsfolder/tab2/tab2.page.ts");







const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
    }
];
let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/public/tabsfolder/tab2/tab2.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/public/tabsfolder/tab2/tab2.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy90YWJzZm9sZGVyL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/tabsfolder/tab2/tab2.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/public/tabsfolder/tab2/tab2.page.ts ***!
  \*****************************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/switchMap.js");
/* harmony import */ var _geo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../geo.service */ "./src/app/geo.service.ts");









let Tab2Page = class Tab2Page {
    constructor(router, db, fireauth, toastController, geo) {
        this.router = router;
        this.db = db;
        this.fireauth = fireauth;
        this.toastController = toastController;
        this.geo = geo;
        this.currentLocation = {
            lat: 31.9753,
            lng: 35.1960
        };
        this.numberOfPlaces = 15;
        this.visited = false;
        this.numVisit = 0;
        this.mostPop = false;
        this.near = false;
        this.saved = false;
        this.allplaces = true;
        this.wherIam = "All Places";
        this.visitedplaces = [];
        this.savedplaces = [];
        this.arrayVisit = [];
        this.size$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null); //added
        this.items$ = this.size$.switchMap(size => //added
         db.list('/places', ref => //added
         size ? ref.orderByChild('size').equalTo(size) : ref //added
        ).snapshotChanges() //added
        );
        this.sizeL$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null); //added
        this.location$ = this.size$.switchMap(size => //added
         db.list('/locations', ref => //added
         size ? ref.orderByChild('size').equalTo(size) : ref //added
        ).snapshotChanges() //added
        );
        this.items$.subscribe(actions => {
            actions.forEach(action => {
                //  this.locationname = action.payload.val().location; 
                //  console.log("name befoe is "+this.locationname );
            });
        });
    }
    ngOnInit() {
    }
    findNearPoints() {
        this.getUserLocation();
        console.log(this.geo.hits);
        this.subscription = this.geo.hits
            .subscribe(hits => this.markers = hits);
    }
    getUserLocation() {
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.currentLocation.lat = position.coords.latitude;
                this.currentLocation.lng = position.coords.longitude;
                this.geo.getLocations(100, [this.currentLocation.lat, this.currentLocation.lng]);
            });
        }
    }
    addToVisited(namePlace) {
        let flag = true;
        this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value', (snapshot) => {
            this.visitedplaces = snapshot.val().vistedPlaces;
            for (let i = 0; i < this.visitedplaces.length; ++i) {
                if (this.visitedplaces[i] == namePlace)
                    flag = false;
            }
            if (flag) {
                this.visitedplaces.push(namePlace);
                let userRef = this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
                userRef.update({
                    'vistedPlaces': this.visitedplaces
                });
                let i = 1;
                for (; i < this.numberOfPlaces + 1; ++i) {
                    this.db.database.ref('places/place' + i).once('value', (snapshot) => {
                        if (snapshot.val().name == namePlace) {
                            this.numVisit = snapshot.val().visited;
                            this.numVisit++;
                            let placeRef = this.db.database.ref('places/place' + i);
                            placeRef.update({
                                'visited': this.numVisit
                            });
                        }
                    });
                }
            }
        });
    }
    deleteSaved(namePlace) {
        this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value', (snapshot) => {
            this.savedplaces = snapshot.val().savedPlaces;
            for (let i = 0; i < this.savedplaces.length; ++i) {
                if (this.savedplaces[i] == namePlace)
                    this.savedplaces[i] = "";
            }
            let userRef = this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
            userRef.update({
                'savedPlaces': this.savedplaces
            });
        });
    }
    addToSaved(namePlace) {
        let flag = true;
        this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value', (snapshot) => {
            this.savedplaces = snapshot.val().savedPlaces;
            for (let i = 0; i < this.savedplaces.length; ++i) {
                if (this.savedplaces[i] == namePlace)
                    flag = false;
            }
            if (flag) {
                this.savedplaces.push(namePlace);
                let userRef = this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid);
                userRef.update({
                    'savedPlaces': this.savedplaces
                });
            }
        });
    }
    getNear() {
        this.findNearPoints();
        console.log("this.markers");
        console.log(this.markers);
        this.wherIam = " Near Places To You";
        this.near = true;
        this.visited = false;
        this.mostPop = false;
        this.saved = false;
        this.allplaces = false;
        this.markers.forEach(element => {
            console.log("place = ", element.key);
        });
    }
    getVisited() {
        this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value', (snapshot) => {
            this.visitedplaces = snapshot.val().vistedPlaces;
        });
        this.wherIam = " Visited Places";
        this.near = false;
        this.visited = true;
        this.mostPop = false;
        this.saved = false;
        this.allplaces = false;
    }
    getMostPopular() {
        let i = 1;
        for (; i < this.numberOfPlaces + 1; ++i) {
            this.db.database.ref('places/place' + i).once('value', (snapshot) => {
                this.arrayVisit[i] = snapshot.val().visited;
            });
        }
        var sortedArray = this.arrayVisit.sort((n1, n2) => {
            if (n1 < n2) {
                return 1;
            }
            if (n1 > n2) {
                return -1;
            }
            return 0;
        });
        this.arrayVisit = sortedArray;
        console.log(this.arrayVisit);
        this.wherIam = " Most Popular Places";
        this.near = false;
        this.visited = false;
        this.mostPop = true;
        this.saved = false;
        this.allplaces = false;
    }
    getSaved() {
        this.db.database.ref('users/' + this.fireauth.auth.currentUser.uid).once('value', (snapshot) => {
            this.savedplaces = snapshot.val().savedPlaces;
        });
        this.wherIam = " Saved Places";
        this.near = false;
        this.visited = false;
        this.mostPop = false;
        this.saved = true;
        this.allplaces = false;
    }
    getAllPlaces() {
        this.wherIam = "All Places";
        this.near = false;
        this.visited = false;
        this.mostPop = false;
        this.saved = false;
        this.allplaces = true;
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _geo_service__WEBPACK_IMPORTED_MODULE_8__["GeoService"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/public/tabsfolder/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/public/tabsfolder/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _geo_service__WEBPACK_IMPORTED_MODULE_8__["GeoService"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map