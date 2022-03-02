import express from 'express'
import Item from '../models/item'

const itensRouter = express.Router()

itensRouter.get('/itens', (req, res) => {
	const itens: Item[] = [
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
	res.json(itens)
})

export default itensRouter