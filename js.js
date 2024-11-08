addEventListener("DOMContentLoaded", ()=>{
    const telefone = localStorage.getItem("tel")
    document.getElementById("input5").value = telefone
    const CPF = localStorage.getItem("cpf")
    document.getElementById("input4").value = CPF
    const CEP = localStorage.getItem("cep")
    document.getElementById("input3").value = CEP
    const CNPJ = localStorage.getItem("cnpj")
    document.getElementById("input6").value = CNPJ
    const Codigo = localStorage.getItem("cod")
    document.getElementById("input7").value = Codigo
    const NOME = localStorage.getItem("Nome")
    document.getElementById("input1").value = NOME
    const ENDERECO = localStorage.getItem("Endereco")
    document.getElementById("input2").value = ENDERECO
})