import Item from '../models/item'
import database from './database'

type LoadItensCallback = (itens: Item[]) => void
type LoadItemCallback = (item: Item | undefined) => void
type InsertCallback = (id: number) => void
type UpdateCallback = () => void
type DeleteCallback = () => void

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

	insert: (item: Item, callback: InsertCallback) => {
		const queryExecutada = (err: Error | null) => {
			callback(0)
		}

		database.exec(`INSERT INTO itens (nome, descricao) VALUES ('${item.nome}', '${item.descricao}')`, queryExecutada)
	},

	update: (id: number, item: Item, callback: UpdateCallback) => {
		const queryExecutada = (err: Error | null) => {
			callback()
		}

		database.exec(`UPDATE itens SET nome = '${item.nome}', descricao = '${item.descricao}' WHERE id = ${id}`, queryExecutada)
	},

	delete: (id: number, callback: DeleteCallback) => {
		const queryExecutada = (err: Error | null) => {
			callback()
		}

		database.exec(`DELETE from itens WHERE id = ${id}`, queryExecutada)
	},
}

export default itensRepository