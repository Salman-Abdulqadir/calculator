import Header from "./widgets/header";
import Keyboard from "./widgets/keyboard";
import Screen from "./widgets/screen";

const Calculator = () => {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <section className="w-full max-w-[500px] space-y-3">
        <Header />
        <Screen />
        <Keyboard />
      </section>
    </main>
  );
};

export default Calculator;
