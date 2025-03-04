class House {
    private walls: string = '';
    private roof: string = '';
    private windows: number = 0;
  
    setWalls(walls: string): void {
      this.walls = walls;
    }
  
    setRoof(roof: string): void {
      this.roof = roof;
    }
  
    setWindows(windows: number): void {
      this.windows = windows;
    }
  
    getHouse(): string {
      return `House with ${this.walls} walls, ${this.roof} roof and ${this.windows} windows.`;
    }
  }
  
  class HouseBuilder {
    private house: House = new House();
  
    buildWalls(walls: string): this {
      this.house.setWalls(walls);
      return this;
    }
  
    buildRoof(roof: string): this {
      this.house.setRoof(roof);
      return this;
    }
  
    buildWindows(windows: number): this {
      this.house.setWindows(windows);
      return this;
    }
  
    build(): House {
      return this.house;
    }
  }
  
  // Пример использования
  const builder = new HouseBuilder();
  const house = builder.buildWalls('brick').buildRoof('slanted').buildWindows(5).build();
  console.log(house.getHouse());
  