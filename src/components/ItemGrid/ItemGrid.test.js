import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import { ItemGrid } from "./index";
import { data as itemData } from "./data"

test("renders correctly with no data or props", () => {
    const tree = create(<ItemGrid data={[]} props={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

test("renders correctly with some data but no props", () => {
    const tree = create(<ItemGrid data={itemData} props={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

test("renders correctly with some data and some props", () => {
    const tree = create(<ItemGrid data={itemData} props={{ width: 250, height: 250 }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });