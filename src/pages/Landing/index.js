import Main from "../../components/layouts/Main";
import TestComponent from "../../components/TestComponent";

export default function Landing() {
  return (
    <Main>
      <h1>Landing Page Content and All the Shenanigans</h1>
      <hr />
      <TestComponent initialValue={500} />
      <hr />
    </Main>
  );
}
