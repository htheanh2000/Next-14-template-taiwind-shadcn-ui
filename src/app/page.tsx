import Header from "@/components/header";
import PriceCard from "@/components/priceCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Image from "@/components/ui/image";
import Link from "next/link";
import {
  PLANS,
  TOOL_2_CONTENTS,
  TOOL_CONTENTS,
  SPONSORS,
  CONTENTS,
  FAQS,
} from "@/constant/homepage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="">
      {/* Start block */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Building digital <br />
              products & brands.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcome to Ielts4Prep, your stepping stone to global
              opportunities. We specialize in providing top-notch IELTS training
              to help you unlock the door to international education and
              professional opportunities.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Button variant={"outline"} size={"lg"}>
                <Icon size={"15"} fill="#000" className="mr-2" name="github" />{" "}
                Get started
              </Button>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="./images/hero.png" alt="hero image" />
          </div>
        </div>
      </section>
      {/* End block  */}

      {/* <!-- Start block --> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {SPONSORS.map((sponsor) => (
              <Link href="#" className="flex items-center lg:justify-center">
                <Image src={sponsor.url} alt={sponsor.name} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Work with tools you already use
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>
              {/* <!-- List --> */}
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                {TOOL_CONTENTS.map((content) => (
                  <li className="flex space-x-3">
                    {/* <!-- Icon --> */}
                    <Icon
                      size={20}
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      name="ticked"
                    />
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {content}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
            <Image
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="/images/feature-1.png"
              alt="dashboard feature image"
            />
          </div>
          {/* <!-- Row --> */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <Image
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="/images/feature-2.png"
              alt="feature image 2"
            />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>
              {/* <!-- List --> */}
              <ul
                role="list"
                className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                {TOOL_2_CONTENTS.map((content) => (
                  <li className="flex space-x-3">
                    {/* <!-- Icon --> */}
                    <Icon
                      size={20}
                      className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                      name="ticked"
                    />
                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                      {content}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-light lg:text-xl">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
              Trusted Worldwide
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Explore Legality Guide
                  <Icon name="right" size={20} className="w-5 h-5 ml-1"></Icon>
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
                >
                  Visit the Trust Center
                  <Icon name="right" size={20} className="w-5 h-5 ml-1"></Icon>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {CONTENTS.map((data) => (
              <div key={data.title}>
                <Icon
                  name={data.icon}
                  className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
                  size={20}
                />
                <h3 className="mb-2 text-2xl font-bold dark:text-white">
                  {data.title}
                </h3>
                <p className="font-light text-gray-500 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <Icon
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              name="quotes"
            />
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                "Landwind is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <Image
                layout="intrinsic"
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Landwind we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {PLANS.map((plan) => (
              <PriceCard key={plan.title} {...plan} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h2>
          <div className="max-w-screen-md mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {
                FAQS.map((faq,index) => <AccordionItem key={faq.title} value={faq.title}>
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                {
                  faq.description.map((content, index) => <AccordionContent key={index}>{content} </AccordionContent>)
                }
              </AccordionItem>)
              }
            </Accordion>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      {/* <!-- Start block --> */}
    <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div className="max-w-screen-sm mx-auto text-center">
                <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Start your free trial today</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Landwind Platform for 30 days. No credit card required.</p>
                <Link href="#" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Free trial for 30 days</Link>
            </div>
        </div>
    </section>
    {/* <!-- End block --> */}
    </main>
  );
}
