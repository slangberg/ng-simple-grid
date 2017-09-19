#Angular 4 Simple Grid
This project is a component that allows a simple way to generate fully responsive easily scaleable row and column layout grids without the use of flex-box. This grid layout can be configured in  a number of different ways which allow for dynamic javascript based styling along with dynamic classes controls

## Core Concept
The its core the simple-grid component consumes any Array in the form of the `source-list` input and column count in the form `col-count` input and a child `<ng-template>`. The grid will iterate over the source-list contents and output  row divs that contain up too the column count of column divs that contain any content from the `<ng-template>`. The current item being genrated by the grid  and its index are accessible in the content template via a template bound item and index variable.
```
<simple-grid>
  <ng-template let-item="item" let-index="index">
    <!— item and index properties accessible here —>
  </ng-template>
</simple-grid>
```


In the basic setup the width of each column is set using the column count to generate a percentage width of the parent row. So if you set the column count to 2 each column will be 50%.

```
<simple-grid>
  <div class="simple-grid-container">
    <div class="simple-grid-row">
      <div class="simple-grid-col" style="width: 50%;">
        <!-- template content -->
      </div>
      <div class="simple-grid-col" style="width: 50%;">
        <!-- template content -->
      </div>
    </div>  
  </div>
</simple-grid>
```

The grid can be configured to not set express widths and instead apply user selected classes for easier responsive styling along with column specific configuration of classes, percentage widths and css styles via the `col-config` input

## Properties

| Name                	| Type                                                                           	| Default                                                                          	| Description                                                                                                                                                                                                                                                                                                        	|
|---------------------	|--------------------------------------------------------------------------------	|----------------------------------------------------------------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| `source-list`       	| `Array<any> `                                                                    	| null                                                                             	| The grid iterate over this array to generate the grid                                                                                                                                                                                                                                                              	|
| `col-count`         	| `number`                                                                         	| 1                                                                                	| This input is how many columns are in each row, if the source list is not evenly divided the last row will contain only the remainder number of columns                                                                                                                                                            	|
|  `use-percent`      	| `boolean`                                                                        	| true                                                                             	| Sets wether the grid will automatically set the column width to a percent 100% divided by the column count. Its important to note that these default, percents are the lowest priority and will be overwritten by all other configurations                                                                         	|
| `col-config`        	| `[{ class?: string | string[], percent?:number, style?:Object}]`                	| null                                                                             	| The column config is an array of IColConfig objects that can apply custom classes, widths and styles to any column matching that objects index. If used this configuration array must be the same length as the col-count integer. The styles object is the same format used by the ngStyle directive in angular 4 	|
| `classes-config`    	| {container?:string | string[], row?:string | string[], col?:string | string[]} 	| {container:'simple-grid-container',,row:'simple-grid-row',,col:'simple-grid-col' 	| This object can be used to over wright simple grid's default container, row and column classes                                                                                                                                                                                                                     	|
| `grid-style-config` 	| `{colStyle?:Object,rowStyle?:Object,containerStyle?:Object} `                    	| null                                                                             	| Each of the bound style objects will be applied to the column, row and container elements of the grid. Each of the styles objects are the same format used by the ngStyle directive in Angular 4                                                                                                                   	|
| `col-style`         	| `Object`                                                                         	| `{width:percent}`                                                                	| The bound style objects will be applied to the column elements of the grid. The same format used by the ngStyle directive in Angular 4                                                                                                                                                                             	|
| `row-style`         	| `Object`                                                                         	| {}                                                                               	| The bound style objects will be applied to the row elements of the grid. The same format used by the ngStyle directive in Angular 4                                                                                                                                                                                	|
| `container-style`   	| `Object`                                                                        	| {}                                                                               	| The bound style objects will be applied to the container element of the grid. The same format used by the ngStyle directive in Angular 4                                                                                                                                                                           	|
## Running The Demo App
This project was built with [Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md) so all CLI configuration will work with the demo. To run demo locally `ng serve` then navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
