export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationSate: Date
  ) {}

  get token(){
      if(!this._tokenExpirationSate || new Date() > this._tokenExpirationSate ){
          return null;
      }
      return this._token;

  }
}
