import serviceUser from "../services/service.user.js";

// async function Listar(req, res) {
//     const users = await serviceUser.Listar();

//     res.status(200).json(users);
// }

async function Inserir(req, res) {

    const {name, email, password} = req.body;

    const user = await serviceUser.Inserir(name, email, password);
    
    res.status(201).json(user);
}

// async function Editar(req, res) {
//     const {id_user} = req.params;
//     const {name, email, password} = req.body;
//     const user = await serviceUser.Editar(id_user, name, email, password);
//     res.status(200).json(user);
// }

async function Login(req, res) {

    const {email, password} = req.body;

    const user = await serviceUser.Login(email, password);

    if(user.length === 0)
        return res.status(401).json({message: "E-mail ou senha inválidos"});
    else
     return res.status(200).json(user);
}

async function Profile(req, res) {

    const id_user = req.id_user;
    const user = await serviceUser.Profile(id_user);

    res.status(200).json(user);
}

export default { Inserir, Login, Profile };