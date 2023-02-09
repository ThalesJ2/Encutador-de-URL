export default function generate (){

    let generateLink  = "qwertyuiopasdfghjklzxcvbnm";
    let newLink = "";
    let pos;
    for(let i=0; i < 5; i++){
        pos = Math.floor(Math.random() * (26 - 1) + 1);
        newLink+=generateLink[pos];
    }
    return newLink;
}
