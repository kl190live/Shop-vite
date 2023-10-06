import { termek } from "./Termek";

function newProduct()
{
  let Name=(document.getElementById('name')as HTMLInputElement).value;
  let Price=(document.getElementById('price')as HTMLInputElement).value;
  let ProductCode=(document.getElementById('productCode')as HTMLInputElement).value;
  





}

function init()
{
  document.getElementById('button')?.addEventListener('submit',newProduct)
}

document.addEventListener('DOMContentLoaded', init)