interface ISubject {
    request(): void;
  }
  
  class RealSubject implements ISubject {
    request(): void {
      console.log('Real subject handling request');
    }
  }
  
  // Handler, который перехватывает вызовы метода 'request'
  const handler = {
    get(target: any, prop: string, receiver: any) {
      if (prop === 'request') {
        console.log('Proxy handling request');
      }
      return target[prop];
    }
  };
  
  // Создание Proxy, оборачиваем realSubject
  const realSubject = new RealSubject();
  const proxy = new Proxy(realSubject, handler);
  
  // Пример использования
  proxy.request(); // Сначала сработает ловушка 'get', затем вызовется реальный метод 'request'
  