import { makeObservable, action, observable } from "mobx";

export class Store {
  constructor() {
    this.users = [];

    makeObservable(this, {
      users: observable,
      setUsers: action,
    });
  }

  public users: User[];

  public setUsers = (users: User[]) => {
    this.users = users;
  };
}
