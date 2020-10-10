exports.parseQuerySort = (sort, defaultSort) => {
    if(sort) {
        if(sort.slice(0)[0] === '-'){
            return [[sort.slice(1), 'DESC']]
        } else {
            return [[sort, 'ASC']]
        }
    }
    return [defaultSort]
}
