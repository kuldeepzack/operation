

function getCharCodes(s)
{
    let ar = [];
    
    for(let i = 0; i < s.length; i++)
    {
        let code = s.charCodeAt(i);
        ar.push(code);
    }
    
    return ar;
}
console.log(getCharCodes("I like JavaScript"));