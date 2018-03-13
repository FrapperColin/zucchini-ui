Zucchini UI Changelog
=====================

Version 0.0.3-SNAPSHOT
----------------------

* **New UI with React**
* Search within a test run
* Group failed scenarios using Levenshtein Distance (contribution by @jeremiemarc)
* Track testRun failures with a view built upon the Grouped Failed Scenarios feature (contribution by @jeremiemarc)
* Report for a test tun (contribution by @devjiel)
* Configure the test run purge delay from the server YAML config file
* UI: Replaced the `yarn run dev` command with the more common `yarn start`


Version 0.0.2-SNAPSHOT
----------------------

* Grouping scenarios by error messages through regex (contribution by @jeremiemarc)
* Search in scenario content
* Import only passed scenarios (contribution by @pierrick-boule)
* Use Yarn instead of NPM for Javascript packages management


Version 0.0.1-SNAPSHOT
----------------------

* [BUG] Fix tag view for scenarios with no tag 
* Collect and display step logs
* Save embeddings from Cucumber report (contribution by _achoimet_)
* Trend chart for a test run
* Track scenario changes for status and reviewed state
* Purge old test runs by type and date
* Switched frontend build from Grunt / Bower to Webpack / NPM
