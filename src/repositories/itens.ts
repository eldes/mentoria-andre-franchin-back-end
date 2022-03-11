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

		const queryExecutada = (err: Error | null, item: Item) => {
			callback(item)
		}

		database.get(`SELECT * FROM itens WHERE id = ${id}`, queryExecutada)
	},
}

export default itensRepository