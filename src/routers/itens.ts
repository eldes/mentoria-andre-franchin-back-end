import express from 'express'
import Item from '../models/item'
import itensRepository from '../repositories/itens'

const itensRouter = express.Router()

itensRouter.get('/itens', (req, res) => {
	itensRepository.loadAll((itens) => {
		res.json(itens)
	})
})

itensRouter.get('/itens/:id', (req, res) => {
	const id: number = Number.parseInt(req.params.id)

	if (isNaN(id)) {
		res.status(404).send()
	} else {
		itensRepository.load(id, (item) => {
			if (item) {
				res.json(item)
			} else {
				res.status(404).send()
			}
		})
	}
})

export default itensRouter