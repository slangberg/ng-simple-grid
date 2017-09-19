webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Angular 4 Simple Grid</h1>\n</header>\n<div class=\"demo-page\">\n  <form class=\"demo-controls\">\n    <div class=\"control-row\">\n      <label>Colums</label>\n      <input type=\"number\" name=\"Colums\" [(ngModel)]=\"divderCount\" min=\"1\" max=\"12\">\n    </div>\n    <div class=\"control-row\">\n      <input type=\"checkbox\" [(ngModel)]=\"usingColConfig\" name=\"userColConfig\" (click)=\"usesColConfig()\">\n      <label>Use Coloum Config</label>\n    </div>\n    <div class=\"control-row\">\n      <input type=\"checkbox\" [(ngModel)]=\"usingGridStyle\" name=\"usingGridStyle\" (click)=\"usesGridStyle()\">\n      <label>Use Grid Style Config</label>\n    </div>\n    <div class=\"control-row\">\n      <input type=\"checkbox\" [(ngModel)]=\"usingColStyle\" name=\"usingColStyle\" (click)=\"useSampleColStyle()\">\n      <label>Use Column Style Config</label>\n    </div>\n    <div class=\"control-row\">\n      <input type=\"checkbox\" [(ngModel)]=\"usingRowStyle\" name=\"usingRowStyle\" (click)=\"useSampleRowStyle()\">\n      <label>Use Row Style Config</label>\n    </div>\n    <div class=\"control-row\">\n        <input type=\"checkbox\" [(ngModel)]=\"usingClassConfig\" name=\"usingClassConfig\" (click)=\"useClassConfig()\">\n      <label>Use Grid Class Config</label>\n    </div>\n\n  </form>\n  <div class=\"grid-holder clr\">\n    <pre>\n        {{sampleConfigObject | json}}\n    </pre>\n    <div class=\"demo-container\">\n      <simple-grid\n      [col-config]=\"sampleConfigObject.colConfig\"\n      [col-count]=\"divderCount\"\n      [source-list]=\"sampleList\"\n      [use-percent]=\"isPercent\"\n      [grid-style-config]=\"sampleConfigObject.gridStyle\"\n      [col-style]=\"sampleConfigObject.colStyle\"\n      [row-style]=\"sampleConfigObject.rowStyle\"\n      [classes-config]=\"sampleConfigObject.classConfig\"\n      (onItemClick)=\"onClickItem($event)\"\n      >\n        <ng-template let-item=\"item\" let-index=\"index\">\n          Item\n          <!-- <sample-cell [item]=\"item\"></sample-cell> -->\n        </ng-template>\n      </simple-grid>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nh1 {\n  font-family: 'Fjalla One', sans-serif;\n  margin: 0;\n  font-size: 25px; }\n\n.clr:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0; }\n\nheader {\n  background: #ededed;\n  padding: 10px;\n  border-bottom: 3px solid #8e8e8e;\n  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.4);\n  margin-bottom: 5px; }\n\n.demo-container {\n  border-radius: 5px;\n  border: 3px solid #8e8e8e;\n  padding: 4px;\n  margin: 10px;\n  /*box-shadow:inset 0px 0px 2px rgba(0,0,0,.4);*/ }\n\n.demo-page {\n  position: relative;\n  width: 100%; }\n\n.demo-controls {\n  float: left;\n  width: 250px;\n  min-height: calc(100vh - 31px);\n  padding: 10px; }\n  .demo-controls label {\n    font-weight: bold;\n    font-size: 12px; }\n  .demo-controls .control-row {\n    padding-bottom: 5px; }\n  .demo-controls code {\n    tab-width: 2;\n    white-space: pre-wrap; }\n\n.grid-holder {\n  float: left;\n  width: calc(100% - 250px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app works!';
        this.sampleList = [];
        this.divderCount = 2;
        this.isPercent = true;
        this.usingColConfig = false;
        this.usingGridStyle = false;
        this.usingColStyle = false;
        this.usingRowStyle = false;
        this.usingClassConfig = false;
        this.sampleColConfig = [];
        this.sampleGridStyle = {};
        this.sampleClassConfig = null;
        this.sampleColStyle = {};
        this.sampleRowStyle = {};
        this.activeConfigs = null;
        this.setUpConfigs = function () {
            _this.sampleConfigObject = {
                colConfig: [],
                gridStyle: {},
                classConfig: null,
                colStyle: {},
                rowStyle: {}
            };
            _this.activeConfigs = JSON.stringify(_this.sampleConfigObject);
        };
        this.usesGridStyle = function () {
            if (!_this.usingGridStyle) {
                _this.sampleConfigObject.gridStyle = {
                    colStyle: { padding: '10px', border: '1px solid purple' },
                    rowStyle: { 'padding': '10px' }
                };
            }
            else {
                _this.sampleConfigObject.gridStyle = {};
            }
        };
        this.useSampleColStyle = function () {
            if (!_this.usingColStyle) {
                _this.sampleConfigObject.colStyle = {
                    padding: '20px',
                    border: '2px solid green'
                };
            }
            else {
                _this.sampleConfigObject.colStyle = {};
            }
        };
        this.useClassConfig = function () {
            if (!_this.usingClassConfig) {
                _this.sampleConfigObject.classConfig = {
                    container: ['simple-grid-container', 'border-container'],
                    row: ['simple-grid-row', 'opacity-row']
                };
            }
            else {
                _this.sampleConfigObject.classConfig = null;
            }
        };
        this.useSampleRowStyle = function () {
            if (!_this.usingRowStyle) {
                _this.sampleConfigObject.rowStyle = {
                    padding: '20px',
                    border: '2px solid Blue'
                };
            }
            else {
                _this.sampleConfigObject.rowStyle = {};
            }
        };
        this.usesColConfig = function () {
            if (!_this.usingColConfig) {
                _this.divderCount = 2;
                _this.sampleConfigObject.colConfig = [
                    {
                        class: 'border-yellow',
                        percent: 33.3333
                    },
                    {
                        class: 'border-purple',
                        percent: 66.6666
                    }
                ];
            }
            else {
                _this.sampleConfigObject.colConfig = [];
            }
        };
        this.onClickItem = function (data) {
            console.log(data);
            alert("Item Index: " + data.index);
        };
        this.setUpConfigs();
        this.sampleList = [
            {
                "_id": "5976a13f6653386837489bb2",
                "index": 0,
                "picture": "../assets/test.jpg",
                "age": 38,
                "name": "Gross Casey"
            },
            {
                "_id": "5976a13f0941fa1842865e88",
                "index": 1,
                "picture": "../assets/test.jpg",
                "age": 37,
                "name": "Nash Bruce"
            },
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simple_grid_simple_grid_module__ = __webpack_require__("../../../../../src/app/simple-grid/simple-grid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_cell_sample_cell_component__ = __webpack_require__("../../../../../src/app/sample-cell/sample-cell.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sample_cell_sample_cell_component__["a" /* SampleCellComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__simple_grid_simple_grid_module__["a" /* SimpleGridModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/class-configs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultConfig; });
/* unused harmony export bootstrapConfig */
var defaultConfig = {
    container: 'simple-grid-container',
    row: 'simple-grid-row',
    col: 'simple-grid-col'
};
var bootstrapConfig = {
    container: 'container-fluid',
    row: 'row',
    col: 'col'
};
//# sourceMappingURL=class-configs.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "../../../../../src/app/sample-cell/sample-cell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-cell\">\n  <img class=\"sample-img\" [src]=\"item.picture\">\n  <div class=\"summary\">{{item.name}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sample-cell/sample-cell.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sample-cell {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  cursor: pointer; }\n\n.sample-img {\n  width: 100%;\n  height: auto;\n  display: block;\n  position: relative;\n  z-index: 1; }\n\n.summary {\n  font-family: 'Fjalla One', sans-serif;\n  background: rgba(0, 0, 0, 0.75);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0.65) 100%);\n  color: #FFF;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  padding: 10px;\n  bottom: 0;\n  box-sizing: border-box; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample-cell/sample-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SampleCellComponent = (function () {
    function SampleCellComponent() {
        this.item = {};
    }
    SampleCellComponent.prototype.ngOnInit = function () {
    };
    return SampleCellComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SampleCellComponent.prototype, "item", void 0);
SampleCellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'sample-cell',
        template: __webpack_require__("../../../../../src/app/sample-cell/sample-cell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sample-cell/sample-cell.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SampleCellComponent);

//# sourceMappingURL=sample-cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/simple-grid/simple-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"classConfig.container\">\n  <ng-container *ngFor=\"let item of listArray; let i=index\">\n    <div *ngIf=\"i %divider == 0\"  [ngClass]=\"getRowClasses(i)\" [ngStyle]=\"getRowStyle(i)\">\n      <ng-container *ngFor=\"let item of colArray; let in=index\">\n        <div [ngClass]=\"getColClasses(in)\" [ngStyle]=\"getColStyle(in)\" (click)=\"itemClicked(listArray[i+in], i+in)\">\n          <ng-container\n          *ngIf=\"listArray[i+in]\"\n          [ngTemplateOutlet]=\"genTemplate(in)\" [ngOutletContext]=\"{index: i+in,rowindex:in, item:listArray[i+in]}\">\n          </ng-container>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/simple-grid/simple-grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".simple-grid-container,\n.simple-grid-container .simple-grid-row\n.simple-grid-container .simple-grid-col {\n  box-sizing: border-box; }\n\n.simple-grid-row {\n  box-sizing: border-box; }\n\n.simple-grid-row:after {\n  visibility: hidden;\n  display: block;\n  font-size: 0;\n  content: \" \";\n  clear: both;\n  height: 0; }\n\n.simple-grid-col {\n  float: left;\n  box-sizing: border-box; }\n\n.simple-grid-container .simple-grid-row:last-child {\n  padding-bottom: 0px !important; }\n\n.half {\n  width: 50%; }\n\n.three-four {\n  width: 75%; }\n\n.one-three,\n.third {\n  width: 33.33%; }\n\n.two-three {\n  width: 66.67%; }\n\n.one-four {\n  width: 25%; }\n\n.two-four {\n  width: 50%; }\n\n.full-width {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simple-grid/simple-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_configs__ = __webpack_require__("../../../../../src/app/class-configs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces__ = __webpack_require__("../../../../../src/app/interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__interfaces__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimpleGridComponent = (function () {
    function SimpleGridComponent() {
        var _this = this;
        this.listArray = [];
        this.divider = 1;
        this.usePercentage = true;
        this.colConfig = [];
        this.classesConfigInput = null;
        this.kit = null;
        this.gridStyle = {};
        this.colStyle = {};
        this.rowStyle = {};
        this.containerStyle = {};
        this.onItemClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dividerClass = null;
        this.colArray = null;
        this.lastRow = 0;
        this.percentWidth = 0;
        this.setColTemplateVar = function () {
        };
        this.itemClicked = function (item, index) {
            _this.onItemClick.emit({ item: item, index: index });
        };
        this.getColStyle = function (index) {
            var colConfig = _this.colArray[index] || {};
            var curColStyle = {};
            if (_this.usePercentage) {
                if (colConfig.percent) {
                    curColStyle['width'] = colConfig.percent + "%";
                }
                else {
                    curColStyle['width'] = _this.percentWidth + "%";
                }
            }
            if (_this.gridStyle && _this.gridStyle.colStyle) {
                curColStyle = Object.assign(curColStyle, _this.gridStyle.colStyle);
            }
            if (_this.colStyle) {
                curColStyle = Object.assign(curColStyle, _this.colStyle);
            }
            if (colConfig.style) {
                curColStyle = Object.assign(curColStyle, colConfig.style);
            }
            return curColStyle;
        };
        this.getColClasses = function (index) {
            var classArray = [];
            classArray = _this.genStringArray(classArray, _this.classConfig.col);
            var colConfig = _this.colArray[index] || {};
            if (colConfig.class) {
                classArray = _this.genStringArray(classArray, colConfig.class);
            }
            return classArray;
        };
        this.getRowClasses = function (index) {
            var classArray = [];
            classArray = _this.genStringArray(classArray, _this.classConfig.row);
            return classArray;
        };
        this.getRowStyle = function (index) {
            var rowStyle = {};
            if (_this.gridStyle && _this.gridStyle.rowStyle) {
                rowStyle = Object.assign(rowStyle, _this.gridStyle.rowStyle);
            }
            if (_this.rowStyle) {
                rowStyle = Object.assign(rowStyle, _this.rowStyle);
            }
            return rowStyle;
        };
        this.genTemplate = function (index) {
            // let colConfig = this.colArray[index] || {}
            // let template;
            // if(colConfig.template){
            //
            //   template = colConfig.template;
            // }
            // // else if(this.defaultTemple){
            // //   template = this.defaultTemple;
            // // }
            // else if(this.templ) {
            //   template = this.templ
            // }
            // else {
            //   console.error("No Vaild Column Template")
            //   return false;
            // }
            return _this.templ;
        };
        this.genColArray = function () {
            if (_this.colConfig.length && _this.colConfig.length == _this.divider) {
                _this.colArray = _this.colConfig;
            }
            else if (_this.colConfig.length && _this.colConfig.length !== _this.divider) {
                console.error("Invalid col-config");
            }
            else {
                _this.colArray = Array(_this.divider).fill({});
            }
        };
        this.setUp = function () {
            _this.classSetup();
            _this.genColArray();
            if (_this.usePercentage) {
                _this.percentWidth = 100 / _this.divider;
            }
        };
        this.genStringArray = function (source, input) {
            if (typeof input === 'string') {
                source.push(input);
            }
            else {
                source = source.concat(input);
            }
            return source;
        };
        this.classSetup = function () {
            if (_this.classesConfigInput) {
                _this.classConfig = Object.assign(_this.classConfig, _this.classesConfigInput);
            }
            else {
                _this.classConfig = Object.assign({}, __WEBPACK_IMPORTED_MODULE_1__class_configs__["a" /* defaultConfig */]);
            }
        };
        this.setUp();
    }
    SimpleGridComponent.prototype.ngOnChanges = function () {
        this.genColArray();
    };
    SimpleGridComponent.prototype.ngDoCheck = function () {
        this.setUp();
    };
    SimpleGridComponent.prototype.ngAfterViewInit = function () {
        this.setColTemplateVar();
    };
    return SimpleGridComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */]),
    __metadata("design:type", Object)
], SimpleGridComponent.prototype, "templ", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('source-list'),
    __metadata("design:type", Array)
], SimpleGridComponent.prototype, "listArray", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('col-count'),
    __metadata("design:type", Number)
], SimpleGridComponent.prototype, "divider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('use-percent'),
    __metadata("design:type", Boolean)
], SimpleGridComponent.prototype, "usePercentage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('col-config'),
    __metadata("design:type", Array)
], SimpleGridComponent.prototype, "colConfig", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('classes-config'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces__["IClassConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces__["IClassConfig"]) === "function" && _a || Object)
], SimpleGridComponent.prototype, "classesConfigInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('ui-kit'),
    __metadata("design:type", String)
], SimpleGridComponent.prototype, "kit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('grid-style-config'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces__["IGridStyle"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interfaces__["IGridStyle"]) === "function" && _b || Object)
], SimpleGridComponent.prototype, "gridStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('col-style'),
    __metadata("design:type", Object)
], SimpleGridComponent.prototype, "colStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('row-style'),
    __metadata("design:type", Object)
], SimpleGridComponent.prototype, "rowStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('container-style'),
    __metadata("design:type", Object)
], SimpleGridComponent.prototype, "containerStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], SimpleGridComponent.prototype, "onItemClick", void 0);
SimpleGridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'simple-grid',
        template: __webpack_require__("../../../../../src/app/simple-grid/simple-grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/simple-grid/simple-grid.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SimpleGridComponent);

var _a, _b;
//# sourceMappingURL=simple-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/simple-grid/simple-grid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleGridModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_grid_component__ = __webpack_require__("../../../../../src/app/simple-grid/simple-grid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SimpleGridModule = (function () {
    function SimpleGridModule() {
    }
    return SimpleGridModule;
}());
SimpleGridModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__simple_grid_component__["a" /* SimpleGridComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__simple_grid_component__["a" /* SimpleGridComponent */]]
    })
], SimpleGridModule);

//# sourceMappingURL=simple-grid.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map