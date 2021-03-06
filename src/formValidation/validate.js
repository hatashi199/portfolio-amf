import * as Yup from "yup";

const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "La cadena de caracteres debe tener un tamaño entre 3-40")
    .max(40, "La cadena de caracteres debe tener un tamaño entre 3-40")
    .required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Formato de email inválido")
    .required("Este campo es obligatorio"),
  subject: Yup.string()
    .max(100, "No está permitido mas de 100 caracteres")
    .required("Este campo es obligatorio"),
  message: Yup.string()
    .max(3000, "No está permitido mas de 3000 caracteres")
    .required("Este campo es obligatorio"),
});

export default formSchema;
