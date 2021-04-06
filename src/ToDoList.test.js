import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ToDoList from "./toDoList";

it("renders without crashing", () => {
    render(<ToDoList />);
});

it("matches the snapshot", () => {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
    const { queryByText, getByLabelText } = render(<ToDoList />);
    const taskInput = getByLabelText("Todo Task:");
    const btn = queryByText("Add Task");
    
    expect(queryByText('mow the lawn')).not.toBeInTheDocument();
    expect(queryByText('Todo Task:')).toBeInTheDocument();

    fireEvent.change(taskInput, { target: {value: 'mow the lawn'}});
    fireEvent.click(btn);

    expect(queryByText('mow the lawn')).toBeInTheDocument();
})