---
title: API de tarefas v1.0.0
language_tabs:
  - javascript: JavaScript
  
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api-de-tarefas">API de tarefas v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API tem como objetivo manipular tarefas de um usuário

Base URLs:

* <a href="http://localhost:8081">http://localhost:8081</a>

Email: <a href="mailto:projetomegaufms@gmail.com">Support</a> 

<h1 id="api-de-tarefas-usuario">Usuario</h1>

## post__create_user

> Code samples



```javascript
const inputBody = '{
  "nome": "string",
  "email": "string",
  "senha": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('http://localhost:8081/create/user',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /create/user`

*Cadastro de usuario*

Essa rota cria um usuário

> Body parameter

```json
{
  "nome": "string",
  "email": "string",
  "senha": "string"
}
```

<h3 id="post__create_user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» nome|body|string|false|none|
|» email|body|string|false|none|
|» senha|body|string|false|none|

<h3 id="post__create_user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Usuario criado com sucesso|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Não funcionou a criação|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__valid_user_{code}

> Code samples


```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8081/valid/user/{code}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```




`GET /valid/user/{code}`

*Validação de usuário*

Essa rota valida o e-mail do usuário a partir de um código

<h3 id="get__valid_user_{code}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|code|path|string|true|Código de verificação criptografado no link|

> Example responses

> 200 Response

```json
{
  "Message": "Usuario validado"
}
```

<h3 id="get__valid_user_{code}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Usuário validado com sucesso|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro ao validar o usuário|Inline|

<h3 id="get__valid_user_{code}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Message|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Erro|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post__login

> Code samples


```javascript
const inputBody = '{
  "email": "usuario@email.com",
  "senha": "123456"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8081/login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```




`POST /login`

*Login de usuário*

Essa rota faz o login do usuário e retorna um token JWT e os dados do usuário

> Body parameter

```json
{
  "email": "usuario@email.com",
  "senha": "123456"
}
```

<h3 id="post__login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|true|none|
|» senha|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "Message": "Login deu certo",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "nome": "João",
    "email": "joao@email.com"
  }
}
```

<h3 id="post__login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Login realizado com sucesso|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Credenciais inválidas|Inline|

<h3 id="post__login-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Message|string|false|none|none|
|» token|string|false|none|none|
|» user|object|false|none|none|
|»» id|integer|false|none|none|
|»» nome|string|false|none|none|
|»» email|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Erro|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-de-tarefas-lista-de-tarefas">Lista de Tarefas</h1>

## post__create_list_task

> Code samples



```javascript
const inputBody = '{
  "nome": "string",
  "usuario_id": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8081/create/list/task',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /create/list/task`

*Criar lista de tarefas*

Cria uma nova lista de tarefas para um usuário

> Body parameter

```json
{
  "nome": "string",
  "usuario_id": 0
}
```

<h3 id="post__create_list_task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» nome|body|string|true|none|
|» usuario_id|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "Message": "Lista criada com sucesso"
}
```

<h3 id="post__create_list_task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Lista criada com sucesso|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Nome da lista é obrigatório|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro ao criar lista|None|

<h3 id="post__create_list_task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post__select_list_task

> Code samples



```javascript
const inputBody = '{
  "usuario_id": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8081/select/list/task',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```



`POST /select/list/task`

*Listar listas de tarefas de um usuário*

Retorna todas as listas de tarefas criadas por um usuário

> Body parameter

```json
{
  "usuario_id": 0
}
```

<h3 id="post__select_list_task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» usuario_id|body|integer|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "nome": "string",
    "usuario_id": 0
  }
]
```

<h3 id="post__select_list_task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Listas retornadas com sucesso|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro ao selecionar as listas do usuário|None|

<h3 id="post__select_list_task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer|false|none|none|
|» nome|string|false|none|none|
|» usuario_id|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-de-tarefas-tarefa">Tarefa</h1>

## post__create_task

> Code samples





```javascript
const inputBody = '{
  "titulo": "string",
  "descricao": "string",
  "data_tarefa": "2025-05-19",
  "prioridade": "string",
  "concluida": true,
  "lista_tarefa_id": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8081/create/task',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```



`POST /create/task`

*Criar tarefa*

Cria uma nova tarefa com os dados fornecidos

> Body parameter

```json
{
  "titulo": "string",
  "descricao": "string",
  "data_tarefa": "2025-05-19",
  "prioridade": "string",
  "concluida": true,
  "lista_tarefa_id": 0
}
```

