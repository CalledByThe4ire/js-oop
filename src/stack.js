/* eslint-disable no-underscore-dangle */
export default class Stack {
  /**
   * Создает стек
   * @param {...*} [items] Элементы добавляемые в стек
   */
  constructor() {
    this._store = [];
  }

  /**
   * Возвращает количество элементов
   * @returns {number}
   */
  get size() {
    return this._store.length;
  }

  /**
   * Возвращает `true` если стек пустой, в противном случае возвращается `false`
   * @returns {boolean}
   */
  get isEmpty() {
    return this._store.length === 0;
  }

  /**
   * Добавляет элемент
   * @param {*} item
   */
  push(item) {
    this._store.push(item);
    return this;
  }

  /**
   * Удаляет и возвращает последний элемент
   * @returns {*}
   */
  pop() {
    return this._store.pop();
  }

  /**
   * Возвращает последний элемент
   * @returns {*}
   */
  peek() {
    return this._store[0];
  }
}
