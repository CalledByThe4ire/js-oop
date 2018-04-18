/* eslint-disable no-underscore-dangle, no-return-assign */
import uuidv4 from 'uuid/v4';

export default class Set {
  /**
   * Создает сет, опционально принимая элементы для добавления
   * @param {...*} [items]
   */
  constructor(...rest) {
    this._store = {};
    rest.forEach(item => (this._store[`${uuidv4()}`] = item));
  }

  /**
   * Возвращает размер сета
   */
  get size() {
    return Object.keys(this._store).length;
  }

  /**
   * Возвращает элементы сета
   */
  get values() {
    return Object.values(this._store);
  }

  /**
   * Добавляет элемент в сет
   * @param {*} item
   */
  add(item) {
    this._store[`${uuidv4()}`] = item;
    return this;
  }

  /**
   * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
   * @param {*} item
   * @returns {boolean}
   */
  remove(item) {
    const findIndex = () => {
      let key = null;
      this.values.forEach((value, index) => {
        if (item === value) {
          key = index;
        }
      });
      return key;
    };

    const findKey = () => {
      const index = findIndex();
      const key = Object.keys(this._store)[index];
      return key;
    };

    if (
      this.values.find(value => value === item) !== undefined
    ) {
      delete this._store[`${findKey()}`];
      return true;
    }
    return false;
  }

  /**
   * Проверяет наличие элемента в сете
   * @param {*} item
   * @returns {boolean}
   */
  has(item) {
    let flag = false;
    this.values.forEach((value) => {
      if (item === value) {
        flag = true;
      }
    });
    return flag;
  }

  /**
   * Очищает сет
   */
  clear() {
    Object.keys(this._store).forEach(key => delete this._store[key]);
    return this;
  }

  /**
   * Возращает сет состоящий из элементов двух сетов
   * @param {Set} set
   * @returns {Set}
   */
  union(set) {
    return Object.assign(this._store, set);
  }

  /**
   * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
   * @param {Set} set
   * @returns {Set}
   */
  intersection(set) {
    const obj = {};
    const keys = Object.keys(this._store);
    Object.values(set._store).forEach((item) => {
      if (this.has(item)) {
        obj[`${keys[item - 1]}`] = item;
      }
    });
    return obj;
  }

  /**
   * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
   * @param {Set} set
   * @returns {Set}
   */
  difference(set) {
    const keys = Object.keys(this.intersection(set));
    keys.forEach((key) => {
      delete this._store[key];
    });
    return this;
  }

  /**
   * Возвращает `true` если сет содержит в себе все элементы из друого сета
   * @param {Set} set
   * @returns {boolean}
   */
  isSubset(set) {
    const isEqual = (item, index) => item === Object.values(set._store)[index];
    return this.values.every(isEqual);
  }
}
