import express from 'express'
import Item from '../models/item'

const itensRouter = express.Router()

itensRouter.get('/itens', (req, res) => {
	const itens: Item[] = itensMock
	res.json(itens)
})

itensRouter.get('/itens/:id', (req, res) => {
	const id: number = Number.parseInt(req.params.id)

	if (isNaN(id)) {
		res.status(404).send()
	} else {
		const item = itensMock.find((item) => { return item.id === id })
		if (item === undefined) {
			res.status(404).send()
		} else {
			res.json(item)
		}
	}
})

const itensMock: Item[] = [
	{
		id: 1,
		nome: 'Suco de laranja',
		descricao: 'Suco natural em caixinha'
	},
	{
		id: 2,
		nome: 'Suco de maçã',
		descricao: 'Suco natural em caixinha'
	},
]

export default itensRouter