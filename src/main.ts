import { termek } from "./Termek";
import "bootstrap/dist/css/bootstrap.css"

let List : termek[]=[];

function Kiiras()
{
  let table=document.getElementById('table')
  table!.innerHTML='';
  for(const t of List)
  {
    let tr=document.createElement('tr');
    tr.textContent=`${t.name} ${t.price} ${t.product}`
    
    table!.appendChild(tr);
  }
}

function newProduct()
{
  let Name=(document.getElementById('name')as HTMLInputElement).value;
  let Price=parseInt((document.getElementById('price')as HTMLInputElement).value);
  let ProductCode=(document.getElementById('productCode')as HTMLInputElement).value;

  let Termek=new termek(Name,Price,ProductCode)
  List.push(Termek);

  Kiiras();

}

function init()
{
  document.getElementById('button')!.addEventListener('click',newProduct)
}

document.addEventListener('DOMContentLoaded', init)