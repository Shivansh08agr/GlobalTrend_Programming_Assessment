// 8. Implement a simple HashMap class with put, get, and remove methods.

class HashMap {
    constructor() {
        this.map = {};
    }
    put(key, value) {
        this.map[key] = value;
    }
    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }
    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}
const myMap = new HashMap();
myMap.put('name', 'John');
myMap.put('class', '12th');
console.log(myMap.get('name'));
myMap.remove('name');
console.log(myMap.get('name'));
