class Group {
    constructor() {
      this.members = [];
    }
  
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
  
    has(value) {
      return this.members.includes(value);
    }
  
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
  
    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
}

let group = Group.from([1,23,23,4,7,4,7,5])
console.log(group.members);
console.log(group.has(1));
console.log(group.has(6));
group.delete(23);
group.add(22543);
console.log(group.members)
