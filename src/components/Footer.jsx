import React from "react";
import { Images } from "../assets/Images";
export default function Footer() {
  return (
    <>
      <section className="footer-section bg-[#09002C] ">
        <div className="container mx-auto">
          <div className="flex flex-col px-5 lg:px-0 xl:flex-row gap-[40px] xl:gap-[141px] pb-[63px] border-b-2 border-white">
            <div className="w-full md:max-w-1/2 xl:max-w-1/3">
              <img
                src={Images.footerLogo}
                alt=""
                className="w-[361px] h-[55px]"
              />
              <p className="mt-1 text-white text-[22px] leading-[33px] font-[400] ">
                HandSome, société immatriculée au registre du commerce et des
                sociétés de Paris sous le numéro 852 929 694, est enregistrée
                auprès de l'Autorité de Contrôle Prudentiel et de Résolution
                (ACPR) en tant qu'agent de Treezor SASU Capital de 3 334 962,00
                Euros Siège social 33 avenue de Wagram,75017 Paris Siren 807 465
                059 | RCS Paris
              </p>
            </div>
            <div className="w-full md:max-w-1/2 xl:max-w-1/3 flex flex-col gap-[32px]">
              <ul className="text-white text-[24px] tracking-[0.72px] font-[400] ">
                <li className="pb-[32px]">
                  Politique de confidentialité Handsome
                </li>
                <li className="pb-[32px]">Handsome CGU</li>
                <li className="pb-[32px]">
                  Politique de confidentialité Treezor
                </li>
                <li className="pb-[32px]">Mentions légales Handsome</li>
                <li className="">Mentions légales Treezor</li>
              </ul>
            </div>
            <div className="w-full md:max-w-1/2 xl:max-w-1/3 flex flex-col gap-[32px]">
              <ul className="text-white text-[24px] tracking-[0.72px] font-[400] ">
                <li className="pb-[32px]">A props de Handsome</li>
                <li className="pb-[32px]">HandsomeCard</li>
                <li className="pb-[32px]">Blogs</li>
                <li>Handsome App</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between py-[32px] lg:pl-20 lg:w-1/2">
            <div className="flex text-white">
              <img src={Images.social1} alt="" className="" />
              <img src={Images.social2} alt="" className="" />
              <img src={Images.social3} alt="" className="" />
            </div>
            <div>
              <p className="text-white">Copyright Handsome 2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
