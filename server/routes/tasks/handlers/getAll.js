const Task = require('../../../models/Task')

function getAll(req,res) {

  const title = "Your Tasks"
  
  Task.find()
      .then( tasks => {
      	
      	res.render('index',{tasks})
      })
}

module.exports = getAll