$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Whitebackground.feature");
formatter.feature({
  "line": 3,
  "name": "skyblue Background Change",
  "description": "",
  "id": "skyblue-background-change",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "duration": 2255690500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to change the backgroundcolour",
  "description": "",
  "id": "skyblue-background-change;user-should-be-able-to-change-the-backgroundcolour",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Set White Backgroundbutton\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to \"background-color: white;\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "Steps.button_exists(String)"
});
formatter.result({
  "duration": 210420601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set White Backgroundbutton",
      "offset": 16
    }
  ],
  "location": "Steps.i_click_on_the(String)"
});
formatter.result({
  "duration": 65101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "background-color: white;",
      "offset": 37
    }
  ],
  "location": "Steps.the_background_color_will_change_to(String)"
});
formatter.result({
  "duration": 5056512000,
  "status": "passed"
});
formatter.after({
  "duration": 16834911300,
  "status": "passed"
});
formatter.uri("features/skybluecolour.feature");
formatter.feature({
  "line": 3,
  "name": "skyblue Background Change",
  "description": "",
  "id": "skyblue-background-change",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Scenario"
    }
  ]
});
formatter.before({
  "duration": 1635523400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to change the backgroundcolour",
  "description": "",
  "id": "skyblue-background-change;user-should-be-able-to-change-the-backgroundcolour",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the \"Set SkyBlue Backgroundbutton\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to \"background-color: skyblue;\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "Steps.button_exists(String)"
});
formatter.result({
  "duration": 66898400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Backgroundbutton",
      "offset": 16
    }
  ],
  "location": "Steps.i_click_on_the(String)"
});
formatter.result({
  "duration": 80999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "background-color: skyblue;",
      "offset": 37
    }
  ],
  "location": "Steps.the_background_color_will_change_to(String)"
});
formatter.result({
  "duration": 5047433000,
  "status": "passed"
});
formatter.after({
  "duration": 677812801,
  "status": "passed"
});
});elenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:438)\r\n\tat Base.Init.tearDown(Init.java:24)\r\n\tat steps.Steps.teardwn(Steps.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
});