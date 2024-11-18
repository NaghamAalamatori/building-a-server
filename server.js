import http from 'http';              // http is a module
import fs from 'fs/promises'; 
import url from 'url';
import path from 'path';


const __filename = url.fileURLToPath(import.meta.url);           // filename and dirname are from common js
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;         //in .env we put api keys and we don't upload it to git
                   //In computer networking, localhost is a hostname that refers back to the same computer. The number following the colon is a port number. The port number 8000 is commonly used for web development frameworks such as Django, Ruby on Rails and AngularJS.  5000 is used for node.js
const server = http.createServer(async(req , res) => {              //createserver is a method we can use it tkes a function (request , response)
 //   res.write('Hello world');                            //The writable.write() method writes some data to the stream, and calls the supplied callback once the data has been fully handled. 
    // res.setHeader('Content-Type', 'text/html'),
    // console.log(req.url);
    // console.log(req.method);
    // res.writeHead(200, {'Content-Type' : 'text/html'})
    // res.end('<h1>Home page </h1>');                   // whwn we use express it ends automitacly


    try {
        // chaeck if GET request
        if(req.method === 'GET'){
            let filePath;
            if (req.url ==='/'){
                 filePath = path.join(__dirname, 'public' , 'index.html');
            }else if (req.url === '/about'){
                 filePath = path.join(__dirname, 'public' , 'about.html');
            }else {
                throw new Error ('Not Found');
            }
          const data = await fs.readFile(filePath);
          res.setHeader('Content-Type', 'text/html');
          res.write(data);
          res.end();  
        } else {
            throw new Error ('Method Not Allowed');
        }
    } catch (error) {
        res.writeHead(500, {'Content-Type' : 'text/plain'})
        res.end('Server error ');   
    }
    
    
  
});

server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
    
});




// node-modules folder can be deleted and when you run node insatll it will appear again you also don't want to upload it to github how do we not upload it? we make a file called .gitignore and there we put the file name