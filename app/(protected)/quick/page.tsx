import { Quick } from "@/components/Quick";
// type Quick = {
//   text: string;
//   id: number;
// };
export default function Home() {
  return (
    <div className="flex flex-wrap gap-3">
      <Quick text={"1"}></Quick>
      <Quick text={"2"} />
      <Quick text={"3"} />
      <Quick text={"4"} />
      <Quick text={"5"} />
    </div>
  );
}
