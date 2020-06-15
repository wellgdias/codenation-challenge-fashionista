import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "../utils/test-utils";

import Backdrop from "../components/Backdrop";
import Button from "../components/Button";
import Container from "../components/Container";
import Image from "../components/Image";
import Input from "../components/Input";
import Name from "../components/Name";
import Price from "../components/Price";

import App from "../containers/App";
import Catalog from "../containers/Catalog";
import DrawerCart from "../containers/DrawerCart";
import DrawerFilter from "../containers/DrawerFilter";
import ProductCatalog from "../containers/ProductCatalog";
import ProductDetail from "../containers/ProductDetail";
import ProductDrawer from "../containers/ProductDrawer";
import SlideDrawer from "../containers/SlideDrawer";

import Home from "../pages/Home";
import Product from "../pages/Product";

describe("Fashionista E-commerce", () => {
  describe("Components Strucutre and data-test-id attributes", () => {
    it("should render properly the <Backdrop> component", () => {
      const { getByTestId } = render(<Backdrop />);
      const container = getByTestId("backdrop");
      expect(container).toBeDefined();
    });

    it("should render properly the <Button> component", () => {
      const { getByTestId } = render(<Button />);
      const container = getByTestId("button");
      expect(container).toBeDefined();
    });

    it("should render properly the <Container> component", () => {
      const { getByTestId } = render(<Container />);
      const container = getByTestId("container");
      expect(container).toBeDefined();
    });

    it("should render properly the <Image> component", () => {
      const { getByTestId } = render(<Image />);
      const container = getByTestId("image");
      expect(container).toBeDefined();
    });

    it("should render properly the <Input> component", () => {
      const { getByTestId } = render(<Input />);
      const container = getByTestId("input");
      expect(container).toBeDefined();
    });

    it("should render properly the <Name> component", () => {
      const { getByTestId } = render(<Name />);
      const container = getByTestId("name");
      expect(container).toBeDefined();
    });

    it("should render properly the <Price> component", () => {
      const { getByTestId } = render(<Price />);
      const container = getByTestId("price");
      expect(container).toBeDefined();
    });
  });

  describe("Containers Strucutre and data-test-id attributes", () => {
    it("should render properly the <App> component", () => {
      const { getByTestId } = render(<App />);
      const container = getByTestId("app");
      expect(container).toBeDefined();
    });

    it("should render properly the <Catalog> component", () => {
      const { getByTestId } = render(<Catalog />);
      const container = getByTestId("catalog");
      expect(container).toBeDefined();
    });

    it("should render properly the <DrawerCart> component", () => {
      const { getByTestId } = render(<DrawerCart />);
      const container = getByTestId("cart");
      expect(container).toBeDefined();
    });

    it("should render properly the <DrawerFilter> component", () => {
      const { getByTestId } = render(<DrawerFilter />);
      const container = getByTestId("filter");
      expect(container).toBeDefined();
    });

    it("should render properly the <ProductCatalog> component", () => {
      const propsMock = {
        id: 1,
        discount_percentage: "12%",
        image: "",
        name: "Test",
        regular_price: "",
        actual_price: "",
      };

      const { getByTestId } = render(<ProductCatalog product={propsMock} />);
      const container = getByTestId("product");
      expect(container).toBeDefined();
    });

    it("should render properly the <ProductDetail> component", () => {
      const { getByTestId } = render(<ProductDetail />);
      const container = getByTestId("product");
      expect(container).toBeDefined();
    });

    it("should render properly the <ProductDrawer> component with Filter", () => {
      const propsMock = {
        name: "Test",
        image: "",
        actual_price: "",
        installments: "",
      };

      const { getByTestId } = render(
        <ProductDrawer product={propsMock} drawer="filter" />
      );
      const container = getByTestId("product");
      expect(container).toBeDefined();
    });

    it("should render properly the <ProductDrawer> component with Cart", () => {
      const propsMock = {
        id: 1,
        info: { name: "Test", image: "", actual_price: "", installments: "" },
        selectedSize: "",
        total: "",
        amount: 1,
      };

      const { getByTestId } = render(
        <ProductDrawer product={propsMock} drawer="cart" />
      );
      const container = getByTestId("product");
      expect(container).toBeDefined();
    });

    it("should render properly the <SlideDrawer> component", () => {
      const { getByTestId } = render(<SlideDrawer />);
      const container = getByTestId("slide");
      expect(container).toBeDefined();
    });
  });

  describe("Pages Strucutre and data-test-id attributes", () => {
    it("should render properly the <Home> component", () => {
      const { getByTestId } = render(<Home />);
      const container = getByTestId("home");
      expect(container).toBeDefined();
    });

    it("should render properly the <Product> component", () => {
      const { getByTestId } = render(<Product />);
      const container = getByTestId("productPage");
      expect(container).toBeDefined();
    });
  });
});
