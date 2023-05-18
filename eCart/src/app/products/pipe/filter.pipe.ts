import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //this method is used to convert data
  // filterString is a input data for search user side
  //which property is used for searching ,that put into propertyName
  transform(value: any[],filterString:any,propertName:any): any {
    const result:any=[]
    if(!value||filterString==""||propertName==""){
      return value;
    }
    else{
      value.forEach((item:any)=>{
        if (item[propertName].trim().toLowerCase().includes(filterString.trim().toLowerCase())) {
          result.push(item)
        }
      })
      return result;
    }
    return null;
  }

}
