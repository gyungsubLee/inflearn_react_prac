import { selector } from "recoil";
import testState from "./atom";

const testWithComma = selector({
  key: "testWithComma",
  get: ({ get }) => {
    const adcArr = get(testState);

    return adcArr.join(",");
  },
});

export default testWithComma;
