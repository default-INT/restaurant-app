import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(180, 'booking_screen:errors.name.max')
    .required('common:errors.required'),
  phoneNumber: Yup.string()
    .max(30, 'booking_screen:errors.phone_number.max')
    .required('common:errors.required'),
  place: Yup.number()
    .typeError('booking_screen:errors.place.type_error')
    .required('common:errors.required'),
  time: Yup.date().required('common:errors.required'),
  date: Yup.date().required('common:errors.required'),
});
