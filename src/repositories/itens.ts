import Item from '../models/item'

type LoadItensCallback = (itens: Item[]) => void
type LoadItemCallback = (item: Item | undefined) => void

const itensRepository = {
	loadAll: (callback: LoadItensCallback) => {
		// TODO: Operação para conseguir os dados do banco de dados.
		const items = itensMock

		callback(items)
	},

	load: (id: number, callback: LoadItemCallback) => {
		// TODO: Operação para conseguir os dados do banco de dados.
		const item = itensMock.find(item => item.id === id)

		callback(item)
	}
}

export default itensRepository

const itensMock: Item[] = [
	{
		id: 1,
		nome: 'Suco de laranja',
		description: 'Suco natural em caixinha'
	},
	{
		id: 2,
		nome: 'Suco de maçã',
		description: 'Suco natural em caixinha'
	},
]