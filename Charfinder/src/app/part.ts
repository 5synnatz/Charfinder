export class part {
  id: string;
  header: string;
  component: any;

  constructor(id: string, header: string, component: any) {
    this.id = id;
    this.header = header;
    this.component = component;
  }
}
