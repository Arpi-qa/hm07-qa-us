# Sprint 7 project

Project 7

Project name: Positive testing for Urban Grocers server

In this project I completed 4 tasks using JavaScript programming language. 
I wrote tests for GET, POST, PUT, and DELETE requests.
Working  with Git and GitHub during project.

1. Connect my GitHub account to Practicum.
2. Clone the repo to my computer:
   a. Created a directory to store all of my projects useing commands:
       cd ~               
       mkdir projects     
       cd projects 

3. Work with the project locally.
   During project I used variable to store the API URL for Urban Grocers server. The variable name: config.js  where I saved URL.

4. I checked to functions: 
    a. Check the response status code
    b. Check that the response body contains the expected data

5. I used:
   postRequest() 
   getRequest() 
   putRequest()
   deleteRequest()  

6. During testing I used I created variables.

   1. For Status code I used:
      let actualStatusCode;
      actualStatusCode = response.status;
      expect(actualResponsBody.name).toBe("");

   2. For body I used:   
      let actualResponsBody;
      actualResponsBody = await response.json();
      expect(actualResponseBody.name).toBe("");