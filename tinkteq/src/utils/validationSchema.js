import * as Yup from 'yup';

export const shipmentDetailsSchema = Yup.object().shape({
  cargoType: Yup.string().required('Cargo type is required'),
  weight: Yup.number().required('Weight is required').positive('Weight must be positive'),
  dimensions: Yup.object().shape({
    length: Yup.number().required('Length is required').positive('Length must be positive'),
    width: Yup.number().required('Width is required').positive('Width must be positive'),
    height: Yup.number().required('Height is required').positive('Height must be positive'),
  }),
  specialHandling: Yup.array().of(Yup.string()),
});

export const locationDetailsSchema = Yup.object().shape({
  pickupAddress: Yup.object().shape({
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip code is required'),
  }),
  deliveryAddress: Yup.object().shape({
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip code is required'),
  }),
});

export const pricingSchema = Yup.object().shape({
  pickupDate: Yup.date().required('Pickup date is required'),
  deliveryDate: Yup.date().required('Delivery date is required'),
});

export const contactSchema = Yup.object().shape({
  contactInformation: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
  }),
});