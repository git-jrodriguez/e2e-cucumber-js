var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'reports/report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true
};

reporter.generate(options);