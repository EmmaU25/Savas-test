export class User {
   id: number;
   email: string;
   password: string
   tipo: string;

   constructor(user: User){
      this.id = new Date().getTime();
      this.email = user.email;
      this.password = user.password;
      this.tipo = user.tipo;
   }
}
