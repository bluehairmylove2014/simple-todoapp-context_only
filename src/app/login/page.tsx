import LoginForm from "../../components/molecules/LoginForm";

export default function Auth() {
  return (
    <main className="w-screen h-screen bg-[url('/assets/dark-bg.png')] bg-cover bg-no-repeat grid place-items-center">
      <div className="container mx-auto max-w-xl">
        <div className="w-full h-fit bg-white overflow-hidden rounded">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
