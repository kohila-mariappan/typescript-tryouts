import Users from "../models/user";

const createUser = async()=>{
    await Users.create({
        name: 'kohila',
        gender: 'female',
        email: "Welcome@gmail.com",
      })
}
createUser();
