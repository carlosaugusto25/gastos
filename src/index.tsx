import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Model, createServer,  } from 'miragejs';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Serviço de TI',
          category: 'freela',
          amount: 6000,
          createdAt: new Date(),
          type: 'deposit'
        },
        {
          id:2,
          title: 'Aluguel',
          category: 'despesa',
          amount: 400,
          createdAt: new Date(),
          type: 'withdraw'
        }
      ]
    })
  },

  routes() {
      this.namespace = 'api';

      this.get('/transactions', ()=>{
        return this.schema.all('transaction')})

      this.post('/transactions', (schema, request)=>{
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
      })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

