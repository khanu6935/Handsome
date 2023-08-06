import { Images } from "../../../assets/Images";
export default function Section5() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3">
          <img src={Images.iPhone1} alt="" className="w-full" />
        </div>
        <div className="w-full lg:w-2/3">
          <div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-[3.65vw] font-bold uppercase">
                QUAND VOTRE CARTE MURMURE A L'OREILLE DE VOS CLIENTS
              </h1>
            </div>
            <p className="text-white mb-16">
              HandSome permet aux entreprises de mieux répondre aux besoins
              spécifiques de leur clientèle, en leur offrant une expérience de
              paiement appropriée à leur handicap. ET DE QUALITE.
            </p>
            <button className="bg-[#235EE8] py-[12px] px-[20px] rounded-[5px] text-white text-lg font-[450]">
              Prendez un RDV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
