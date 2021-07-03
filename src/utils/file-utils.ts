function RemoveLastDirectoryPartOf(path: string){
    var the_arr = path.split('/');
    the_arr.pop();
    return( the_arr.join('/') );
}

export {RemoveLastDirectoryPartOf};