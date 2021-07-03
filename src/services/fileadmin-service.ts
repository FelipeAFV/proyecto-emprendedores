import fs from 'fs';
import {RemoveLastDirectoryPartOf} from '../utils/file-utils';

class FileService{


    moveNewFile(oldPath:string, newPath:string){
            const parenthPath = (RemoveLastDirectoryPartOf(newPath));
            

            fs.mkdir(parenthPath, {recursive: true},(err) => {
                    console.log('err');
            });
            
            
            fs.rename(oldPath, newPath, function (err) {
                if (err) throw err
                console.log('Successfully moved')
            })
    }

   

}

export default new FileService();