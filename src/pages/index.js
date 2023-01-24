import { Disclosure } from "@headlessui/react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Button from "../components/Button";

const IndexPage = () => {
  return (
    <>
      <header className="header-bg px-6 flex h-[100vh] max-h-[800px] items-center">
        <div className="container flex flex-col gap-6 relative w-1/2">
          <h1 className="uppercase leading-[1.125] relative">
            <span className="before:block before:absolute before:w-full before:h-8 before:-z-10 before:bottom-0 before:bg-gray before:max-w-[378px]" />
            Fly beyond <br />
            boundaries
          </h1>
          <p>
            Wir streben danach, Drohnen zu entwickeln, die sicher, zuverlässig
            und einfach zu bedienen sind und die für eine Vielzahl von
            Anwendungen eingesetzt werden können.
          </p>
          <div className="flex gap-5 items-center">
            <Button>Produkte</Button>
            <AnchorLink to="/#newsletter" className="text-primaryBlue">
              Bleib am Laufenden
            </AnchorLink>
          </div>
        </div>
        <div className="max-w-[715px] w-1/2 ml-10 translate-y-20">
          <div className="flex flex-col items-end gap-10">
            <StaticImage
              src="../assets/images/smart-drone-firefighter.png"
              alt="Smart Drone Firefighter 3.0"
              placeholder="NONE"
            />
            <div className="max-w-[350px] text-white space-y-2 mr-8">
              <div className="font-poppinsBold">SMART DRONE FIREFIGHTER 3.0</div>
              <p>
                Unser neuestes Produkthighlight.
                <br /> Lesen Sie unseren Blogeintrag.
              </p>
              <Link to="/" className="inline-block font-poppinsSemiBold">Mehr Erfahren</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-28 my-28">
        <section className="container px-6 space-y-4">
          <h2>Produkte</h2>
          <p className="max-w-[700px]">
            Die Einsatzgebiete unserer Produkte sind genauso vielfältig wie Sie,
            daher bieten für jede Möglichkeit die passende Drohne. Erfahren Sie
            hier mehr über unsere Produktpalette.
          </p>
          <div className="grid grid-cols-5 !mt-10 h-96 gap-3">
            <div className="relative">
              <StaticImage
                src="../assets/images/product-range/lieferungen.jpg"
                alt="Lieferungen"
                className="absolute left-0 top-0 w-full h-full"
              />
              <div className="absolute left-0 bottom-0 w-full h-28 bg-gradient-to-t from-black/80" />
              <div className="absolute left-5 bottom-6 text-white font-bold uppercase">
                Lieferungen
              </div>
            </div>
            <div className="relative">
              <StaticImage
                src="../assets/images/product-range/landwirtschaft.jpg"
                alt="Landwirtschaft"
                className="absolute left-0 top-0 w-full h-full"
              />
              <div className="absolute left-0 bottom-0 w-full h-28 bg-gradient-to-t from-black/80" />
              <div className="absolute left-5 bottom-6 text-white font-bold uppercase">
                Landwirtschaft
              </div>
            </div>
            <div className="relative">
              <StaticImage
                src="../assets/images/product-range/feuerwehr.jpg"
                alt="Feuerwehr"
                className="absolute left-0 top-0 w-full h-full"
              />
              <div className="absolute left-0 bottom-0 w-full h-28 bg-gradient-to-t from-black/80" />
              <div className="absolute left-5 bottom-6 text-white font-bold uppercase">
                Feuerwehr
              </div>
            </div>
            <div className="relative">
              <StaticImage
                src="../assets/images/product-range/bergrettung.jpg"
                alt="Bergrettung"
                className="absolute left-0 top-0 w-full h-full"
              />
              <div className="absolute left-0 bottom-0 w-full h-28 bg-gradient-to-t from-black/80" />
              <div className="absolute left-5 bottom-6 text-white font-bold uppercase">
                Bergrettung
              </div>
            </div>
            <div className="relative">
              <StaticImage
                src="../assets/images/product-range/lawinensprengung.jpg"
                alt="Lawinensprengung"
                className="absolute left-0 top-0 w-full h-full"
              />
              <div className="absolute left-0 bottom-0 w-full h-28 bg-gradient-to-t from-black/80" />
              <div className="absolute left-5 bottom-6 text-white font-bold uppercase">
                Lawinensprengung
              </div>
            </div>
          </div>

          <div className="!mt-14">
            <h3>Nicht das passende dabei?</h3>
            <p className="mt-1 mb-6">
              Kein Problem, Sie können uns auch eine Spezialanfrage zusenden.
            </p>
            <Button>Zum Formular</Button>
          </div>
        </section>

        <section>
          <div className="container px-6 flex gap-10">
            <div className="basis-full">
              <h2>Antworten auf Ihre Fragen</h2>
            </div>
            <div className="basis-full flex flex-col divide-y">
              {[
                [
                  "Worauf muss ich beim Kauf achten?",
                  "Bevor Sie eine Smart Drone kaufen müssen Sie über das Einsatzgebiet der Drohne im Klaren sein. Unsere Mitarbeiter helfen Ihnen gerne weiter die richtige Drohne zu finden.",
                ],
                [
                  "Wie lang ist die Flugzeit der Drohnen?",
                  "Die Flugzeit variert je nach Witterungsverhältnis, beträgt zumindest jedoch immer 30 Minuten.",
                ],
                [
                  "Was passiert bei starkem Wind?",
                  "Sollte ein starker Wind auftreten, erkennt die Drohne diesen und versucht automatisch sicher zu landen.",
                ],
                [
                  "Wo bekomme ich Hilfe, falls ich ein Problem habe?",
                  "Sie können sich gerne in unserem Service-Center umschauen, ansonsten helfen Ihnen unsere Mitarbeiter gerne weiter.",
                ],
              ].map(([question, answer], index) => {
                return (
                  <div key={index} className="py-3">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-left text-xl w-full">
                        <div className="flex justify-between items-center">
                          <div>{question}</div>
                          <div className="text-3xl font-thin mr-3">+</div>
                        </div>
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-500 mr-5">
                        {answer}
                      </Disclosure.Panel>
                    </Disclosure>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto flex h-60">
            <div className="w-[40%] pr-5">
              <h2>Fragen offen?</h2>
              <p>
                Sehen Sie sich hier unserem Support-Center weiter um oder
                kontaktieren Sie unsere Mitarbeiter direkt. Wir helfen gerne
                weiter.
              </p>
            </div>
            <div className="w-[30%] py-8 px-6 bg-[#F1F1F1] space-y-4">
              <div className="text-[#8E8E8E] font-bold">Support</div>
              <h4>
                Wir helfen gerne weiter. Schreiben Sie uns einfach eine E-Mail.
              </h4>
              <div>
                <a href="mailto:support@smart-drone.at">
                  support@smart-drone.at
                </a>
              </div>
            </div>
            <div className="w-[30%]">
              <StaticImage
                src="../assets/images/support-mitarbeiter.jpg"
                alt="Support Mitarbeiter"
                className="h-full"
              />
            </div>
          </div>
          <div className="container mx-auto flex h-60">
            <div className="w-[40%] py-8 px-6 bg-[#F9F9F9] space-y-4">
              <div className="text-[#8E8E8E] font-bold">Community</div>
              <h4>
                Wir haben eine lebhafte Community, die sich gerne austauscht.
              </h4>
              <div>
                <AnchorLink to="/" className="font-light">
                  Zum Forum
                </AnchorLink>
              </div>
            </div>
            <div className="w-[30%] py-8 px-6 bg-[#FAFAFA] space-y-4">
              <div className="text-[#8E8E8E] font-bold">
                Tipps und Anleitungen
              </div>
              <h4>
                Wie zeigen Ihnen wie Ihre Drohnen richtig gewartet werden.
              </h4>
              <div>
                <AnchorLink to="/" className="font-light">
                  Mehr
                </AnchorLink>
              </div>
            </div>
            <div className="w-[30%] py-8 px-6 bg-[#F4F7FB] space-y-4">
              <div className="text-[#8E8E8E] font-bold">Zubehör und Ersatz</div>
              <h4>Hier finden Sie Zubehör und Ersatzteile.</h4>
              <div>
                <AnchorLink to="/" className="font-light">
                  Zum Shop
                </AnchorLink>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto space-y-8 flex flex-col items-center">
            <h2>AUF DEM LAUFENDEN BLEIBEN</h2>
            <p className="max-w-[570px] text-center">
              Melden Sie sich mit Ihrer E-Mail Adresse bei unserem wöchentlichen
              Newsletter an und erfahren Sie Neuigkeiten als erstes.
            </p>
            <div className="w-full max-w-[638px]">
              <input
                type="text"
                className="bg-[#F8F8F8] rounded-full w-full text-center px-6 py-4 focus:outline-none"
                placeholder="Ihre E-Mail Adresse"
              />
            </div>
            <Button>Anmelden</Button>
          </div>
        </section>

        <section>
          <div className="relative bg-[#F8F8F8] max-w-[945px] rounded-[1.75rem] px-20 py-16 mx-auto">
            <div className="max-w-[400px] space-y-6">
              <h3 className="text-3xl">
                Wir treiben <br />
                <span className="text-primaryBlue">Persönlichkeiten</span> in
                die Höhe
              </h3>
              <p>
                Werde selbst Teil von etwas großem und bewirb dich noch heute.
              </p>
              <Button>Offene Stellen</Button>
            </div>
            <div className="absolute bottom-0 right-5 flex items-end gap-3">
              <div className="pb-6">#flybeyondboundaries</div>
              <StaticImage
                src="../assets/images/glueckliche-mitarbeiterin.png"
                alt="Glückliche Mitarbeiterin"
                placeholder="NONE"
                height={300}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
