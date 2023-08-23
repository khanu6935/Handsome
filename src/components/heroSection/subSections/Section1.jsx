import Button from "../../Button";
import MainHeading from "../../MainHeading";

export default function Section1() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <MainHeading textColor="gradient-text" />
        <p className="font-[Montserrat] font-medium text-base lg:text-2xl tracking-[1.5px] capitalize text-white w-full lg:w-1/2 mx-auto mt-5 mb-10">
          HandSome, Une carte de paiement innovante qui murmure aux oreilles des
          déficients visuels.
        </p>
        <Button />
      </div>
    </>
  );
}
