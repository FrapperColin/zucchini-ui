migrate(() => {

  db.scenarii.createIndex({ scenarioKey: 1 });
  db.scenarii.createIndex({ featureId: 1 });
  db.scenarii.createIndex({ testRunId: 1 });
  db.scenarii.createIndex({ allTags: 1 });

});
