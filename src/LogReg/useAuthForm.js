import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// 1. Zod Schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const registerSchema = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// accepts 'type' to know which schema to use
const useAuthForm = (type) => {
  const navigate = useNavigate();
  // Select schema based on the passed type
  const currentSchema = type === "signin" ? loginSchema : registerSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(currentSchema),
  });

  // Handle Form Submission
  const onSubmit = (data) => {
    console.log(`${type} Data:`, data);

    if (type === "signin") {
      toast.success("Welcome back! Logged in successfully.");
      
      setTimeout(() => {
        navigate("/"); // go to home page
      }, 1500); //delay for 1.5 seconds
    } else {

      toast.success("Account created successfully! Please log in.");
      setTimeout(() => {
        navigate("/signin"); // go to login page
      }, 1500); //delay for 1.5 seconds
    }

    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useAuthForm;
