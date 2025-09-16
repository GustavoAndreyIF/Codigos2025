import * as express from "express";
import { createServer, Server } from 'http';
import * as socketIo from "socket.io"

class App {
    public app: express.Application;
    public server: Server;
    private io: socketIo.Server;
    public PORT: number = 8100;

    constructor() {
        this.routes();
        this.sockets();
        this.listen();
    }

    routes() {
        this.app = express();
        this.app.route("/").get((req, res) => {
            res.sendFile(__dirname + '/index.html');
        });
    }

    private sockets(): void {
        this.server = createServer(this.app);
        this.io = new socketIo.Server(this.server);
    }

    private listen(): void {

        this.io.on('connection', (socket: any) => {
            console.log('a user connected');

            socket.on('chat message', (msg: string) => {
        console.log('message: ' + msg);
        this.io.emit('chat message', msg);
        });

            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });
    }
}

export default new App();
