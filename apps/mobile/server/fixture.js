
insertInitData = function() {
  if (Posts.collection.find().count() === 0) {

    for (let i = 0; i < 100; i++) {
      Posts.collection.insert({
        title: `Post Test #${i}`,
        content: {
          type: 'text',
          version: '0.1.0',
          data: `Post Test content...`
        },
        createdAt: moment().add(100 - i, 'days'),
      });
    }

  }
};

