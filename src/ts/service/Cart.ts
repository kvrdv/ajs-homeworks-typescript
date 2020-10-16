import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  // суммарная стоимость (без учёта скидки):
  getSum(): number {
    let sum = 0;
    for (let item of this._items) {
      sum += item.price;
    }
    return sum;
  }

  // суммарная стоимость (с учётом скидки):
  getDiscountedSum(discount: number): number {
    const sum = this.getSum();
    const discountedSum = sum - sum * (discount / 100);
    return discountedSum;
  }

  // удаление объекта из корзины:
  remove(id: number): void {
    const removeId: number = this._items.findIndex(item => item.id === id);
    this._items.splice(removeId, 1);
  }
}