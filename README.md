# SOLID Principles Examples

Uma coleção de exemplos práticos dos princípios SOLID em TypeScript, demonstrando como aplicar cada princípio em situações reais de desenvolvimento.

Este repositório contém exemplos práticos dos princípios SOLID em TypeScript. Cada princípio está demonstrado em sua própria pasta com exemplos concretos.

## O que é SOLID?

SOLID é um acrônimo para cinco princípios de design de software que ajudam a criar código mais manutenível, flexível e escalável. Estes princípios foram introduzidos por Robert C. Martin (também conhecido como Uncle Bob) e são considerados fundamentais para o desenvolvimento de software de qualidade.

### S - Single Responsibility Principle (Princípio da Responsabilidade Única)

O Princípio da Responsabilidade Única estabelece que uma classe deve ter apenas uma razão para mudar. Em outras palavras, uma classe deve ter apenas uma responsabilidade ou função específica dentro do sistema.

**Por que é importante?**
- Facilita a manutenção do código
- Reduz o acoplamento entre diferentes partes do sistema
- Torna o código mais testável
- Melhora a legibilidade e compreensão do código
- Permite que diferentes desenvolvedores trabalhem em diferentes responsabilidades sem conflitos

**Como identificar violações:**
- Classes com muitos métodos não relacionados
- Classes que precisam ser modificadas por razões diferentes
- Classes que têm conhecimento sobre muitos aspectos do sistema

**Exemplo em `/SRP`:** Demonstra como separar responsabilidades em diferentes classes para melhor manutenção, evitando que uma única classe tenha múltiplas responsabilidades.

### O - Open/Closed Principle (Princípio Aberto/Fechado)

O Princípio Aberto/Fechado estabelece que entidades de software (classes, módulos, funções) devem estar abertas para extensão, mas fechadas para modificação. Isso significa que devemos ser capazes de adicionar novos comportamentos sem alterar o código existente.

**Por que é importante?**
- Reduz o risco de quebrar código existente
- Facilita a adição de novas funcionalidades
- Promove a reutilização de código
- Melhora a manutenibilidade do sistema
- Permite que o sistema evolua de forma segura

**Como aplicar:**
- Usar abstrações (interfaces e classes abstratas)
- Implementar novos comportamentos através de herança ou composição
- Evitar modificar código existente que já está funcionando
- Utilizar padrões de design que suportem extensibilidade

**Exemplo em `/OCP`:** Mostra como criar uma estrutura que permite adicionar novos tipos de veículos sem modificar o código existente, utilizando abstrações e extensões.

### L - Liskov Substitution Principle (Princípio da Substituição de Liskov)

O Princípio da Substituição de Liskov estabelece que objetos de uma superclasse devem poder ser substituídos por objetos de uma subclasse sem afetar a corretude do programa. Em outras palavras, as subclasses devem ser capazes de substituir suas classes base sem quebrar o comportamento do programa.

**Por que é importante?**
- Garante que a herança seja usada corretamente
- Mantém a consistência do comportamento do sistema
- Facilita a extensão do código
- Promove o polimorfismo de forma segura
- Evita bugs sutis relacionados à herança

**Como aplicar:**
- Garantir que subclasses respeitem o contrato da superclasse
- Evitar sobrescrever métodos de forma que viole o comportamento esperado
- Manter a invariância dos tipos
- Usar interfaces para definir contratos claros

**Exemplo em `/LSP`:** Demonstra o princípio através de um sistema de cartões de pagamento, onde diferentes tipos de cartões (crédito, débito, recompensas) podem ser usados de forma intercambiável através de uma interface comum `IPaymentInstrument`.

### I - Interface Segregation Principle (Princípio da Segregação de Interface)

O Princípio da Segregação de Interface estabelece que os clientes não devem ser forçados a depender de interfaces que não utilizam. Em vez de ter uma interface grande, é melhor ter várias interfaces menores e específicas.

**Por que é importante?**
- Evita que classes implementem métodos que não precisam
- Reduz o acoplamento entre componentes
- Torna o código mais coeso
- Facilita a manutenção e evolução do sistema
- Melhora a legibilidade do código

**Como aplicar:**
- Dividir interfaces grandes em interfaces menores e específicas
- Criar interfaces que representem comportamentos específicos
- Evitar interfaces "gordas" com muitos métodos
- Garantir que as interfaces sejam coesas e focadas

**Exemplo em `/ISP`:** Ilustra o princípio através de um sistema de veículos, onde interfaces específicas (`IVehicleCar` e `IVehicleMotorcycle`) são usadas ao invés de uma interface genérica, permitindo que cada tipo de veículo implemente apenas os métodos que realmente necessita.

### D - Dependency Inversion Principle (Princípio da Inversão de Dependência)

O Princípio da Inversão de Dependência estabelece que módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

**Por que é importante?**
- Reduz o acoplamento entre módulos
- Facilita a testabilidade do código
- Permite a troca de implementações sem afetar o código cliente
- Promove a flexibilidade do sistema
- Melhora a manutenibilidade

**Como aplicar:**
- Usar injeção de dependência
- Depender de abstrações (interfaces) em vez de implementações concretas
- Inverter o fluxo de dependência através de interfaces
- Utilizar containers de DI (Dependency Injection)
- Implementar o padrão Factory quando necessário

**Exemplo em `/DIP`:** Demonstra o princípio através de um sistema de pagamento que utiliza uma factory para criar diferentes tipos de produtos de banco de dados (MySQL e MongoDB), onde as dependências são injetadas através de interfaces, permitindo a troca fácil de implementações.

## Estrutura do Projeto

```
├── SRP/           # Exemplo do Princípio da Responsabilidade Única
├── OCP/           # Exemplo do Princípio Aberto/Fechado
├── LSP/           # Exemplo do Princípio da Substituição de Liskov
├── ISP/           # Exemplo do Princípio da Segregação de Interface
└── DIP/           # Exemplo do Princípio da Inversão de Dependência
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