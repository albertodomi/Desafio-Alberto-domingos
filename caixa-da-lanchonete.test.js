class CaixaDaLanchonete {
  cardapio = [
    { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
    { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
    { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
    { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
    { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
    { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
    { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
    { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
  ];

  formasDePagamentoValidas = ['debito', 'credito', 'dinheiro'];

  calcularValorDaCompra(formaDePagamento, itens) {
    if (!this.formasDePagamentoValidas.includes(formaDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    let total = 0;

    for (const itemInfo of itens) {
      const [codigo, quantidade] = itemInfo.split(',');
      const item = this.cardapio.find(item => item.codigo === codigo);

      if (!item) {
        return "Item inválido!";
      }

      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }

      total += item.valor * quantidade;
    }

    if (formaDePagamento === 'dinheiro') {
      total *= 0.95; // Aplica 5% de desconto
    } else if (formaDePagamento === 'credito') {
      total *= 1.03; // Aplica 3% de acréscimo
    }

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}

module.exports = CaixaDaLanchonete;
class CaixaDaLanchonete {
  cardapio = [
    { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
    { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
    { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
    { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
    { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
    { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
    { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
    { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
  ];

  formasDePagamentoValidas = ['debito', 'credito', 'dinheiro'];

  calcularValorDaCompra(formaDePagamento, itens) {
    if (!this.formasDePagamentoValidas.includes(formaDePagamento)) {
      return "Forma de pagamento inválida!";
    }

    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    let total = 0;

    for (const itemInfo of itens) {
      const [codigo, quantidade] = itemInfo.split(',');
      const item = this.cardapio.find(item => item.codigo === codigo);

      if (!item) {
        return "Item inválido!";
      }

      if (quantidade <= 0) {
        return "Quantidade inválida!";
      }

      total += item.valor * quantidade;
    }

    if (formaDePagamento === 'dinheiro') {
      total *= 0.95; // Aplica 5% de desconto
    } else if (formaDePagamento === 'credito') {
      total *= 1.03; // Aplica 3% de acréscimo
    }

    return `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}

module.exports = CaixaDaLanchonete;