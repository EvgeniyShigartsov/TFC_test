import { makeObservable, action, observable, computed } from "mobx";

export class Store {
  constructor() {
    this.users = [];

    this.filters = null;
    this.userMinMaxAge = { min: 18, max: 50 };

    makeObservable(this, {
      users: observable,
      filteredUsers: computed,
      filters: observable,
      userMinMaxAge: observable,
      setUsers: action,
      updateFilters: action,
    });
  }

  public filters: UserFilters | null;
  public users: User[];
  public userMinMaxAge: { min: number; max: number };

  public get filteredUsers(): User[] {
    console.time("filter takes");
    if (!this.filters) return this.users;

    const { age, gender, textField } = this.filters;
    const textFieldLowercase = textField ? textField.toLowerCase() : "";

    const res = this.users.filter((user) => {
      const userTextFields =
        user.firstName +
        user.lastName +
        user.city +
        user.country +
        user.email +
        user.state +
        user.street;

      const matchAgeMin = age?.min ? user.age >= age.min : true;
      const matchAgeMax = age?.max ? user.age <= age.max : true;
      const matchGender = gender ? user.gender === gender : true;
      const matchBySearch = textFieldLowercase
        ? userTextFields.toLowerCase().includes(textFieldLowercase)
        : true;

      return matchAgeMin && matchAgeMax && matchGender && matchBySearch;
    });

    console.timeEnd("filter takes");
    return res;
  }

  public setUsers = (users: User[]) => {
    this.users = users;

    const userAges = users.map(({ age }) => age);

    this.userMinMaxAge = {
      min: Math.min(...userAges),
      max: Math.max(...userAges),
    };
  };

  public updateFilters = (
    field: keyof UserFilters,
    value: UserFilters[keyof UserFilters]
  ) => {
    this.filters = {
      ...this.filters,
      [field]: value,
    };
  };
}
