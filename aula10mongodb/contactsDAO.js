class contactsDAO {
    //metodos CRUD
    //read
    static async getUsers(client) {
        const cursor = await client 
        .find()
        .project({ _id : 0 })
        try{
            const results = await cursor.toArray()
            return results
        } catch(err) {
            console.log(err)
        }
    }

    //delete
    static async deleteUserByNome(client, nome) {
        const ok = await client
        .deleteOne(nome)

        try {
            return ok
        } catch(err) {
            console.log(err)
        }
    }

    //update
    static async updateTelefoneByEmail(client, email, telefone) {
        const docs = await client
        .updateOne(email, telefone)
        try {
            return docs
        } catch(err) {
            console.log(err)
        }
    }

    //create
    static async insertUser(client, doc) {
        const ok = await client 
        .insertOne(doc)
        try{
            return ok
        } catch(err){
            console.log(err)
        }
    }


}

module.exports = contactsDAO