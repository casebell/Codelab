
insertInitData = function() {
  if (Meteor.users.find().count() === 0) {

    const userId = Accounts.createUser({
      email: 'admin@shinejs.io',
      password: '123123',
      profile: {
        name: '운영자'
      }
    });

    for (let i = 0; i < 100; i++) {
      Post.collection.insert({
        title: `Post Test #${i}`,
        content: {
          type: 'text',
          version: '0.1.0',
          data: `Post Test content...`
        },
        author: {
          _id: userId,
          name: '운영자',
        },
        createdAt: moment().add(100 - i, 'days').toDate(),
      });
    }

  }
};

