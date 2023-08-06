import MainHeading from "../../MainHeading";

export default function Section1() {
  return (
    <>
      <div>
        <MainHeading textColor="gradient-text" />
        <p className="text-white w-1/2 mx-auto mb-16">
          HandSome, Une carte de paiement innovante qui murmure aux oreilles des
          déficients visuels.
        </p>
        <button className="bg-[#235EE8] py-[12px] px-[20px] rounded-[5px] text-white text-lg font-[450]">
          Prendez un RDV
        </button>
      </div>
    </>
  );
}
