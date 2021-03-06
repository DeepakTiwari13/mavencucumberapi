$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/features/postapi.feature");
formatter.feature({
  "line": 1,
  "name": "POST api Test with JSON",
  "description": "",
  "id": "post-api-test-with-json",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "post data",
  "description": "",
  "id": "post-api-test-with-json;post-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The post endpoint \"http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Post content type \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Send new \u003cposts\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Update post",
  "keyword": "And "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "post-api-test-with-json;post-data;",
  "rows": [
    {
      "cells": [
        "posts"
      ],
      "line": 8,
      "id": "post-api-test-with-json;post-data;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 9,
      "id": "post-api-test-with-json;post-data;;2"
    },
    {
      "cells": [
        "400"
      ],
      "line": 10,
      "id": "post-api-test-with-json;post-data;;3"
    },
    {
      "cells": [
        "600"
      ],
      "line": 11,
      "id": "post-api-test-with-json;post-data;;4"
    },
    {
      "cells": [
        "800"
      ],
      "line": 12,
      "id": "post-api-test-with-json;post-data;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "post data",
  "description": "",
  "id": "post-api-test-with-json;post-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The post endpoint \"http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Post content type \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Send new 200",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Update post",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/",
      "offset": 19
    }
  ],
  "location": "postDetails.the_post_endpoint(String)"
});
formatter.result({
  "duration": 4251296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json; charset\u003dutf-8",
      "offset": 19
    }
  ],
  "location": "postDetails.Post_content_type(String)"
});
formatter.result({
  "duration": 254861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 9
    }
  ],
  "location": "postDetails.send_new(int)"
});
formatter.result({
  "duration": 504100256,
  "error_message": "java.io.IOException: Server returned HTTP response code: 500 for URL: http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/posts\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat sun.net.www.protocol.http.HttpURLConnection$10.run(HttpURLConnection.java:1944)\r\n\tat sun.net.www.protocol.http.HttpURLConnection$10.run(HttpURLConnection.java:1939)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getChainedException(HttpURLConnection.java:1938)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getInputStream0(HttpURLConnection.java:1508)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1492)\r\n\tat com.assignment.common.apispecificMethod.postMethod(apispecificMethod.java:68)\r\n\tat com.assignment.api.stepDefinitions.postDetails.send_new(postDetails.java:35)\r\n\tat ✽.Then Send new 200(resources/features/postapi.feature:5)\r\nCaused by: java.io.IOException: Server returned HTTP response code: 500 for URL: http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/posts\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getInputStream0(HttpURLConnection.java:1894)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1492)\r\n\tat java.net.HttpURLConnection.getResponseCode(HttpURLConnection.java:480)\r\n\tat com.assignment.common.apispecificMethod.postMethod(apispecificMethod.java:64)\r\n\tat com.assignment.api.stepDefinitions.postDetails.send_new(postDetails.java:35)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:369)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:275)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:239)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:160)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:373)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:334)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:119)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:407)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "postDetails.update_post()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "post data",
  "description": "",
  "id": "post-api-test-with-json;post-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The post endpoint \"http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Post content type \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Send new 400",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Update post",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/",
      "offset": 19
    }
  ],
  "location": "postDetails.the_post_endpoint(String)"
});
formatter.result({
  "duration": 120035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json; charset\u003dutf-8",
      "offset": 19
    }
  ],
  "location": "postDetails.Post_content_type(String)"
});
formatter.result({
  "duration": 101831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 9
    }
  ],
  "location": "postDetails.send_new(int)"
});
formatter.result({
  "duration": 575723184,
  "status": "passed"
});
formatter.match({
  "location": "postDetails.update_post()"
});
formatter.result({
  "duration": 266966926,
  "error_message": "java.lang.AssertionError: PUT request update failed  expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat com.assignment.api.stepDefinitions.postDetails.update_post(postDetails.java:42)\r\n\tat ✽.And Update post(resources/features/postapi.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "post data",
  "description": "",
  "id": "post-api-test-with-json;post-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The post endpoint \"http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Post content type \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Send new 600",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Update post",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/",
      "offset": 19
    }
  ],
  "location": "postDetails.the_post_endpoint(String)"
});
formatter.result({
  "duration": 90453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json; charset\u003dutf-8",
      "offset": 19
    }
  ],
  "location": "postDetails.Post_content_type(String)"
});
formatter.result({
  "duration": 83058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 9
    }
  ],
  "location": "postDetails.send_new(int)"
});
formatter.result({
  "duration": 533814953,
  "status": "passed"
});
formatter.match({
  "location": "postDetails.update_post()"
});
formatter.result({
  "duration": 250784354,
  "error_message": "java.lang.AssertionError: PUT request update failed  expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat com.assignment.api.stepDefinitions.postDetails.update_post(postDetails.java:42)\r\n\tat ✽.And Update post(resources/features/postapi.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 12,
  "name": "post data",
  "description": "",
  "id": "post-api-test-with-json;post-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The post endpoint \"http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Post content type \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "Send new 800",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Update post",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/",
      "offset": 19
    }
  ],
  "location": "postDetails.the_post_endpoint(String)"
});
formatter.result({
  "duration": 273066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json; charset\u003dutf-8",
      "offset": 19
    }
  ],
  "location": "postDetails.Post_content_type(String)"
});
formatter.result({
  "duration": 138809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "800",
      "offset": 9
    }
  ],
  "location": "postDetails.send_new(int)"
});
formatter.result({
  "duration": 337712060,
  "status": "passed"
});
formatter.match({
  "location": "postDetails.update_post()"
});
formatter.result({
  "duration": 331618138,
  "error_message": "java.lang.AssertionError: PUT request update failed  expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat com.assignment.api.stepDefinitions.postDetails.update_post(postDetails.java:42)\r\n\tat ✽.And Update post(resources/features/postapi.feature:6)\r\n",
  "status": "failed"
});
});