This project is created using maven and cucumber. It has the basic GET,POST,PUT apis methods in it.

Project description :-

class : mavencucumberapi/src/test/java/com/assignment/common/apispecificMethod.java
This class is serving as a base class for framework.Every test case is inheriting this class and accessing functions
to execute GET,PUT,POST method.

mavencucumberapi/src/test/java/com/assignment/api/stepDefinitions/getDetails.java and 
mavencucumberapi/src/test/java/com/assignment/api/stepDefinitions/postDetails.java are step definition files of tests in cucumber.
These classes contains the test case in form of user story.

Example :- 
Given url is this,
And data is user name,
When credential is admin,
Then verify page element.

mavencucumberapi/src/test/java/com/assignment/testRunner/getdetailRunnerTest.java and 
mavencucumberapi/src/test/java/com/assignment/testRunner/postdetailRunnerTest.java are the test runner class for 
step definition class.We can run test case individually using runner class and Junit

mavencucumberapi/resources/features/getapi.feature and mavencucumberapi/resources/features/postapi.feature are the main
feature class from where data is supplied to test case.

Execute test case in batch :- Go to directory where pom.xml is located and fire command :   mvn test
All test cases will be executed by maven and normal html report will be generated under project/target directory.




