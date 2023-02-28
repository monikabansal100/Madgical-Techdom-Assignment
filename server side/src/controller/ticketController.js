const ticketModel = require("../model/ticketModel")
const fetch = require('node-fetch');


const createTicket =  async function (req,res){
  try {
    let data = await fetch('https://sample1project.atlassian.net/rest/api/3/search', {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from(
            'shishirsharma453@gmail.com:ATATT3xFfGF0dxxZDlZ1rAZaLLgcKePNfZodZBPPxnC-IvwrV9p8_0RDBYHHoEKKEhzbefN6BTD1y9YIWPEnZjnOFznpKv4txL2dKyzyiVr1BB17sZ4xsxPEEVyxxxxc-OyPY8qg8LwA4FunQCFy3XdjF15xwk6bF0wAyZVZIP8lpx33tAd2tjo=3A828B55'
          ).toString('base64')}`,
          'Accept': 'application/json'
        }
      })
         
    let alldata = await data.json()
    let arr = []
     alldata.issues.forEach(ele => {
    
         let obj = {}
         let oneday = 24 * 60 * 60 * 1000;
        const currentDate = new Date()
        const futureDate = new Date(currentDate.getTime() + oneday);

        obj.Number = ele.id
        obj.projectKey = ele.key
        obj. projectName= ele.fields.project.name
        obj.createdAt = ele.fields.created
        obj.priority = ele.fields.priority.name
        obj.Description = ele.fields.issuetype.description
        obj.summary = ele.fields.summary
        obj.Reporter = ele.fields.reporter.displayName
        obj.Status = ele.fields.status.name
        obj.updatedAt = ele.fields.updated 
        obj.dueDate = futureDate

          arr.push(obj)
    });
  

    for(let i = 0 ; i< arr.length;i++){
        let res = arr[i]
        console.log(res)
        await ticketModel.updateMany({Number:res.Number},{$set:res},{upsert:true})
    }
   
     
    return  res.status(200).send({Status:true, message:"datastored sucessfully"})
  } catch (err) {
    return res.status(500).send({status:false,message:"server error",error:err.message})
  }

}


const getTickets = async function (req,res){
try {
  let alltickets = await ticketModel.find()
 return res.status(200).send({status:false,message:"data fetch sucessful",data:alltickets})
} catch (err) {
  return res.status(500).send({status:false, message:"server error"})
}

}

module.exports = {createTicket,getTickets}