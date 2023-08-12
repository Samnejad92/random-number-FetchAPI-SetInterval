// your code here...
const url = 
'http://localhost:3000/random'

async function getData(){
    const respnse = await fetch(url);
    const data = await respnse.json();
    const pr = document.getElementById("price");
    pr.innerText = data.price;
    
}
setInterval(getData,1000);
