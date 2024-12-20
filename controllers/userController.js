let users = [
    { id: 1, name: 'krish' },
    { id: 2, name: 'kish' },
];

const getUsers = (req, res) => {
    res.json(users);
};

const createUser = (req, res) => {
    const { name } = req.body;
    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find((u) => u.id === parseInt(id));
    if (user) {
        user.name = name;
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((u) => u.id !== parseInt(id));
    res.status(204).send();
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
