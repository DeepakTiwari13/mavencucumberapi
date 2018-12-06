Feature: POST api Test with JSON 
Scenario Outline: post data
Given The post endpoint "http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/"
And Post content type "application/json; charset=utf-8"
Then Send new <posts>
And Update post
 Examples:
            |posts|
            |200|
            |400|
            |600|
            |800|
