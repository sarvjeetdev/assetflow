import { useToggle, upperFirst } from "@mantine/hooks"
import { useForm } from "@mantine/form"
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack
} from "@mantine/core"
import { GoogleButton } from "./GoogleButton"
import { TwitterButton } from "./TwitterButton"
import { Container} from '@mantine/core';
import classes from './Auth.module.css';
import React from "react"
import { Navigate } from "react-router-dom";






export function Auth(props) {
  const [goToDash, setGoToDash] = React.useState(false);
  const [goToBack, setGoToBack] = React.useState(false);
  
  const [type, toggle] = useToggle(["login", "register"])
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val.trim()) ? null : "Invalid email"),
      password: val =>
        val.length <= 6 ? "Password should include at least 6 characters" : null
    }
  })
  if (goToDash) {
    return <Navigate to="/dashboard/home"/>;
  }
  if (goToBack) {
    return <Navigate to="/"/>;
  }
  return (
    <div className={classes.Auth}>
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Asset Flow, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl" ><span className={classes.textInv}>Google</span></GoogleButton>
        <TwitterButton radius="xl" ><span className={classes.textInv}>Twitter</span></TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {setGoToDash(true)})}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={event =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={event =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={event =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={event =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
      <Button onClick={()=>{setGoToBack(true)}}>Go Back</Button>
    </Paper>
    </div>
  )
}
