import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  // banco de dados interno
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      // nome do model acima no plural
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date("2021-02-14 11:00:00"),
        },
      ],
    });
  },

  // routes -> rotas da api fictícia
  routes() {
    // endereçamento inserido no useEffect
    this.namespace = "api";

    // quando houver request get na rota "./api/transactions" -> retornar objeto
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    // request -> dados enviados para "/transactions"
    this.post("/transactions", (schema, request) => {
      // formato de texto -> objeto de js
      const data = JSON.parse(request.requestBody);

      // schema = banco de dados
      // 1 - transaction = qual model está inserindo
      // 2 - data = dados que serão transferidos para o model
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
