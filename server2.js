import {createServer} from 'http';

const PORT = process.env.PORT; 

const users = [
    {id: 1 , name: "John Doe"},
    {id: 2 , name: "Jane Doe"},
    {id: 3 , name: "Jim Doe"}
];

//Middleware in Node. js refers to a concept where functions can be used to process incoming requests before they reach their final destination and handle outgoing responses before they are sent back to the client. These functions sit in between the initial request and the final response,

//logger middileware
const logger = (req , res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

//json middileware
const jsonMiddileware = (req, res, next) => {
    res.setHeader('Content-Type' , 'application/json');
    next();
};

//route handler for GET /api/users 
// not a middleware function it's just a handler ( doesn't take next)
const getUsersHandler = (req , res) => {
    res.write(JSON.stringify(users));
    res.end();
};

// route handler for GET /api/users/:id
const getUserByIdHandler = (req , res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user){
        res.write(JSON.stringify(user));
     
      } 
      else {
          res.statusCode = 404;
          res.write(JSON.stringify({message: 'User Not Found'}));
      }
      res.end();
};
//Route handler for POST /api/users
const createUserHandler = (req , res) => {
    let body = '';
    //listen for data
    req.on('data' , (chunk) =>{
        body += chunk.toString();
    });
    req.on('end' , () => {
        const newUser = JSON.parse(body);           //turning JSON to Js object
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));     // turning js to json
        res.end();
    })
};



// not found handler 
const notFoundHandler = (req , res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route Not Found'}));
    res.end();
};


const server = createServer( (req, res) => {
      logger (req , res , () => {
        jsonMiddileware(req , res , () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req , res);
            } else if ( req.url.match(/\/api\/users\/([0-9]+)/) &&
                     req.method === 'GET') {
                        getUserByIdHandler(req , res);}
            else if( req.url  === '/api/users' && req.method === 'POST' ) {
                createUserHandler(req , res);
            }
            else {
                notFoundHandler(req, res); 
            }
        });
    });  
});





    //     if (req.url === '/api/users' && req.method === 'GET' ) {
    //         res.setHeader('Content-Type' , 'application/json');
    //         res.write(JSON.stringify(users));
    //         res.end();
    //     }  else if (
    //         req.url.match(/\/api\/users\/([0-9]+)/) &&
    //         req.method === 'GET'
    //       )  {
    //         const id = req.url.split('/')[3];
    //         const user = users.find((user) => user.id === parseInt(id));
    //         res.setHeader('Content-Type' , 'application/json');
    //         if (user){
    //           res.write(JSON.stringify(user));
           
    //         } 
    //         else {
    //             res.statusCode = 404;
    //             res.write(JSON.stringify({message: 'User Not Found'}));
    //         }
    //         res.end();
    //     } 
    //     else {
    //         res.setHeader('Content-Type' , 'application/json');
    //         res.statusCode = 404;
    //         res.write(JSON.stringify({message: 'Route Not Found'}));
    //         res.end();
    //     }
    


server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
    
});