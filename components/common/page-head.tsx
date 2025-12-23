import Link from "next/link";

interface pageHeadTypes {
  bgImg: string;
  prevPage: string;
  prevLink: string;
  currPage: string;
}

const PageHead = ({ bgImg, prevPage, prevLink, currPage }: pageHeadTypes) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="cover min-h-[40vh] flex flex-col gap-3 items-center justify-center md:min-h-[60vh]">
        <h3 className="text-white text-2xl md:text-3xl">{currPage}</h3>
        <div className="breadcrumbs text-white/70">
          <Link href={prevLink} className="">
            {prevPage}
          </Link>{" "}
          - <span>{currPage}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHead;
