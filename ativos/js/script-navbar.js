document.querySelector('.navbar-link-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.navbar-menu').classList.add('shown');

});

document.querySelector('.navbar-menu-header-close').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.navbar-menu').classList.remove('shown');

});

/* Adiciona, apos clicar na pesquisa, a barra de pesquisas recentes */
document.querySelector('.navbar-form-input').addEventListener('focus', function() {
    const thisEl = this;
    document.querySelector('navbar-form-autocomplete-wrapper')?.remove()
    document.querySelector('.navbar-form').classList.add('active');

    this.parentNode.insertAdjacentHTML('beforeend', `
    <div class="navbar-form-autocomplete-wrapper">
        <div class="navbar-form-autocomplete-box">
            <div class="navbar-form-autocomplete-box-header">
                <div class="navbar-form-autocomplete-box-title">
                    Pesquisas Comuns
                </div>
            </div>
            <ul class="navbar-form-autocomplete-box-result">
                <button type="button" data-value="keyword 1"><i class="ri-search-line"></i> pesquisa-chave 1</button>
                <button type="button" data-value="keyword 2"><i class="ri-search-line"></i> pesquisa-chave 2</button>
                <button type="button" data-value="keyword 3"><i class="ri-search-line"></i> pesquisa-chave 3</button>
            </ul>
        </div>
        <div class="navbar-form-autocomplete-box">
            <div class="navbar-form-autocomplete-box-header">
                <div class="navbar-form-autocomplete-box-title">
                    Pesquisas Recentes
                </div>
                <a href="" class="navbar-form-autocomplete-box-delete"><i class="ri-delete-bin-5-line"></i></a>
            </div>
            <ul class="navbar-form-autocomplete-box-result">
                <button type="button" data-value="keyword 1">
                    <i class="ri-search-line"></i> pesquisa-chave 1 
                    <a href="" class="navbar-form-autocomplete-box-result-item-delete">&times;</a>
                </button>
                <button type="button" data-value="keyword 2">
                    <i class="ri-search-line"></i> pesquisa-chave 2 
                    <a href="" class="navbar-form-autocomplete-box-result-item-delete">&times;</a>
                </button>
                <button type="button" data-value="keyword 3">
                    <i class="ri-search-line"></i> pesquisa-chave 3 
                    <a href="" class="navbar-form-autocomplete-box-result-item-delete">&times;</a>
                </button>
            </ul>
        </div>
    </div>
    `)

    this.parentNode.querySelectorAll('.navbar-form-autocomplete-box-result > *').forEach(function(el) {
        el.addEventListener('click', function() {
            thisEl.value = el.dataset.value;
        })
    });
});

/* Pega o valor da pesquisa e coloca no input e também apaga quando clica */
document.querySelector('.navbar-form-input').addEventListener('blur', function() {
    setTimeout(function() {
        document.querySelector('.navbar-form-autocomplete-wrapper')?.remove();
    }, 150)
});

/* Apaga a barra de pesquisas recentes */
document.querySelector('.navbar-form-close').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.navbar-form').classList.remove('active'),
    document.querySelector('.navbar-form-autocomplete-wrapper')?.remove();
});

