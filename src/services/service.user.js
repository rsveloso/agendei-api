import bcrypt from "bcrypt";
import repoUser from "../repositories/repository.user.js";
import jwt from "../token.js";

// async function Listar() {
//     const users = await repoUser.Listar();

//     return users;
// }

async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repoUser.Inserir(name, email, hashPassword);

    user.token = jwt.CreateToken(user.id_user);

    return user;
}

async function InserirAdmin(name, email, password) {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repoUser.InserirAdmin(name, email, hashPassword);
    user.token = jwt.CreateToken(user.id_user);
    return user;
}

// async function Editar(id_user, name, email, password) {
//     const hashPassword = await bcrypt.hash(password, 10);
//     const user = await repoUser.Editar(id_user, name, email, hashPassword);
//     return user;
// }

async  function Login(email, password) {
    const user = await repoUser.ListarByEmail(email);

    if (user.length === 0)
        return [];
    else {
        if (await bcrypt.compare(password, user.password)){
            delete user.password

            user.token = jwt.CreateToken(user.id_user);

            return user;
        } else {
            return [];
        }
    }
}

async function LoginAdmin(email, password) {
    const user = await repoUser.ListarByEmailAdmin(email);
    if (user.length === 0)
        return [];
    else {
        if (await bcrypt.compare(password, user.password)){
            delete user.password
            user.token = jwt.CreateToken(user.id_user);
            return user;
        } else {
            return [];
        }
    }
}

async function Profile(id_user) {

    const user = await repoUser.Profile(id_user);

    return user;
}

export default { Inserir, Login, InserirAdmin, LoginAdmin, Profile };