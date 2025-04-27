import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";
import { Button } from "./components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./components/ui/form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";

function App() {
  const mySchema = z.object({
    username: z.string().min(1, { message: "名前を入力してください" }).max(20),
  });

  const form = useForm({
    resolver: zodResolver(mySchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (valus: z.infer<typeof mySchema>) => {
    console.log(valus);
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default App;
