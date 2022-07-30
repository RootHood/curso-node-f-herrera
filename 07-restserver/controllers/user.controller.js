import { response } from 'express';


export const userGet = (req, res = response) => {
    res.json({ ok: true, msg: 'GET petition from Controller' })
};

export const userPost = (req, res = response) => {
    const { name, age } = req.body;
    res.status(201).json({ ok: true, msg: name + ', ' + age })
}

export const userPut = (req, res = response) => {
    res.json({ ok: true, msg: 'PUT petition from Controller' })
}

export const userPatch = (req, res = response) => {
    res.json({ ok: true, msg: 'PATCH petition from Controller' })
}

export const userDelete = (req, res = response) => {
    res.json({ ok: true, msg: 'DELETE petition from Controller' })
}
