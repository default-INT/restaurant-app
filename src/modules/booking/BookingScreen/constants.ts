export interface IFormFields {
  name: string | null;
  phoneNumber: string | null;
  place: number | null;
  time: Date | null;
  date: Date | null;
}

export const initialValues: IFormFields = {
  name: null,
  phoneNumber: null,
  place: null,
  time: null,
  date: null,
};
