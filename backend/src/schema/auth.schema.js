import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({ message: "correo invalido" }),
  username: z.string({
    required_error: "Es requerido el usuario",
  }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      required_error: "La contraseña como minimo debe tener 6 caracteres",
    }),
});

export const loginSchema = z.object({
  
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      required_error: "La contraseña como minimo debe tener 6 caracteres",
    }),
});
