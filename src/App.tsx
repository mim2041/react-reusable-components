import { useState } from "react"
import MainLayout from "./components/Layout/MainLayout"
import Button from "./components/ui/Button"
import Container from "./components/ui/Container"
import Modal from "./components/ui/Modal";
import NormalForm from "./components/NormalForm/NormalForm";
import { Form, FormSection, FormSubmit, Input } from "./components/ReusableForm";
import { FieldValues, SubmitHandler, useForm, } from "react-hook-form";
import { z } from "zod";


function App() {

  const { handleSubmit, register, formState: { errors } 
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  
  }

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email()
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    <Container>
      <Form onSubmit = {handleSubmit(onSubmit) as SubmitHandler<FieldValues> }>
        <FormSection>
          <Input type="text" 
          register={register("name")} 
          errors={errors} 
          label="Name"/>

          <Input type="email" 
          register={register("email")} 
          errors={errors} 
          label="Email"/>
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  )
}
 
export default App
