import { Card } from "@/components/shared/cards/Card";

export default function Home() {
  return (
    <div className="w-full flex max-[sm]:block flex-wrap md:gap-2 pt-10 justify-between px-2">
      <div className="px-10 w-96 max-sm[sm]:w-full">
        <Card>
          <div className="py-5">
            <div className="flex justify-center items-baseline">
              <input
                type="number"
                className="dseg text-7xl bg-black/10 dark:bg-white/10 rounded w-4/5 p-2 text-center"
                max={100}
                maxLength={3}
              />
              <p>kg</p>
            </div>
            <p className="text-center text-black/50 dark:text-white/50">
              今日 18:56
            </p>
          </div>
        </Card>
      </div>
      <div>
        <p>a</p>
      </div>
    </div>
  );
}
