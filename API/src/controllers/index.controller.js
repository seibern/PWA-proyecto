const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'pandemanteca4444',
    database: 'PwaProject',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const login = async (req, res) => {
    const {email, password} = req.body;
    console.log("Email:" + email);
    const name = '';
    const response = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    if(response.rows === 0){
        return res.json({
            message: 'Email o contraseña incorrecta',
            body: {
                user: {email, password, name}
            }
        })
    }
    else {
        //name = response.rows[0].name;
        return res.json({
            message: 'Ok',
            body:{
                user: {email, password, name}
            }
        })
    }
}

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body.name);
    
    const response = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
    res.json({
        message: 'User Added successfully',
        body: {
            user: {name, email}
        }
    })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const response =await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    res.json('User Updated Successfully');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login
};