import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_ITENS_CREATE = `
	CREATE TABLE itens (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		nome TEXT NOT NULL,
		descricao TEXT NOT NULL
	)
`

const criacaoTabelaItensExecutada = (err: Error | null) => {
	if (err) {
		// Possivelmente a tabela já foi criada
	} else {
		console.log('Tabela Itens criada com sucesso.')
	}
}

const databaseAberto = (err: Error | null) => {
	if (err) {
		console.error(err.message)
		throw err
	} else {
		console.log('Base de dados conectada com sucesso.')

		database.run(SQL_ITENS_CREATE, criacaoTabelaItensExecutada)
	}
}

const database = new sqlite3.Database(DBSOURCE, databaseAberto)

export default database