type Gender = "Male" | "Female" | "Fluid" | "Other";

type User = {
  id: number;
  age: number;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  country: string;
  city: string;
  state: string;
  postCode: string;
  street: string;
  streetNumber: string;
};

type UserFilters = {
  age?: {
    min?: number;
    max?: number;
  };
  gender?: Gender;
  textField?: string;
};
