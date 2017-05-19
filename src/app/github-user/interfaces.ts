export interface IUserPostSample {
  name: string;
  lastname: string;
  address: {
    line1: string;
    line2: string;
    additional?: string;
  };
};

export class User {
  name: string;
  lastname: string;
};

export class Address {
  line1: string;
  line2: string;
  additional: string;
};