<h3 id="post__create_task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» titulo|body|string|true|none|
|» descricao|body|string|false|none|
|» data_tarefa|body|string(date)|true|none|
|» prioridade|body|string|false|none|
|» concluida|body|boolean|false|none|
|» lista_tarefa_id|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "Message": "A tarefa foi criada"
}
```

<h3 id="post__create_task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Tarefa criada com sucesso|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro ao criar tarefa|None|

<h3 id="post__create_task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## delete__delete_one_task_{id}

> Code samples



```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8081/delete/one/task/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```



`DELETE /delete/one/task/{id}`

*Deletar tarefa*

Deleta uma tarefa pelo ID

<h3 id="delete__delete_one_task_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|ID da tarefa a ser deletada|

> Example responses

> 200 Response

```json
{
  "Message": "A deleção foi feita com sucesso"
}
```

<h3 id="delete__delete_one_task_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Tarefa deletada com sucesso|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro ao deletar tarefa|None|

<h3 id="delete__delete_one_task_{id}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## delete__delete_all_task_{lista_tarefa_id}

> Code samples



```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://localhost:8081/delete/all/task/{lista_tarefa_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```



`DELETE /delete/all/task/{lista_tarefa_id}`

*Deletar todas as tarefas*

Deleta todas as tarefas de uma lista

<h3 id="delete__delete_all_task_{lista_tarefa_id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lista_tarefa_id|path|integer|true|ID da lista de tarefas|

> Example responses

> 200 Response

```json
{
  "Message": "A deleção funcionou."
}
```

<h3 id="delete__delete_all_task_{lista_tarefa_id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Todas as tarefas deletadas com sucesso|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro ao deletar todas as tarefas|None|

<h3 id="delete__delete_all_task_{lista_tarefa_id}-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post__select_all_task

> Code samples





```javascript
const inputBody = '{
  "lista_tarefa_id": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8081/select/all/task',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```



`POST /select/all/task`

*Listar tarefas*

Lista todas as tarefas de uma lista

> Body parameter

```json
{
  "lista_tarefa_id": 0
}
```

<h3 id="post__select_all_task-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» lista_tarefa_id|body|integer|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "titulo": "string",
    "descricao": "string",
    "data_tarefa": "2019-08-24",
    "prioridade": "string",
    "concluida": true
  }
]
```

<h3 id="post__select_all_task-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Lista de tarefas|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro ao listar tarefas|None|

<h3 id="post__select_all_task-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» id|integer|false|none|none|
|» titulo|string|false|none|none|
|» descricao|string|false|none|none|
|» data_tarefa|string(date)|false|none|none|
|» prioridade|string|false|none|none|
|» concluida|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-de-tarefas-recupera-o-de-senha">Recuperação de Senha</h1>

## post__forgot_password

> Code samples





```javascript
const inputBody = '{
  "email": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8081/forgot/password',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```



`POST /forgot/password`

*Enviar código de verificação por e-mail*

Envia um código de 4 dígitos para o e-mail do usuário para recuperação de senha.

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="post__forgot_password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "Message": "string",
  "identy": 0
}
```

<h3 id="post__forgot_password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Código enviado com sucesso|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Código não enviado|None|

<h3 id="post__forgot_password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Message|string|false|none|none|
|» identy|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post__confirm_code_email

> Code samples



```javascript
const inputBody = '{
  "codigo": "string",
  "id": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://localhost:8081/confirm/code/email',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```


`POST /confirm/code/email`

*Confirmar código de verificação*

Valida o código digitado e gera um token temporário para alterar a senha.

> Body parameter

```json
{
  "codigo": "string",
  "id": 0
}
```

<h3 id="post__confirm_code_email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» codigo|body|string|true|none|
|» id|body|integer|true|none|

> Example responses

> 200 Response

```json
{
  "Message": "string",
  "token": "string",
  "id": 0
}
```

<h3 id="post__confirm_code_email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Usuário autenticado com sucesso|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Erro de autenticação|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro interno no servidor|None|

<h3 id="post__confirm_code_email-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» Message|string|false|none|none|
|» token|string|false|none|none|
|» id|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## post__reset_password

> Code samples




```javascript
const inputBody = '{
  "senha_nova": "string",
  "id": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Authorization':'Bearer <token>'
};

fetch('http://localhost:8081/reset/password',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```




`POST /reset/password`

*Redefinir senha do usuário*

Permite redefinir a senha usando um token temporário de verificação

> Body parameter

```json
{
  "senha_nova": "string",
  "id": 0
}
```

<h3 id="post__reset_password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|none|
|body|body|object|true|none|
|» senha_nova|body|string|true|none|
|» id|body|integer|true|none|

<h3 id="post__reset_password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Senha alterada com sucesso|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Token inválido ou ausente|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Erro interno no servidor|None|

<aside class="success">
This operation does not require authentication
</aside>

