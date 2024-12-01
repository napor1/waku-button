import React from "react";
import { render } from "@testing-library/react";
import { test } from "@jest/globals";
import { WakuButton } from "./WakuButton";

test("waku button renders correctly", () => {
  render(<WakuButton />);
});
