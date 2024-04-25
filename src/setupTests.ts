// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { config } from "./config";

export const setupTestEnvVars = (): void => {
  config.backendUrl = "backend";
  config.debugMode = true;
  config.githubApiUrl = "github";
};
