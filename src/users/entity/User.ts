import { HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _avatar: string,
    private id: string = randomUUID(),
  ) {}

  set name(name: string) {
    if (!name)
      throw new HttpException(
        'Nome é obrigatório',
        // This code is used to create a new user.
        // The user's email address is stored in the variable email.
        // This code is called when the user clicks the "Create User" button.
        // The function createUser() is called when the user clicks the "Create User" button.
        HttpStatus.BAD_REQUEST,
      );
    if (name.length < 3)
      throw new HttpException(
        'Nome precisa ser pelomenos 3 caracteres',
        HttpStatus.BAD_REQUEST,
      );
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set email(email: string) {
    if (!email)
      throw new HttpException(
        'Email é obrigatório',
        HttpStatus.BAD_REQUEST,
      );
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set password(password: string) {
    if (!password)
      throw new HttpException(
        'Senha é obrigatória',
        HttpStatus.BAD_REQUEST,
      );
    this._password = password;
  }

  get password() {
    return this._password;
  }

  set avatar(avatar: string) {
    this._avatar = avatar;
  }

  get avatar() {
    return this._avatar;
  }
}
