import {
  // Button,
  // Input,
  // Checkbox,
  // InputFile,
  // InputRadio,
  // Select,
  Link,
} from "@/ui";

function Home() {
  return (
    <div className="p-5">
      <div className="p-4 bg-secondary text-primary">Home</div>
      <div className="p-2 bg-info">Info</div>
      <div className="p-2 bg-success">success</div>
      <div className="p-2 bg-error">error</div>
      <div className="p-2 bg-warning">warning</div>
      <div className="border bg-red-600 rounded-lg p-5 mt-4">
        <h1 className="text-5xl font-bold mb-6">Buttons</h1>
        <h3 className="text-3xl font-medium mb-6 underline">Primary</h3>
        <div className="flex gap-4 flex-wrap">
          <Link href="/about" variant="default">
            See more
          </Link>
          <Link href="/about" variant="permalink">
            See more
          </Link>
          <Link href="/about" variant="permalink-v2">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
