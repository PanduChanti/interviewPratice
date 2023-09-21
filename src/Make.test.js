import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Make from "./Make"

test("my 1st tesing component", () => {
  render(<Make />)
  const linkElement = screen.getByTestId("hello")
  expect(linkElement).toBeInTheDocument()
})

test("my 2st tesing component", () => {
  render(<Make />)
  const linkElement = screen.getByTestId("hello")
  expect(linkElement).toHaveTextContent("Hello world")
})
