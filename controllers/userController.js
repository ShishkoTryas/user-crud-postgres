import { User } from "../models/user.js"

const userController = {}

userController.allUsers = async (req, res) => {
    const users = await User.allUsers()
    res.json(users)
}

userController.createUser = async (req, res) => {
    try {
        const { name, email } = req.body
        const user = await User.createUser(name, email)
        res.json(user)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}


userController.userId = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.userId(id);
        res.json(user);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

userController.update = async (req, res) => {
    try {
         const id = req.params.id;
         const { name, email } = req.body;
         const user = await User.update(id, name, email);
        res.json(user);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

userController.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.delete(id);
        res.json(user);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export { userController }