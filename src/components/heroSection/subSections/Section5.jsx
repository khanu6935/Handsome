import { Images } from "../../../assets/Images";
import Button from "../../Button";
export default function Section5({ arrowHandler }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center lg:items-center h-screen">
        <div className="w-full lg:w-[40%]">
          <img
            src={Images.iPhone1}
            alt=""
            className="w-[150px] lg:w-[285px] mx-auto mb-5 lg:mb-0 hidden lg:block"
          />
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="relative">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-base lg:text-5xl 2xl:text-[3.65vw] font-bold uppercase">
                QUAND VOTRE CARTE MURMURE A L'OREILLE DE VOS CLIENTS
              </h1>
            </div>
            <p className="font-[Montserrat] font-medium text-base lg:text-2xl tracking-[1.5px] capitalize text-white my-[42px]">
              HandSome permet aux entreprises de mieux répondre aux besoins
              spécifiques de leur clientèle, en leur offrant une expérience de
              paiement appropriée à leur handicap. ET DE QUALITE.
            </p>
            <Button />
            <a href="#section2">
              <img
                src={Images.downArrow}
                alt=""
                className="absolute top-0 right-0 w-12 arrow-move"
                // onClick={arrowHandler}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
