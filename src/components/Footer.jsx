import Image from "next/image";

export default function Footer() {
  return (
    <footer className="font-unna py-3">
      <div className="text-center py-4  flex flex-col">
        <p>
          Site made possible by&nbsp;
          <a className="underline" href="https://github.com/Brendan-Leal">
            Brendan Leal
          </a>
          &nbsp; &nbsp;
        </p>
        <p>&copy; copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
