import Item from '../models/item'
import database from './database'

type LoadItensCallback = (itens: Item[]) => void
type LoadItemCallback = (item: Item | undefined) => void

const itensRepository = {
	loadAll: (callback: LoadItensCallback) => {

		const queryExecutada = (err: Error | null, itens: Item[]) => {
			callback(itens)
		}

		database.all('SELECT * FROM itens', queryExecutada)		
	},

	load: (id: number, callback: LoadItemCallback) => {
		// TODO: Operação para conseguir os dados do banco de dados.
		const item = itensMock.find(item => item.id === id)

		callback(item)
	},
}

export default itensRepository

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