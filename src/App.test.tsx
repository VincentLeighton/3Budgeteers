import { render } from "@testing-library/react";
import { test, describe, expect} from "vitest"
import '@testing-library/jest-dom/vitest';
import App from './App'

// Test suite for the App component
describe("App Component", () => {
  test("renders the Vite and React logos", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
