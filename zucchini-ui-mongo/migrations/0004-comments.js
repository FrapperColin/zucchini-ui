migrate(() => {

  db.comments.createIndex({ 'references.type': 1, 'references.reference': 1 });

});
