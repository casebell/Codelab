
Meteor.startup(() => {
  insertInitData();

  // cloudinary init
  const cloudinary = System.collection.findOne({_id: 'cloudinary'});
  if (cloudinary) {
    CloudinaryServer.init(cloudinary);
    console.log('cloudinary initialization success');
  } else {
    console.log('cloudinary initialization failure');
  }
});
