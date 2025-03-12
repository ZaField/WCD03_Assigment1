const getInitialsTS = (name: string): string =>
    name.split(' ').map(word => word[0].toUpperCase()).join('');
console.log(getInitialsTS("John Doe"));