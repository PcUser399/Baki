async function Load(command,info="10",obj={}){
    const response = await fetch('https://hidebanck-cloudserves.onrender.com/submit',
    {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body:JSON.stringify({command , info ,object:obj})
    });
    let res = await response.json();
    return res.result ;
}
async function LogIpAdress(){
    await fetch('https://hidebanck-cloudserves.onrender.com/get-ip');
    return ;
}