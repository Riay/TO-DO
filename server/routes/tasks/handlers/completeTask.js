const Task = require('../../../models/Task')

function completeTask(req,res) {

	Task.find({completedTask:true})
		.then( tasks => {
			res.render('complete/complete', {tasks})
		})
}

module.exports = completeTask