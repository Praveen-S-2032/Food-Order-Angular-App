import { CartItem } from "./cartItem";

export class Cart{
    items:CartItem[] = [];

    get totalPrice():number{
        let totalPrice:number = 0;
        this.items.forEach(item => {
            totalPrice += Number(item.price);
        });
        return totalPrice;
    }
}