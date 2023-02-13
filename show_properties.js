function showProperties(value) {
    for (let prop in value) {
        if (typeof value[prop] === 'string')
           console.log(prop, value[prop]);
    }
}