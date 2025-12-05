import { Svg1 } from "@/app/svg/svg1";
import { Button } from "./ui/button";
type Text = {
  text: string;
};
export function Quick(props: Text) {
  const { text } = props;
  return (
    <div className=" gap-4">
      <div className="flex gap-[8px] w-">
        <Svg1 />
        <h1 className="text-[#000000] font-semibold text-[24px]">Quick test</h1>
        <Button className="ml-[342px]" variant={"secondary"}>
          X
        </Button>
      </div>
      <div className="">
        <p className="text-[#71717A] font-normal text-[16px]">
          Take a quick test about your knowledge from your content
        </p>
        <div className="border-[1px] rounded-md mt-[20px] p-[28px] w-[558px]">
          <div className="flex">
            <h2>What was Genghis Khan’s birth name?</h2>
            <p className="ml-[180px]">
              <span className="text-[#000000]">{text}</span> / 5
            </p>
          </div>
          <div className="flex-wrap mt-[20px]">
            <Button
              variant={"secondary"}
              className="bg-white border-[1px] rounded-md p-[8px] w-[243px]"
            >
              Yesugei
            </Button>
            <Button
              variant={"secondary"}
              className="bg-white border-[1px] rounded-md p-[8px] w-[243px]"
            >
              Yesugei
            </Button>
            <Button
              variant={"secondary"}
              className="bg-white border-[1px] rounded-md p-[8px] w-[243px] "
            >
              Jamukha
            </Button>
            <Button
              variant={"secondary"}
              className="bg-white border-[1px] rounded-md p-[8px] w-[243px]"
            >
              Toghrul
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
