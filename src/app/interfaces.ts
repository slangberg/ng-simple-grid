export interface IGridStyle {
  colPadding?:number;
  rowPadding?:number;
  gridPadding?:number;
  colStyle?:Object;
  rowStyle?:Object;
  containerStyle?:Object;
}


export interface IColConfig {
  class?: string | string[];
  percent?:number;
  style?:Object;
}

 export interface IClassConfig {
  container?:string | string[];
  row?:string | string[];
  col?:string | string[];
}
