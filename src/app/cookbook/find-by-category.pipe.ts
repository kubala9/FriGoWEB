import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FindRecipeByCategory'
})

export class FindRecipeByCategory implements PipeTransform {
    transform(items: any[], value: string) {
        if(!value) {
            return items;
        } else {
            return items.filter( item => {
                if(item.tags && item.tags.length !== 0){
                    let hasTag = false;
                    item.tags.forEach( tag => {
                        if(value === tag.name) hasTag = true;
                    });
                    return hasTag;
                }
            })
        }
    }
}