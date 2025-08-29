import { makeObservable, action, observable, computed } from "mobx";

export class Store {
  constructor() {
    this.users = [];

    this.filters = null;
    this.userMinMaxAge = { min: 18, max: 50 };

    makeObservable(this, {
      users: observable,
      filters: observable,
      userMinMaxAge: observable,
      filteredUsers: computed,
      setUsers: action,
      updateFilters: action,
    });
  }

  public filters: UserFilters | null;
  public users: User[];
  public userMinMaxAge: { min: number; max: number };

  public get filteredUsers(): User[] {
    if (!this.filters) return this.users;

    const { age, genders, textField } = this.filters;
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
      const matchGender =
        genders && genders?.length > 0 ? genders!.includes(user.gender) : true;
      const matchBySearch = textFieldLowercase
        ? userTextFields.toLowerCase().includes(textFieldLowercase)
        : true;

      return matchAgeMin && matchAgeMax && matchGender && matchBySearch;
    });

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
