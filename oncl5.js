let productlist=[];
const list = document.querySelector.bind(document);
function add(){
    let input = document.getElementById('input-product').value;
    productlist.push(input);
    console.log(productlist);
    showproduct();
}
function showproduct(){
    const htmls = productlist.map(item=>{
        return
        `
            <h1>${item}</h1>
        `
    });
  document.querySelector.bind(document)('.list-product').innerHTML = htmls.join(' ');
}