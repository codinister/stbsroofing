'use client'

import Sectiontitle from '@/components/Sectiontitle';
import Bannertitle from '@/components/Bannertitle';
import Banner from '@/components/Banner';

const Faq = () => {
  return (
    <>
      <div className="banner-wrapper">
        <Banner img="/about.jpg" />

        <Bannertitle
          mainheading="FAQ"
          subheading="Answers To All Your Querries"
        />
      </div>
      <section className="sectiontwo">
        <Sectiontitle
          mainheading="Frequently Asked Questions.​"
          subheading="What customers ask"
        />

        <div className="container">
          <div className="faq">
            <h3>HOW LONG WILL A NEW ROOF LAST?</h3>
            <div>
              <ul>
                <li>
                  The lifespan of a roof depends on so many factors that include
                  exposure to natural elements such as rain, wind, sun, humidity
                  and snow. The conditions will in time age the roofing
                  components if you have few roofs that are missing or damaged
                </li>

                <li>
                  Gutters that do not drain properly pose major problems to the
                  roofing components. These clogged gutters allow rain water to
                  flow back onto the roof possibly rotting the decking and the
                  fascia boards
                </li>

                <li>
                  Inadequate roof ventilation and insulation can also reduce the
                  lifespan of the roofing components. Without sufficient space
                  ventilation, extreme temperature difference between the space
                  of the home and the outdoors will cause an expansion and
                  contraction of the roofing components which may rub granules
                  off the shingle and cause shingle to curl.
                </li>

                <li>
                  Depending on the selection of roofing components, new roofs
                  are given years of warranty regarding the roof in question.
                  The material types include: AZ150 – 30 years warranty Premium
                  Aluzinc – 15 years warranty Stone-coated Chipped Tiles – 50
                  years warranty Steel Trusses – 60 years warranty Aluminum
                  (IBR, IDT, Standing Seam) – Lifetime.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="faq">
            <h3>
              WHAT PREPARATION DO I NEED TO MAKE INSIDE MY HOME BEFORE THE WORK
              BEGINS?
            </h3>

            <div>
              <ul>
                <li>
                  Firstly, you need to get ladder in place to enable the
                  installer to climb with ease but if Westcoast Roofing System
                  is install either the wood or the trusses, we will be
                  responsible for providing the ladder.
                </li>
                <li>
                  During installation, there will be vibrations so it is
                  recommended that ceiling fixtures are protected and all
                  pictures and items of value are removed from the walls. If you
                  need any assistance, please be sure to ask us before the
                  project begins.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="faq">
            <h3>
              WHAT HAPPENS WHEN THE ROOFING MATERIALS ARE DELIVERED TO MY HOMES?
            </h3>
            <div>
              <ul>
                <li>
                  Work begins a day after the materials are delivered to your
                  site. Depending on the size of the structure, our installers
                  will use 2 to 4 days to finish installation.
                </li>
                <li>
                  We request you keep the drive way clear on the day the roofing
                  materials are to be delivered.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="faq">
            <h3>HOW WILL I KNOW IF I NEED A NEW ROOF?</h3>
            <div>
              <ul>
                <li>
                  Leakages are obvious clues that your roof needs repair or
                  replacement. The condition of the roof will determine whether
                  a repair or replacement is needed.
                </li>
                <li>
                  Discoloration spots on wall, peeling paint on the ceiling,
                  drips and loose wallpapers are indicators of a leaking roof.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="faq">
            <h3>
              WHAT WILL THE ESTIMATOR LOOK FOR WHEN INSPECTING THE ROOF OF MY
              HOME?
            </h3>
            <div>
              Westcoast Roofing System estimators will check the roof covering,
              drainage systems, the roof rafters and trusses or woodwork.
            </div>
          </div>
        </div>

        <div className="container">
          <div className="faq">
            <h3>ARE ESTIMATES FREE?</h3>
            <div>
              Estimates are free. Call to schedule an appointment with our
              experienced estimators. After careful examination, we will provide
              you with a documented proposal detailing our findings, cost and
              options available.
            </div>
          </div>
        </div>

        <div className="container">
          <div className="faq">
            <h3>CAN A NEW ROOF LOWER MY ENERGY CONSUMPTION?</h3>
            <div>
              A well ventilated and properly insulated space will help reduce
              moisture condensation and heat loss in cold and hot weather
              conditions enabling you to conserve energy.
            </div>
          </div>
        </div>

        <div className="container">
          <div className="faq">
            <h3>DO I HAVE TO BE HOME DURING THE ROOFING PROJECT?</h3>
            <div>
              Not unless you choose to be there. Roofing is a noisy, messy
              project but when we are through you should not be able to tell we
              were there. You only need to keep your valuables safe.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
