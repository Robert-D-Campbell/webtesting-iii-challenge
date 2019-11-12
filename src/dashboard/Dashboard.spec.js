// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";

test("it successfully renders the dashboard component", () => {
	render(<Dashboard />);
});

const mock = jest.fn();

test("it should call toggleLocked as props to unlock the gate", () => {
	const { getByText } = render(
		<Controls
			locked={true}
			closed={true}
			toggleLocked={mock}
			toggleClosed={mock}
		/>
	);
	fireEvent.click(getByText(/unlock/i));
	expect(mock).toHaveBeenCalledTimes(1);
	mock.mockClear();
});

test("it should call toggleClosed as props to open the gate when closed and unlocked", () => {
	const { getByText } = render(
		<Controls
			locked={false}
			closed={true}
			toggleLocked={mock}
			toggleClosed={mock}
		/>
	);
	fireEvent.click(getByText(/open/i));
	expect(mock).toHaveBeenCalledTimes(1);
	mock.mockClear();
});

test("it should call toggleLocked as props to lock the gate when closed and unlocked", () => {
	const { getByText } = render(
		<Controls
			locked={false}
			closed={true}
			toggleLocked={mock}
			toggleClosed={mock}
		/>
	);
	fireEvent.click(getByText(/lock/i));
	expect(mock).toHaveBeenCalledTimes(1);
	mock.mockClear();
});

test("it should call toggleClosed as props to close the gate when open and unlocked", () => {
	const { getByText } = render(
		<Controls
			locked={false}
			closed={false}
			toggleLocked={mock}
			toggleClosed={mock}
		/>
	);
	fireEvent.click(getByText(/close/i));
	expect(mock).toHaveBeenCalledTimes(1);
	mock.mockClear();
});
