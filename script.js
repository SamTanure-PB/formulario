function salvar_nome()
{
    var nome = document.getElementById("input1").value
    localStorage.setItem("Nome", nome)
}

function salvar_endereco()
{
    var endereco = document.getElementById("input2").value
    localStorage.setItem("Endereco", endereco)
}

function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("input5").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("input5").value=tel
     tel=document.getElementById("input5").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("input5").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("input5").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("input5").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("input5").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
            localStorage.setItem("tel", tel_formatado)
        }

        function mascara_cep()
        { var cep_formatado = document.getElementById("input3").value
            if (cep_formatado[2]!=".")
            {
                if (cep_formatado[2]!=undefined)
                {
                    document.getElementById("input3").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
                }
            }
        
            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("input3").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }
            localStorage.setItem("cep", cep_formatado)

        }     
        
        function mascara_cpf()
        {
            var cpf_formatado = document.getElementById("input4").value
            if(cpf_formatado[3]!=".")
            {
                if(cpf_formatado[3]!=undefined){
                document.getElementById("input4").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
                }
            }

            if(cpf_formatado[7]!=".")
            {
                if(cpf_formatado[7]!=undefined){
                document.getElementById("input4").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7];
                }
            }

            if(cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined){
                document.getElementById("input4").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11];
                }
            }
            localStorage.setItem("cpf", cpf_formatado)
        }

        function mascara_cnpj()
        {
            var cnpj_formatado = document.getElementById("input6").value
            if (cnpj_formatado[2]!=".")
            {
                if (cnpj_formatado[2]!=undefined)
                {
                    document.getElementById("input6").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2];
                }
            }

            if (cnpj_formatado[6]!=".")
            {
                if (cnpj_formatado[6]!=undefined)
                {
                    document.getElementById("input6").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6];
                }
            }

            if (cnpj_formatado[10]!="/")
            {
                if (cnpj_formatado[10]!=undefined)
                {
                    document.getElementById("input6").value=cnpj_formatado.slice(0,10)+"/"+cnpj_formatado[10];
                }
            }

            if (cnpj_formatado[15]!="-")
            {
                if (cnpj_formatado[15]!=undefined)
                {
                    document.getElementById("input6").value=cnpj_formatado.slice(0,15)+"-"+cnpj_formatado[15];
                }
            }
            localStorage.setItem("cnpj", cnpj_formatado)
        }

        function mascara_cod()
        {
            var cod_formatado = document.getElementById("input7").value
            if (cod_formatado[2]!="_")
            {
                if (cod_formatado[2]!=undefined)
                {
                    document.getElementById("input7").value=cod_formatado.slice(0,2)+"_"+cod_formatado[2];
                }
            }

            if (cod_formatado[5]!="/")
            {
                if (cod_formatado[5]!=undefined)
                {
                    document.getElementById("input7").value=cod_formatado.slice(0,5)+"/"+cod_formatado[5];
                }
            } 
            if (cod_formatado[6]!="/")
            {
                if (cod_formatado[6]!=undefined)
                {
                    document.getElementById("input7").value=cod_formatado.slice(0,6)+"/"+cod_formatado[6];
                }
            } 
            if (cod_formatado[10]!="-")
            {
                if (cod_formatado[10]!=undefined)
                {
                    document.getElementById("input7").value=cod_formatado.slice(0,10)+"-"+cod_formatado[10];
                }
            }
            if (cod_formatado[14]!=".")
            {
                if (cod_formatado[14]!=undefined)
                {
                    document.getElementById("input7").value=cod_formatado.slice(0,14)+"."+cod_formatado[14];
                }
            }
            if (cod_formatado[16]!=".")
            {
                if (cod_formatado[16]!=undefined)
                {
                    document.getElementById("input7").value=cod_formatado.slice(0,16)+"."+cod_formatado[16];
                }
            }
            localStorage.setItem("cod", cod_formatado)
        }

        
