// class Animal {
//   static type = 'Primatos'

//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }
//   voice() {
//     console.log('Im ' + this.name)
//   }
// }

// const animal = new Animal({
//   name: 'Monkey',
//   age: 2,
//   hasTail: true
// })


// class Cat extends Animal {
//   static type = 'CAT'
//   constructor(options){
//     super(options)
//     this.color = options.color
//   }

//   voice(){
//     super.voice(  )
//     console.log('give me some fish')
//   }

//   get ageInfo() {
//     return this.age * 4
//   }

//   set ageInfo(newAge){
//     this.age = newAge
//   }
// }

// const cat = new Cat({
//   name: 'Pussy',
//   age: 4,
//   hasTail: true,
//   color: 'grey'
// })

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }

}

class Box extends Component {
  constructor(options){
    super(options.selector)

    this.$el.style.background = options.background
    this.$el.style.width = this.$el.style.height = options.size + 'px'
  }
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  background: 'red'
})

const box2 = new Box({
  selector: '#box2',
  size: 150,
  background: 'blue'
})

class Circle extends Box {
  constructor(options){
    super(options) 
    
    this.$el.style.borderRadius = '50%'
  }
}

const c = new Circle({
  selector: '#circle',
  size: 90,
  background: 'green'
})