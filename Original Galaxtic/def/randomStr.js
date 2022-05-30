export function randomStr(lngth){
    let result = 'nc';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < lngth; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}