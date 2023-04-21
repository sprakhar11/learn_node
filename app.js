const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("the port number is ", port);
});

let users = [
    {
        id : 1,
        name : "Prakhar",
    },
    {
        id : 2,
        name : "Prakhar2",
    },
    {
        id : 3,
        name : "Prakhar3",
    },
];
//mini app
const userRouter = express.Router();

app.use('/user', userRouter);

userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(patchUser)
.delete(deleteUser)

userRouter
.route("/:id")
.get(getUserById)

function getUser(req, res){
    res.send(users);
}

function postUser(req, res){
    console.log(req.body)
    users = req.body;
    res.json({
        message : "Data is received successfully",
        user : req.body,
    });

}

function patchUser(req, res){
    console.log('req.body-> ' , req.body);

    let dataToBeUpdated = req.body;

    for(key in dataToBeUpdated){
        users[key] = dataToBeUpdated[key];

    }
    res.json({
        message : "Data Updated Successfully",
    })
}

function deleteUser(req, res){
    users = {}
    res.json({
        message : "User deleted Successfully",
    })
}

function getUserById(req, res){
    console.log(req.params.id);
    let paramsId = req.params.id;

    let obj = {};
    let flag = 0;
    for(let i = 0; i < users.length; i++){
        if(users[i]['id'] == paramsId){
            obj = users[i];
            flag = 1;
            break;
        }
    }
    
    res.json({
        message : flag == 1 ? "Found user" : "Not found",
        User : flag == 1 ? obj : {},      
    })
    res.end()

}


