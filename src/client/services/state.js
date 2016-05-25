function StateService() {
  this.state = {};
}

StateService.prototype.reset = function reset() { this.state = {}; };

StateService.prototype.setStock = function setStock(d) {
  console.log('#setStock arg', d);
  const updatedState = Object.assign({}, this.state, d);

  this.state = updatedState;
  console.log('#setStock this.state', this.state);
};

StateService.prototype.removeStock = function removeStock(d) {
  console.log('#removeStock arg', d);
  const updatedState = Object.assign({}, this.state);
  // delete updatedState[d];
  console.log('#removeStock this.state', this.state);
};

StateService.prototype.sync = function sync(s) {
  this.state = Object.assign({}, s);
  console.log('#sync this.state', this.state);
};

StateService.prototype.getState = function getState() {
  return Object.assign({}, this.state);
};

const service = new StateService();
export default service;