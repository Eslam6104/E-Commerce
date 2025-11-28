import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

//  Zod Schemas
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
  const { login } = useAuth(); // AuthContext function
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

    const storedUsers = JSON.parse(localStorage.getItem("users_db")) || [];

    if (type === "signup") {
      // check if the account exists
      const userExists = storedUsers.find((user) => user.email === data.email);
      if (userExists) {
        toast.error("Email already registered!");
        return;
      }

      // new user
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password, 
      };

      storedUsers.push(newUser);
      localStorage.setItem("users_db", JSON.stringify(storedUsers)); 

      toast.success("Account created successfully! Please Log in.");

      setTimeout(() => {
        navigate("/signin"); // go to login page
      }, 1000); //delay for 1 second
    } else {


      const validUser = storedUsers.find(
        //search for user with email and password
        (user) => user.email === data.email && user.password === data.password
      );

      if (validUser) {
        login({ name: validUser.name, email: validUser.email });

        toast.success(`Welcome back, ${validUser.name}!`);
        setTimeout(() => {
          navigate("/"); // go to home page
        }, 1000); //delay for 1 second
      } else {
        //if the data is wrong
        toast.error("Invalid email or password!");
      }
    }

    reset();
  };

  return { register, handleSubmit, errors, onSubmit };
};

export default useAuthForm;