migrate(() => {

  db.testRuns.find({ env: { $exists: true } }).forEach((testRun) => {
    testRun.type = testRun.env;
    delete testRun.env;

    db.testRuns.update({ _id: testRun._id }, testRun);
  });

});
