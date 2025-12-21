async function Load(command,obj={}){
    const response = await fetch('https://nonextensively-monodomous-juana.ngrok-free.dev/submit',
    {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body:JSON.stringify({command , object:obj})
    });
    let res = await response.json();
    return res.result ;
}