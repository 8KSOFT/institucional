export interface IContactFormState {
  name: string;
  email: string;
  message: string;
  status: 'idle' | 'sending' | 'success' | 'error';
}
