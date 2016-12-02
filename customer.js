var Customer = function( name, wallet ){
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
};

Customer.prototype = {
  buyRecord: function( record ){
    this.collection.push( record );
    this.wallet -= record.price;
  }
};

module.exports = Customer;