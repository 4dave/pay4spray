"use client"

import { useState } from "react"
import FormInput from "./FormInput"

const Form = () => {
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      errorMessage:
        "First name should be 2-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      errorMessage:
        "Last name should be 3-16 characters and shouldn't include any special character!",
      label: "Last name",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "zip",
      type: "text",
      placeholder: "Zip Code",
      errorMessage:
        "zip should be 5 numbers and shouldn't include any special character!",
      label: "Zip Code",
      pattern: "^[0-9]{5}$",
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    setSubmitted(true)
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <>
      {submitted ? (
        <p className="thanks">Thanks! We'll reach out soon ✅</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Let's get paid to spray!</h1>
          <p>
            The spray foam trade is dirty. But it feels so damn good to be part
            of.
          </p>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      )}
    </>
  )
}

export default Form
