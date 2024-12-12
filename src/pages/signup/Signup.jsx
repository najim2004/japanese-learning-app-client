import React from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const Signup = () => {
  const [viewPassword, setViewPassword] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      photo: undefined,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    // Add your signup logic here
  };

  const togglePasswordView = () => {
    setViewPassword(!viewPassword);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formattedName =
        file.name.length > 15
          ? `${file.name.slice(0, 15)}...${file.name.slice(-3)}`
          : file.name;
      setFileName(formattedName);
      form.setValue("photo", file);
    }
  };

  return (
    <div className="bg-white w-screen h-screen absolute top-0 left-0 flex flex-col">
      <div className="flex flex-col items-center justify-center p-4 w-full flex-grow">
        <Card className="w-full max-w-[400px]">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Create Your Account
            </CardTitle>
            <p className="text-sm text-gray-500 font-medium text-center">
              Welcome! Please enter your details
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* First Name Input */}
                <FormField
                  control={form.control}
                  name="firstName"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name Input */}
                <FormField
                  control={form.control}
                  name="lastName"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Input */}
                <FormField
                  control={form.control}
                  name="email"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Input */}
                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={viewPassword ? "text" : "password"}
                            placeholder="Enter password"
                            {...field}
                          />
                          <span
                            onClick={togglePasswordView}
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                          >
                            {viewPassword ? <FaRegEye /> : <FaEyeSlash />}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* File Input */}
                <FormField
                  control={form.control}
                  name="photo"
                  rules={{ required: true }}
                  render={() => (
                    <FormItem>
                      <FormLabel className="w-full p-2 border-2 border-dashed flex justify-center items-center rounded-md">
                        Upload Your Photo
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mt-4 text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="hover:underline font-semibold">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
