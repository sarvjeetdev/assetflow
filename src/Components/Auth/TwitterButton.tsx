import { Button } from "@mantine/core"
import { TwitterIcon } from "@mantine/ds"

export function TwitterButton(props) {
  return (
    <Button
      leftSection={
        <TwitterIcon
          style={{ width: "1rem", height: "1rem" }}
          color="#00ACEE"
        />
      }
      variant="default"
      {...props}
    />
  )
}
