package com.assignment.testRunner;

	import org.junit.runner.RunWith;
	import cucumber.api.CucumberOptions;
	import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
	      features="resources/features/postapi.feature",
	      glue="com.assignment.api.stepDefinitions",
	      plugin = {"pretty", "html:target/cucumber-html-report","json:target/cucumber.json"},
	      monochrome = true
	)
	public class postdetailRunnerTest {
	}



