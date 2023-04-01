export function fullTextSearchableString(query?: string, database?: 'postgresql'|'mysql'){
    let outputStr: string|undefined = undefined
    if(!query) return undefined;
    if(!database){
        return query.replaceAll(' ', '&');
    }

    switch (database) {
        case 'mysql':
            outputStr = query.replaceAll(' ', '&');
            break;
    
        default:
            outputStr = query.replaceAll(' ', '&');
            break;
    }

    return outputStr;
}