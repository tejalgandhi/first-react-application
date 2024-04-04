import { post } from "./post";

export default function feed() {
  console.log("This is feed function");
  post();
  post();
}

export function anotherFunction() {
  console.log("This is another function");
}
