const Cliente = require('../models/Cliente')

module.exports = {
    create: async (req, res) => {
        const id = await Cliente.create(req.body)
        return await res.redirect(`/cliente/${id}`)
    },
    form: async (_, res) => {
        await res.redirect('/cliente/novo')
    },
    delete: async (req, res) => {
        const id = await req.body.id
        Cliente.destroy({where: {id}})
        return render.redirect('/cliente')
    },
    update: async (req, res) => {
        const cliente = await req.body
        const id = Cliente.update({id: cliente.id}, {
            razao: cliente.razao,
            responsavel: cliente.responsavel,
            ddd: cliente.ddd,
            telefone: cliente.telefone,
            endereco: cliente.endereco,
            cnpj: cliente.cnpj,
            inscricao_estadual: cliente.inscricao_estadual,
            email: cliente.email,
            cep: cliente.cep,
            estado: cliente.estado,
            cidade: cliente.cidade,
            bairro: cliente.bairro
        })
        return redirect(`/cliente/${id}`)
    },
    view: async (req, res) => {
        const id = req.params.id
        const cliente = Cliente.findByPk(id)
        return await res.render('/cliente/view', {cliente})
    },
    list: async (_, res) => {
        const clientes = Cliente.findAll()
        return await res.redirect('cliente/list', {clientes})
    }
}