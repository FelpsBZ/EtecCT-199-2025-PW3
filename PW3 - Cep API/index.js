function buscarCEP() {
      const cep = document.getElementById('cep').value.replace(/\D/g, '');
      const resultado = document.getElementById('resultado');

      if (!cep.match(/^[0-9]{8}$/)) {
        resultado.innerHTML = "<strong>CEP inválido.</strong> Digite um CEP com 8 dígitos.";
        return;
      }

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            resultado.innerHTML = "<strong>CEP não encontrado.</strong>";
          } else {
            resultado.innerHTML = `
              <strong>Endereço:</strong><br>
              <br>
              <b>Logradouro:</b> ${data.logradouro}<br>
              <b>Bairro:</b> ${data.bairro}<br>
              <b>Cidade:</b> ${data.localidade} - ${data.uf}<br>
              <b>CEP:</b> ${data.cep}
            `;
          }
        })
        .catch(() => {
          resultado.innerHTML = "<strong>Erro ao buscar o CEP.</strong>";
        });
    }