const express = require("express")
const route = require("./router/route")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")


mongoose.set('strictQuery', true)

app.use(cors())

mongoose
  .connect(
    "mongodb+srv://shishir1912-DB:F85ml8mUXi1MrEKV@cluster0.2ta5zuw.mongodb.net/jiraProject",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => err);


app.use("/",route)

app.listen(3001, function(){
    console.log("express is running on port " + 3001)
})









// const fetch = require('node-fetch');

// fetch('https://sample1project.atlassian.net/rest/api/3/issue/SAM', {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ATATT3xFfGF0nejeWMC8y7mC3Avf2D0WID6J39yYGasxO9uUHvJwbrz3LVWSRkyfO7AIst2KN019o1UVQzd_Oj3MQ2g0LyBebBJWA-ffRubX1IDy8MMXbHaop-uVSu7k4JScJ4wUNrOi5tlwg1FKxZghYVghBimdzYLYxBE1hlvJiBmFqUTE6kA=E7DA68B5`,
//     'Accept': 'application/json'
//   }
// })
//   .then(response => {console.log(response)})
//   .catch((error)=> console.log(error))
 

// const request = require('request');

// const jiraUrl = 'https://sample1project.atlassian.net/';
// const issueKey = 'SAM-1'; // Replace with the key of the issue you want to fetch

// const apiToken = 'ATATT3xFfGF0tLw3JgIuX9uS-VLXAH-V2fcBsgD3vJdeyKXQFiIWL4iCMaCs8Q9VaFw4YSW8hanO0ULvuRWyVYLxpFtEl6XpWeQOC_EeCiP2EljZEx4CFKZro1wC91paxJpjm5Nt8zK4FGjL7k-vEgs1UwjeW705fCKTuPDoGEu3CPwi3fCv5Rs=FDD6AA78'; // Replace with your Jira API token

// request({
//   url: `${jiraUrl}/rest/api/3/issue/${issueKey}`,
//   headers: {
//     'Authorization': `Bearer ${apiToken}`,
//     'Accept': 'application/json'
//   }
// }, (error, response, body) => {
//   if (error) {
//     console.error('There was a problem with the request:', error);
//     return;
//   }
//   if (!response.statusCode.toString().startsWith('2')) {
//     console.error('There was a problem with the request:', response.statusCode, body);
//     return;
//   }
//   const data = JSON.parse(body);
//   console.log(data);
// });


// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
// const fetch = require('node-fetch');

// fetch('https://sample1project.atlassian.net/rest/api/3/SAM', {
//   method: 'GET',
//   headers: {
//     'Authorization': `Basic ${Buffer.from(
//       'shishirsharma453@gmail.com:ATATT3xFfGF0tLw3JgIuX9uS-VLXAH-V2fcBsgD3vJdeyKXQFiIWL4iCMaCs8Q9VaFw4YSW8hanO0ULvuRWyVYLxpFtEl6XpWeQOC_EeCiP2EljZEx4CFKZro1wC91paxJpjm5Nt8zK4FGjL7k-vEgs1UwjeW705fCKTuPDoGEu3CPwi3fCv5Rs=FDD6AA78'
//     ).toString('base64')}`,
//     'Accept': 'application/json'
//   }
// })
//   .then(response => {
//     // console.log(
//     //   `Response: ${response.status} ${response.statusText}`
//     //   // console.log(response)
//     // );
//     return response.json();
//   })
//   .then(text => console.log(text))
//   .catch(err => console.error(err));

// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch







    

 




  


