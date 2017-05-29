const Task = require('../../../models/Task')
 

function updateById (req,res) {

	const { id } = req.params
	const { name, modificatedTask, completedTask} = req.body

	const updateData = {}
	if (name) updateData.name = name
	if (modificatedTask) updateData.modificatedTask = modificatedTask
	if (completedTask) updateData.completedTask = completedTask
		
	 Task.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = updateById	
