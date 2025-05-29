# SOLID Principles Examples

Este repositório contém exemplos práticos dos princípios SOLID em TypeScript. Cada princípio está demonstrado em sua própria pasta com exemplos concretos.

## O que é SOLID?

SOLID é um acrônimo para cinco princípios de design de software que ajudam a criar código mais manutenível, flexível e escalável:

### S - Single Responsibility Principle (Princípio da Responsabilidade Única)
- Cada classe deve ter apenas uma razão para mudar
- Uma classe deve ter apenas uma responsabilidade
- Exemplo em `/SRP`: Demonstra como separar responsabilidades em diferentes classes para melhor manutenção

### O - Open/Closed Principle (Princípio Aberto/Fechado)
- Entidades de software devem estar abertas para extensão, mas fechadas para modificação
- Novas funcionalidades devem ser adicionadas através de extensão, não modificação
- Exemplo em `/OCP`: Mostra como criar uma estrutura que permite adicionar novos tipos de veículos sem modificar o código existente

### L - Liskov Substitution Principle (Princípio da Substituição de Liskov)
- Subtipos devem ser substituíveis por seus tipos base
- Classes derivadas devem poder substituir suas classes base sem quebrar o comportamento do programa
- Exemplo em `/LSP`: Demonstra o princípio através de um sistema de cartões de pagamento, onde diferentes tipos de cartões (crédito, débito, recompensas) podem ser usados de forma intercambiável através de uma interface comum `IPaymentInstrument`

### I - Interface Segregation Principle (Princípio da Segregação de Interface)
- Muitas interfaces específicas são melhores que uma interface geral
- Clientes não devem ser forçados a depender de interfaces que não utilizam
- Exemplo a ser adicionado

### D - Dependency Inversion Principle (Princípio da Inversão de Dependência)
- Módulos de alto nível não devem depender de módulos de baixo nível
- Ambos devem depender de abstrações
- Exemplo a ser adicionado

## Estrutura do Projeto

```
├── SRP/           # Exemplo do Princípio da Responsabilidade Única
├── OCP/           # Exemplo do Princípio Aberto/Fechado
├── LSP/           # Exemplo do Princípio da Substituição de Liskov
├── ISP/           # Exemplo do Princípio da Segregação de Interface (a ser adicionado)
└── DIP/           # Exemplo do Princípio da Inversão de Dependência (a ser adicionado)
```

## Design Patterns

Após a conclusão dos exemplos SOLID, este repositório será expandido para incluir exemplos de Design Patterns, organizados em categorias:

- Padrões Criacionais
- Padrões Estruturais
- Padrões Comportamentais

## Como Executar os Exemplos

Cada pasta contém seu próprio projeto TypeScript. Para executar um exemplo:

1. Navegue até a pasta do exemplo desejado
2. Execute `npm install` para instalar as dependências
3. Execute `npm start` para rodar o exemplo

## Contribuindo

Sinta-se à vontade para contribuir com novos exemplos ou melhorias nos existentes. Cada princípio SOLID deve ser demonstrado de forma clara e prática. 