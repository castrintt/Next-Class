export default interface IUser {
  uid: string;
  email: string | null;
  name: string | null;
  token: string | null;
  provider: string | undefined;
  imageUrl: string;
}
