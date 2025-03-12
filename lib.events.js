import { EventEmitter } from "events";

const  emitter = new  EventEmitter();
emitter.on('send_email', (email_addres)=>{
    console.info('Email berhaasil dikirim ke alamat : ' + email_addres);
})

function forgotPassword (){
    console.log('start forgot password');
    emitter.emit('send_email','mario@gmail.com');
}

forgotPassword()