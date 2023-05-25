export interface IUserEntity {
  id: number
  name: string
  email: string
  password: string
  confirm_password: string
  profile_picture: string
}

export interface ISmallUserEntity extends Omit<IUserEntity, 'password' | 'confirm_password'> {
}

export interface ICreateUserEntity extends Omit<IUserEntity, 'id'> {
};
