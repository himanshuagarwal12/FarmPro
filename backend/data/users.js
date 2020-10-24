import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Himanshu Agarwal',
    email: 'himanshu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sakshi',
    email: 'sakshi@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
