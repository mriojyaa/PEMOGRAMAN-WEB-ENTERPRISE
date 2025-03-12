import {readFile,writeFile} from 'fs/promises';
import { console } from 'inspector';

async function extractFile() {
    try {
        const data = await readFile ('data.txt','utf8');
        console.log('isi file :', data);
    } catch (err) {
        console.error('Eror membaca file',err);
    }
}

async function writetoFile(){
    try{
         await writeFile ('output.txt','Hello, Node.js!');
         console.log('file berhasil tertulis.');
    }catch (err){
        console.error('eror menulis file:',err);
    }
}

extractFile()
writetoFile()
