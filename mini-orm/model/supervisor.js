




class Model {
  constructor(raw) {
    this.attribute1 = raw.attribute1
    this.attribute2 = raw.attribute2
  }

  static findAll() {
    let results = models.map(m => new Model(m))
    return results
  }

  static findById() {}

  static findWhere() {}

  static create() {}

  static update() {}

  static destroy() {}

}
