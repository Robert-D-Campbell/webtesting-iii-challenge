// Test away!
import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("successfully renders the display component", () => {
	render(<Display />);
});

test("it should display locked when it is locked", () => {
	const { getByText } = render(<Display locked={true} closed={true} />);
	const lockedStatus = getByText(/locked/i);
	expect(lockedStatus).toBeTruthy();
});

test("it should display closed when it is closed", () => {
	const { getByText } = render(<Display locked={false} closed={true} />);
	const closedStatus = getByText(/closed/i);
	expect(closedStatus).toBeTruthy();
});

test("should display unlocked when it is unlocked", () => {
	const { getByText } = render(<Display locked={false} closed={true} />);
	const lockedStatus = getByText(/unlocked/i);
	expect(lockedStatus).toBeTruthy();
});
it("should display open when open", () => {
	const { getByText } = render(<Display locked={false} closed={false} />);
	const closedStatus = getByText(/open/i);
	expect(closedStatus).toBeTruthy();
});
