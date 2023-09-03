# Sistema de Feedback

Bem-vindo ao Sistema de Feedback, uma aplicação simples para coletar avaliações e opiniões dos usuários. Este projeto utiliza MongoDB e Node.js com o auxílio do Mongoose para armazenar os feedbacks dos usuários.

## Como Funciona

A aplicação permite que os usuários enviem feedbacks sobre produtos ou serviços. Para enviar um feedback, os usuários precisam fornecer:

1. **Rating:** Uma classificação, que no frontend é exibida como estrelas.
2. **Descrição:** Uma breve descrição do feedback.

## Como Utilizar

Para começar a coletar feedbacks, siga os passos abaixo:

1. Clone este repositório:

   ```
   git clone https://github.com/MarceloBxD/feedbackapi.git
   ```

2. Navegue até a pasta do projeto:

   ```
   cd feedbackapi
   ```

3. Instale as dependências necessárias:

   ```
   yarn 
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

   ```
   MONGODB_URI=https://feedbackapi-three.vercel.app/send-feedback
   PORT=3000
   ```

5. Inicie o servidor:

   ```
   yarn dev
   ```

6. Acesse a aplicação em seu navegador em `http://localhost:3000`.

## Rotas

### Enviar Feedback

- **Rota:** `/send-feedback`
- **Método:** POST
- **Descrição:** Envia um novo feedback para ser armazenado no banco de dados.
- **Parâmetros de Requisição:**
  - `rating`: Classificação do feedback (número).
  - `descricao`: Descrição do feedback (string).

## Deploy na Vercel

Este projeto pode ser facilmente implantado na plataforma Vercel para que você possa coletar feedbacks de forma online. Basta configurar o arquivo `vercel.json` com as informações necessárias para hospedar o banco de dados MongoDB na Vercel. Certifique-se de atualizar as variáveis de ambiente para refletir suas configurações na Vercel.

Agora você está pronto para começar a coletar feedbacks e melhorar sua agência com base nas opiniões dos usuários. Divirta-se! 😊
