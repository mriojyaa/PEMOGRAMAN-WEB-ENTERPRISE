import {readFile,writeFile} from 'fs/promises';

async function extractFile() {
    const file = await readFile ('data.txt','utf8');
    console.info(file);
}

async function writetoFile(){
    const file = await writeFile ('output.txt','ini adalahh otuput dari node js');
    console.info('write file berhasil');
}

extractFile()
writetoFile()