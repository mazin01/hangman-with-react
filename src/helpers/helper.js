export function showNotification(setter) {
    setter(true)
    setTimeout(() => {
        setter(false);
    }, 2000)
}

export function checkWin(corrent, wrong, word) {
    let status = 'win';
    // check for win
    word.split('').forEach(letter => {
        if(!corrent.includes(letter)){
            status = '';
        }
    });

    // check if lose
    if(wrong.length === 6) status = 'lose';

    return status;
}