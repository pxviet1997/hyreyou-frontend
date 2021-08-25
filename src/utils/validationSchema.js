import * as Yup from 'yup';

export const businessProfileFormSchema = Yup.object().shape({
  businessName: Yup.string().max(255).required('Required'),
  businessABN: Yup.string().max(255).required('Required'),
  contactNumber: Yup.number().required('Required'),
  email: Yup.string().email().required('Required'),
  country: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  streetName: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  business_description: Yup.string().max(255).required('Required'),
  culturalInformation: Yup.string().max(255).required('Required'),
  type: Yup.string().max(255).required('Required')
});

export const talentProfileFormSchema = Yup.object().shape({});
