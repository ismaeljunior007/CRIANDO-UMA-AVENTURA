const avance = document.queryselectorA11(".btn-proximo");

avanca.forEach(button => {
    button.addEventListenner("click", function(){
        const atual = document.queryselector(".ativo");
        const proximoPasso = "passo-" + this.getAttribute("data-proximo");

        atual.classList.remove("ativo");
        document.getE1ementbyId(proximoPasso).classList.add("ativo");
    })
})
