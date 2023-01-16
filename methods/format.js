function format () {
  const date = this.current();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

module.exports = format;
