interface IColleague {
    sendMessage(message: string): void;
    receiveMessage(message: string): void;
  }
  
  class ConcreteColleague1 implements IColleague {
    private mediator: Mediator;
  
    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }
  
    sendMessage(message: string): void {
      console.log('Colleague 1 sends: ' + message);
      this.mediator.relayMessage(message, this);
    }
  
    receiveMessage(message: string): void {
      console.log('Colleague 1 receives: ' + message);
    }
  }
  
  class ConcreteColleague2 implements IColleague {
    private mediator: Mediator;
  
    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }
  
    sendMessage(message: string): void {
      console.log('Colleague 2 sends: ' + message);
      this.mediator.relayMessage(message, this);
    }
  
    receiveMessage(message: string): void {
      console.log('Colleague 2 receives: ' + message);
    }
  }
  
  class Mediator {
    private colleague1: ConcreteColleague1;
    private colleague2: ConcreteColleague2;
  
    constructor() {
      this.colleague1 = new ConcreteColleague1(this);
      this.colleague2 = new ConcreteColleague2(this);
    }
  
    // Метод для отправки сообщения от Colleague1
    sendFromColleague1(message: string): void {
      this.colleague1.sendMessage(message);
    }
  
    // Метод для отправки сообщения от Colleague2
    sendFromColleague2(message: string): void {
      this.colleague2.sendMessage(message);
    }
  
    relayMessage(message: string, colleague: IColleague): void {
      if (colleague === this.colleague1) {
        this.colleague2.receiveMessage(message);
      } else {
        this.colleague1.receiveMessage(message);
      }
    }
  }
  
  // Пример использования
  const mediator = new Mediator();
  mediator.sendFromColleague1('Hello from Colleague 1!');
  mediator.sendFromColleague2('Hello from Colleague 2!');
  
  