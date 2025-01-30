import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 15,
        name: 'Chocolet Cake',
        favorite: false,
        star: 4,
        tags: ['Cake'],
        imageUrl: '/assets/food-1.jpg',
        cookTime: '30 min',
        origins: ['Italy', 'France'],
      },
      {
        id: 2,
        price: 20,
        name: 'Momos',
        favorite: true,
        star: 5,
        tags: ['FastFood'],
        imageUrl: '/assets/food-2.jpg',
        cookTime: '40 min',
        origins: ['Mexico'],
      },
      {
        id: 3,
        price: 10,
        name: 'KFC',
        favorite: true,
        star: 3.8,
        tags: ['NonVeg'],
        imageUrl: '/assets/food-3.jpg',
        cookTime: '20 min',
        origins: ['Japan'],
      },
      {
        id: 4,
        price: 25,
        name: 'Fish Fry',
        favorite: false,
        star: 4,
        tags: ['NonVeg'],
        imageUrl: '/assets/food-4.jpg',
        cookTime: '50 min',
        origins: ['India'],
      },
      {
        id: 5,
        price: 22,
        name: 'French fries',
        favorite: false,
        star: 5,
        tags: ['Fries', 'FastFood'],
        imageUrl: '/assets/food-6.jpg',
        cookTime: '35 min',
        origins: ['USA'],
      },
      {
        id: 6,
        price: 12,
        name: 'Mix cake',
        favorite: true,
        star: 3,
        tags: ['Cake'],
        imageUrl: '/assets/food-7.jpg',
        cookTime: '15 min',
        origins: ['Thailand'],
      },
      {
        id: 7,
        price: 17,
        name: 'Panner',
        favorite: false,
        star: 4,
        tags: ['Panner'],
        imageUrl: '/assets/food-8.jpg',
        cookTime: '30 min',
        origins: ['Vietnam'],
      },
      {
        id: 8,
        price: 14,
        name: 'Orange',
        favorite: true,
        star: 5,
        tags: ['Fruits'],
        imageUrl: '/assets/food-9.jpg',
        cookTime: '20 min',
        origins: ['Korea'],
      },
      {
        id: 9,
        price: 19,
        name: 'Sandwich',
        favorite: false,
        star: 3,
        tags: ['Sandwich', 'FastFood'],
        imageUrl: '/assets/food-10.jpg',
        cookTime: '40 min',
        origins: ['Spain'],
      },
      {
        id: 10,
        price: 16,
        name: 'Panner Fry',
        favorite: true,
        star: 4,
        tags: ['Panner', 'Fry'],
        imageUrl: '/assets/food-11.jpg',
        cookTime: '25 min',
        origins: ['Brazil'],
      },
      {
        id: 11,
        price: 21,
        name: 'Donuts',
        favorite: false,
        star: 4,
        tags: ['Donuts'],
        imageUrl: '/assets/food-12.jpg',
        cookTime: '30 min',
        origins: ['Germany'],
      },
      {
        id: 12,
        price: 23,
        name: 'Pasta',
        favorite: false,
        star: 4,
        tags: ['Pasta'],
        imageUrl: '/assets/food-14.jpg',
        cookTime: '45 min',
        origins: ['Greece'],
      },
    ];
  }

  getFoodById(id:number):Foods{
    return this.getAll().find(food =>food.id ==id)!;
  }
  
  getAllTag(): Tag[] {
    let obj: { name: string; count: number }[] = [{name:'All',count:0}];
    this.getAll().forEach((food) => {
      food.tags.forEach((tag) => {
        let existingTag = obj.find((t) => t.name === tag);

        if (existingTag) {
          existingTag.count++;
        } else {
          obj.push({ name: tag, count: 1 });
        }
      });
    });
    obj[0].count = this.getAll().length;
    return obj;
  }

  getAllFoodsByTag(tag: string): Foods[] {
    if (tag.toLowerCase() == 'all') return this.getAll();
    else return this.getAll().filter((food) => food.tags?.includes(tag));
  }
}
