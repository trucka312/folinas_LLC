import { useRouter } from "next/navigation";

const CopyRight = () => {
  const date = new Date();
  const year = date.getFullYear();
  const router = useRouter();
  return (
    <div className="border-t-[.5px] my-3 pt-3 mx-auto md:px-0 px-4 flex justify-between">
      <p className="text-center">
        © Copyright {year} Folinas LLC. All Rights Reserved.
      </p>
      <div className="hidden md:block">
        <p
          onClick={() => {
            router.push("/policy");
          }}
          className="cursor-pointer underline"
        >
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
