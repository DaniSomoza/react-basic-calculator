import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Calculator from "../Calculator";

describe("Calculator component", () => {
  it("shows the value on the screen when you press a number button", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode).toBeInTheDocument();
    expect(inputScreenNode.value).toBe("0");
    const twoNumberButtonNode = getByTestId("2-number-button");
    fireEvent.click(twoNumberButtonNode);
    expect(inputScreenNode.value).toBe("2");
  });

  it("shows the operation on the screen when you press a operation button", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");
    const twoNumberButtonNode = getByTestId("2-number-button");
    fireEvent.click(twoNumberButtonNode);
    const sumButtonNode = getByTestId("+-operation-button");
    fireEvent.click(sumButtonNode);
    expect(inputScreenNode).toBeInTheDocument();
    expect(inputScreenNode.value).toBe("2+");
  });

  it("shows the second operator on the screen", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");
    const twoNumberButtonNode = getByTestId("2-number-button");
    fireEvent.click(twoNumberButtonNode);
    const sumButtonNode = getByTestId("+-operation-button");
    fireEvent.click(sumButtonNode);
    const oneNumberButtonNode = getByTestId("1-number-button");
    fireEvent.click(oneNumberButtonNode);
    expect(inputScreenNode).toBeInTheDocument();
    expect(inputScreenNode.value).toBe("2+1");
  });

  it("shows result on the calculator screen", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");
    const twoNumberButtonNode = getByTestId("2-number-button");
    fireEvent.click(twoNumberButtonNode);
    const sumButtonNode = getByTestId("+-operation-button");
    fireEvent.click(sumButtonNode);
    const oneNumberButtonNode = getByTestId("1-number-button");
    fireEvent.click(oneNumberButtonNode);

    const resultButtonNode = getByTestId("calculate-result-button");
    fireEvent.click(resultButtonNode);

    expect(inputScreenNode).toBeInTheDocument();
    expect(inputScreenNode.value).toBe("3");
  });

  it("clear button should set calculator screen to 0", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");
    const twoNumberButtonNode = getByTestId("2-number-button");
    fireEvent.click(twoNumberButtonNode);
    const clearButtonNode = getByTestId("clear-values-button");
    fireEvent.click(clearButtonNode);

    expect(inputScreenNode.value).toBe("0");
  });

  it("if no operation is selected and clicks on result button the screen value should not change", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");
    const twoNumberButtonNode = getByTestId("2-number-button");
    fireEvent.click(twoNumberButtonNode);

    expect(inputScreenNode.value).toBe("2");

    const resultButtonNode = getByTestId("calculate-result-button");
    fireEvent.click(resultButtonNode);

    expect(inputScreenNode.value).toBe("2");
  });

  it("screen input should show first operator  using keyboard", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");

    fireEvent.change(inputScreenNode, { target: { value: '2' } });

    expect(inputScreenNode.value).toBe("2");
  });

  it("screen input should show operation using keyboard", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");

    fireEvent.change(inputScreenNode, { target: { value: '2+' } });

    expect(inputScreenNode.value).toBe("2+");
  });

  it("screen input should show second operator using keyboard", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");

    fireEvent.change(inputScreenNode, { target: { value: '2+3' } });

    expect(inputScreenNode.value).toBe("2+3");
  }); 

  it("screen input should show result using keyboard", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");

    fireEvent.change(inputScreenNode, { target: { value: '2+3' } });

    fireEvent.keyDown(inputScreenNode, { key: 'Enter', code: 'Enter' })

    expect(inputScreenNode.value).toBe("5");
  }); 


  it("should calculate sum", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");

    fireEvent.change(inputScreenNode, { target: { value: '5+3' } });

    fireEvent.keyDown(inputScreenNode, { key: 'Enter', code: 'Enter' })

    expect(inputScreenNode.value).toBe("8");
  }); 

  it("should calculate sub", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");

    fireEvent.change(inputScreenNode, { target: { value: '5-3' } });

    fireEvent.keyDown(inputScreenNode, { key: 'Enter', code: 'Enter' })

    expect(inputScreenNode.value).toBe("2");
  }); 


  it("should calculate multiply", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");

    fireEvent.change(inputScreenNode, { target: { value: '2*3' } });

    fireEvent.keyDown(inputScreenNode, { key: 'Enter', code: 'Enter' })

    expect(inputScreenNode.value).toBe("6");
  }); 


  it("should calculate division", () => {
    const { getByTestId } = render(<Calculator />);
    const inputScreenNode = getByTestId("screen-input");
    expect(inputScreenNode.value).toBe("0");

    fireEvent.change(inputScreenNode, { target: { value: '6/2' } });

    fireEvent.keyDown(inputScreenNode, { key: 'Enter', code: 'Enter' })

    expect(inputScreenNode.value).toBe("3");
  }); 
});

