const router = require('express').Router()
const Character = require('../models/Character.model')


// ALL ROUTES IN HERE ARE PREFIXED WITH ——> /api/characters


// ROUTE FOR RENDERING ALL CHARACTERS   ———————————   RENDER ALL CHARACTER ———————————————————
router.get('/', async (req, res, next) => {
	try {
		// LIST ALL THE CHARACTERS
		// RETURN AN OBJECT WITH THE VALUE OF EACH CHARACTER
		const allCharacters = await Character.find()
		console.log(allCharacters)
		res.status(200).json(allCharacters)

	} catch (error) {
		next(error);
	}
})


// LISTEN TO POST FOR CREATE ONE CHARACTER    ——————————————  CREATE ROUTE —————————————————————
router.post('/', async (req, res, next) => {
	try {
		// GET INPUT FROM THE FORM & CREATE ONE WITH THE INFO
		const oneToCreate = { ...req.body }
		const createdOne = await Character.create(oneToCreate)
		// CREATION STATUS CODE
		// TAKE JSON INPUT TO GIVE BACK JS OBJECT WITH THE INFORMATIONS 
		res.status(201).json(createdOne)
	} catch (error) {
		next(error)
	}
})


//————————————————————————————————————————————————————— GET ONE BY ID ROUTE ———————————————————
router.get('/:id', async (req, res, next) => {
	try {
		const currentOne = await Character.findById(req.params.id)
		res.json(currentOne)

	} catch (error) {
		next(error)
	}
})

//—————————————————————————————————————————————————————————— UPDATE ROUTE ———————————————————————
router.patch('/:id', async (req, res, next) => {
	const { id } = req.params
	const oneToUpdate = { ...req.body }
	try {
		const characterUpdate = await Character.findByIdAndUpdate(
			id,
			oneToUpdate,
			{ new: true }
		)

		res.json(characterToUpdate)
	} catch (error) {
		next(error)
	}
})


//——————————————————————————————————————————————————————————— DELETE ROUTE ——————————————————————
router.delete('/:id', async (req, res, next) => {
	const { id } = req.params
	const oneToDelete = { ...req.body }

	try {

		const deleteCharacter = await Character.findByIdAndDelete(oneToDelete)

		res.json({ message: `The character ${id} has been successfully deleted` })

	} catch (error) {
		next(error)
	}
})

module.exports = router
