type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  profile_picture: string;
  birth_date: string;
};

type CreateUser = Omit<User, "id">;
