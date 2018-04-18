/* eslint-disable no-underscore-dangle */

export default class Queue {
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
   * Возвращает `true` если очередь пустая, в противном случае возвращается `false`
   * @returns {boolean}
   */
  get isEmpty() {
    return this._store.length === 0;
  }

  /**
   * Возвращает первый элемент
   * @returns {*}
   */
  get front() {
    return this._store[this._store.length - 1];
  }

  /**
   * Возвращает последний элемент
   * @returns {*}
   */
  get back() {
    return this._store[0];
  }

  /**
   * Добавляет элемент
   * @param {*} item
   */
  enqueue(item) {
    this._store.push(item);
    return this;
  }

  /**
   * Удаляет последний элемент
   */
  dequeue() {
    this._store.shift();
    return this;
  }
}
