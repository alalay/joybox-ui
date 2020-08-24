import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button, { ButtonProps, btnPadding } from "../index";
import { color, typography } from "../../shared/styles";
const defaultProps = {
  onClick: jest.fn(),
  className: "testprops"
};
const testProps: ButtonProps = {
  appearance: "primary",
  size: "small",
  className: "testprops",
};
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
};

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(
      <Button {...defaultProps} data-testid="button">
        hello
      </Button>
    );
    const ele = wrapper.getByTestId("button");
    expect(ele).toBeInTheDocument();
    //正确渲染文本
    const text = wrapper.getByText("hello");
    expect(text).toBeTruthy();
    //button标签
    expect(ele.tagName).toEqual("BUTTON");
    expect(ele).not.toHaveAttribute("isdisabled");
    expect(ele).not.toHaveAttribute("isLinked");
    //正常添加classname
    expect(
      ele
        .getAttribute("class")
        ?.split(" ")
        .includes("testprops")
    ).toEqual(true);
    //正常click
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled();
    //span正常显示
    expect(ele.getElementsByTagName("span")).toBeTruthy();
    //正常默认属性
    expect(ele).toHaveStyle(`background:${color.tertiary}`);
    expect(ele).toHaveStyle(`color: ${color.darkest}`);
    //正常大小
    expect(ele).toHaveStyle(`padding: 13px 20px`);
    expect(ele).toHaveStyle(`font-size:${typography.size.s2}px`);
  });
  it("should render correct appearance ", () => {
    let wrapper = render(<Button {...testProps} data-testid="button">hello</Button>);
    let ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`background:${color.primary}`);
    expect(ele).toHaveStyle(`color: ${color.lightest}`);
    cleanup();
    wrapper = render(<Button appearance="inverseOutline" data-testid="button">hello</Button>);
    ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`box-shadow: ${color.lightest} 0 0 0 1px inset`);
    expect(ele).toHaveStyle(`color: ${color.lightest}`);
    cleanup();
    wrapper = render(<Button appearance="inversePrimary" data-testid="button">hello</Button>);
    ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`background:${color.lightest}`);
    expect(ele).toHaveStyle(`color: ${color.primary}`);
    cleanup();
    wrapper = render(<Button appearance="inverseSecondary" data-testid="button">hello</Button>);
    ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`background:${color.lightest}`);
    expect(ele).toHaveStyle(`color: ${color.secondary}`);
    cleanup();
    wrapper = render(<Button appearance="outline" data-testid="button">hello</Button>);
    ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`background:transparent`);
    expect(ele).toHaveStyle(`color: ${color.dark}`);
    cleanup();
    wrapper = render(<Button appearance="primaryOutline" data-testid="button">hello</Button>);
    ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`box-shadow: ${color.primary} 0 0 0 1px inset`);
    expect(ele).toHaveStyle(`color: ${color.primary}`);
    cleanup();
    wrapper = render(<Button appearance="secondary" data-testid="button">hello</Button>);
    ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`background:${color.secondary}`);
    expect(ele).toHaveStyle(`color: ${color.lightest}`);
    cleanup();
    wrapper = render(<Button appearance="secondaryOutline" data-testid="button">hello</Button>);
    ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`box-shadow: ${color.secondary} 0 0 0 1px inset`);
    expect(ele).toHaveStyle(`color: ${color.secondary}`);
  });
  it("should render correct size ", () => {
    let wrapper = render(<Button {...testProps} data-testid="button">hello</Button>);
    const ele = wrapper.getByTestId("button");
    expect(ele).toHaveStyle(`padding: 8px 16px}`);
    expect(ele).toHaveStyle(`font-size:${typography.size.s1}px`);
  });
  it("should render a link", () => {
    const wrapper = render(
      <Button isLink href="/" data-testid="button">
        linkbutton
      </Button>
    );
    const ele = wrapper.getByTestId("button");
    expect(ele).toBeInTheDocument();
    expect(ele.tagName).toEqual("A");
    expect(ele).toHaveAttribute("href", "/");
  });
  it("should render disabled ", () => {
    const wrapper = render(<Button {...disabledProps} data-testid="button">hello</Button>);
    const ele = wrapper.getByTestId("button");
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveStyle("cursor: not-allowed");
    fireEvent.click(ele);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
  it("should render loading ", () => {
    const wrapper = render(<Button isLoading data-testid="button">hello</Button>);
    const ele = wrapper.getByTestId("button");
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveStyle("cursor: progress");
    const text = wrapper.getByText("hello");
    expect(text).toHaveStyle("opacity: 0");
    const wrapper2 = render(
      <Button isLoading loadingText="yehuozhili">
        hello
      </Button>
    );
    const text2 = wrapper2.getByText("yehuozhili");
    expect(text2).toBeTruthy();
  });
  it("should isUnclickable ", () => {
    const wrapper = render(
      <Button isUnclickable data-testid="button">
        hello
      </Button>
    );
    const ele = wrapper.getByTestId("button");
    expect(ele).toBeInTheDocument();
    expect(ele).toHaveStyle("pointer-events: none");
    fireEvent.click(ele);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
