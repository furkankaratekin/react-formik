import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("Lütfen geçerli bir email girin").required("Zorunlu Alan"),
  password: yup.string().min(5,"Parolanız en az 5 karakterli olmalı").required("Zorunlu Alan"),
  passwordConfirm: yup.string().oneOf([yup.ref('password')],'Parolanız üstteki parola ile aynı olmalıdır.').required('Zorunlu Alan'),

});

export default  validations;