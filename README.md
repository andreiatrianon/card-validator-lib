# at-credit-card-validator v.1.0.1

**Esta biblioteca tem a funcionalidade de validar número de Cartão de Crédito por meio do [algaritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm)**
Nesta versão, é possível validar se o número do Cartão de Crédito é verdadeiro ou falso.


## Os métodos utilizados na biblioteca são:

#### **cardValidator(cardNumber)**

Exemplo de uso:

```
$node
> let cardValidator = require("at-credit-card-validator")
> cardValidator(36490102462661); //'true'
> cardValidator(36490102462660); //'false'
```


## versão 1.0.0

- funcionalidades: validação de Cartão de Crédito;
- validar número de Cartão de Crédito por meio do [algaritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install at-credit-card-validator`


## roadmap oficial do projeto

#### versão 3.0.0 (previsão novembro/2018, aceita-se contribuições)
- validação da data de vencimento do Cartão de Crédito por meio de um texto no formato MM/AAAA ou MM/AA;
- obtenção da bandeira a partir do número do Cartão de Crédito.
- README translated to english.

#### versão 2.0.0 (previsão outubro/2018)
- validação do número de verificação (CVV) do Cartão de Crédito de acordo com as principais bandeiras: "visa", "mastercard", "amex", "diners" e "elo".
- validação da data de vencimento do Cartão de Crédito com o mês e ano.

#### versão 1.0.0 (released)
- funcionalidades: validação de Cartão de Crédito;
- validar número de Cartão de Crédito por meio do [algaritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).