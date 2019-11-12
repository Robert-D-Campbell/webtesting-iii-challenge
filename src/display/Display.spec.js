// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import "@testing-library/jest-dom/extend-expect";

test("successfully renders the display component", () => {
	render(<Display />);
});

test("it should display locked when it is locked", () => {
	const { getByText } = render(<Display locked={true} closed={true} />);
	const lockedStatus = getByText(/locked/i);
	expect(lockedStatus).toBeTruthy();
});

test("it should display unlocked when it is unlocked", () => {
	const { getByText } = render(<Display locked={false} closed={true} />);
	const lockedStatus = getByText(/unlocked/i);
	expect(lockedStatus).toBeTruthy();
});

test("it should display closed when it is closed", () => {
	const { getByText } = render(<Display locked={false} closed={true} />);
	const closedStatus = getByText(/closed/i);
	expect(closedStatus).toBeTruthy();
});

test("it should display open when open", () => {
	const { getByText } = render(<Display locked={false} closed={false} />);
	const closedStatus = getByText(/open/i);
	expect(closedStatus).toBeTruthy();
});

test("uses red-led class when locked or closed", () => {
	const { getByText } = render(<Display locked={true} closed={true} />);
	expect(getByText(/closed/i)).toHaveClass("red-led");
	expect(getByText(/locked/i)).toHaveClass("red-led");
});

test("uses green-led class when unlocked or open", () => {
	const { getByText } = render(<Display locked={false} closed={false} />);
	expect(getByText(/open/i)).toHaveClass("green-led");
	expect(getByText(/unlocked/i)).toHaveClass("green-led");
});
