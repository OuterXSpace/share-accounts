import { ChevronRight } from "@/svg/chevron-right";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const pathSegments = router.pathname
    .split("/")
    .filter((segment) => segment !== ""); // Split the path into segments

  return (
    <nav className="flex flex-wrap gap-2 items-center">
      <h3 className="text-[#757676]">Home</h3>
      {pathSegments.map((segment, index) => (
        <Fragment key={index}>
          <h3 className="flex flex-wrap gap-4 items-center">
            <ChevronRight />
            <span className="font-semibold">
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </span>
          </h3>
        </Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
