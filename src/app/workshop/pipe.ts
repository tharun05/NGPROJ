import {Pipe, PipeTransform} from '@angular/core';




@Pipe({name:'filter'})
export class FilterPipe implements PipeTransform{
    transform(items:any[],args:any[],val:any){
        let fields:string[];
        let value :string;
      

        if(args){
            fields = args;
            value = val;
            console.log(items)
           
        }

        if(!items)return [];

        return items.filter(it=>{
            if(typeof(value) != 'string') return;
            if(value &&value != ""){
                for(let item of fields){
                    if(item.indexOf('.') > 0){
                        let splitItems = item.split('.')
                        if(splitItems.length == 2){
                            if(it[splitItems[0]][splitItems[1]].toString().toLowerCase().indexOf(value.toLowerCase())>-1){
                                return true;
                            }
                        }else{
                            return true;
                        }
                    }else{
                        if(it[item] && it[item].toString() && it[item].toString().toLowerCase().indexOf(value.toLowerCase())>-1){
                            return true;
                        }
                    }
                }
            }else{
                return true;
            }
            return false;
        })


    }
}

@Pipe({name:'reverseString'})
export class ReverseString implements PipeTransform{
    transform(value:string):string{
        let newStr = '';
        for(var i=value.length-1;i>=0;i--){
            newStr += value.charAt(i);
        }
        return newStr;
    }
}

