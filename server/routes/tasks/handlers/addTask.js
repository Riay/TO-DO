const Task = require('../../../models/Task')

function addTask(req,res) {

	const { name } = req.body
	const newTask = new Task ({ name })

	newTask.save()
      .then( msg => {
      	 res.redirect('/tasks')
      })
      .catch( err => {
      	res.json(err)
      })

}

module.exports = addTask