
Meteor.publish('system', (id) => {
  return System.collection.find({ _id: id }, { fields: { apiSecret: 0 }});
});
