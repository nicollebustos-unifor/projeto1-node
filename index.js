const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
})

//rota do cadastro de produtos
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!</h1>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})


//rota com parametro opcional
app.get("/cadastro/{:nome}", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>produto " + nome + " criado!</h1>");
    }else{
        res.send("produto criado con exito!");
    }
    
})

//NOVA ROTA 1: rota simples (igual a /produtos)
app.get("/clientes", function(req,res){
    res.send("<h1>Lista de Clientes creada!!!!</h1>");
})

//NOVA ROTA 2: rota com parametro (igual a /consulta)
app.get("/pedido/:numero", function(req,res){
    res.send("<h1>Pedido numero " + req.params.numero + " encontrado!</h1>");
})

//NOVA ROTA 3: rota com parametro opcional (igual a /cadastro)
app.get("/fornecedor/{:nome}", function(req,res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>fornecedor " + nome + " cadastrado!</h1>");
    }else{
        res.send("fornecedor cadastrado!");
    }
})

//NOVA ROTA 4: rota sobre a aplicacao
app.get("/sobre", function(req,res){
    res.send("<h1>Sobre: aplicacao de Nicolle - versao 2</h1>");
})

//NOVA ROTA 5: rota contato
   app.get("/contato", function(req,res){
       res.send("<h1>Contato: nicolle@exemplo.com</h1>");
   })

   
app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 3000 (ou na porta da plataforma)
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
