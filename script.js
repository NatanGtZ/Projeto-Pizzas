const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

// função para adcionar as pizzas na tela 
// mapeia a área da tela e divide na quatidade de itens cadastrados clonando o modelo
pizzaJson.map((item, index)=>{

    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    //preencher as informações em pizza item
   
    // seleciona a div da imagem e seleciona a tag img dentro da div 
    pizzaItem.querySelector(' .pizza-item--img img ').src = item.img;

    //adciona o preco descrição e sabor da pizza 
    pizzaItem.querySelector(' .pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    // usando template string para criar o modelo que deve ser usado para os preços 
    // toFixed = usado para formatar os preços, colocando todos com 2 casas depois da virgula
    pizzaItem.querySelector(' .pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;


    // selecionando a tag a de pizza item  e adicionando um evento de click por meio de uma arrow function
    // tirando a função default da tag 'a'
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        c('.pizzaWindowArea').style.opacity = 0;
        // seleciona a tela com display none e troca para display flex para  aparecer ao clicar 
        c('.pizzaWindowArea').style.display = 'flex';
        // setando uma tempo de espera para excutar a transição de opacidade de 0 para 1.
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
        //console.log("clicou na pizza");

    });

    c('.pizza-area').append(pizzaItem);

});


