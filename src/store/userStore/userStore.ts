import { action, makeObservable, observable } from 'mobx';
import { IFood } from '@root/types/food';

interface MyShoppingCartItem {
  food: IFood;
  count: number;
}

class UserStore {
  shoppingCart: MyShoppingCartItem[] = [];

  constructor () {
    makeObservable(this, {
      shoppingCart: observable,
      getFoodById: observable,
      addToCart: action,
      updateFoodCount: action,
      completeOrder: action,
    });
  }

  addToCart (food: IFood) {
    this.shoppingCart.push({ food, count: 1 });
  }

  completeOrder () {
    this.shoppingCart = [];
  }

  removeFromCart (id: IFood['id']) {
    this.shoppingCart = this.shoppingCart.filter(item => item.food.id !== id);
  }

  getFoodById (id: number) {
    return this.shoppingCart.find(item => item.food.id === id);
  }

  updateFoodCount (id: number, update: (prevCount: number) => number) {
    const currentItem = this.shoppingCart.find(item => item.food.id === id);
    if (!currentItem) return false;

    currentItem.count = update(currentItem.count);

    if (currentItem.count <= 0) this.removeFromCart(id);

    return true;
  }
}

export const userStore = new UserStore();
