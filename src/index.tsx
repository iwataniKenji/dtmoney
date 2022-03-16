import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  // routes -> rotas da api fictícia
  routes() {
    // endereçamento inserido no useEffect
    this.namespace = "api";

    // quando houver request get na rota "./api/transactions" -> retornar objeto
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
