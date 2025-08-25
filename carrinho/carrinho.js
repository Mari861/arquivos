document.addEventListener("DOMContentLoaded", function () {
    const maisBtns    = document.querySelectorAll(".lista-itens .mais");
    const menosBtns   = document.querySelectorAll(".lista-itens .menos");
    const removerBtns = document.querySelectorAll(".lista-itens .remover");
    const totalItens = document.getElementById("total-itens");
    const totalPreco = document.getElementById("total-preco");
    const tituloCarrinho = document.getElementById("titulo-carrinho");

        function atualizarTotal() {
            let total = 0;
            let itens = 0;

            document.querySelectorAll(".lista-itens .item").forEach((item) => {
                const qtdSpan  = item.querySelector(".qtd");
                const precoStr = item.getAttribute("data-preco");
                if (!qtdSpan || !precoStr) return; // evita erro se faltar algo

                const qtd   = parseInt(qtdSpan.innerText) || 0;
                const preco = parseFloat(precoStr.replace(",", ".")) || 0;

                itens += qtd;
                total += qtd * preco;
            });

            totalItens.innerText = itens;
            totalPreco.innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
            tituloCarrinho.innerText = `Meu carrinho (${itens} itens)`;
            }


    maisBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const qtdSpan = btn.parentElement.querySelector(".qtd");
            qtdSpan.innerText = parseInt(qtdSpan.innerText) + 1;
            atualizarTotal();
        });
    });

    menosBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const qtdSpan = btn.parentElement.querySelector(".qtd");
            let atual = parseInt(qtdSpan.innerText);
            if (atual > 1) {
                qtdSpan.innerText = atual - 1;
                atualizarTotal();
            }
        });
    });

    removerBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".item").remove();
            atualizarTotal();
        });
    });

    document.getElementById("continuar").addEventListener("click", () => {
        window.location.href = "../checkout/screencheckout.html"; 
    });

    atualizarTotal();
});
