Feature: API Test
Scenario: Get data
Given The Endpoint "http://ec2-54-174-213-136.compute-1.amazonaws.com:3000/"
And Content type "application/json; charset=utf-8"
Then Get all posts
And Retrieve all comments
And Fetch all users
But Check response header 