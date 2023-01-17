import { useEffect } from "react";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <div className={styles.desktop1Item} />
      <div className={styles.desktop1Inner} />
      <div className={styles.faqs}>FAQ’S</div>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.untitledDesign14}
        alt=""
        src="../untitled-design-14@2x.png"
      />
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
          <div className={styles.groupInner} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
        </div>
        <div className={styles.contactUs}>Contact Us</div>
        <img
          className={styles.mentionamicoIcon}
          alt=""
          src="../mentionamico.svg"
        />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
          <div className={styles.isTheHackathonContainer}>
            <p className={styles.isTheHackathon}>Is the hackathon free?</p>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-79.svg" />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
          <div className={styles.whatIsAContainer}>
            <p className={styles.isTheHackathon}>What is a hackathon?</p>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-77.svg" />
          <img
            className={styles.iconArrowIosDownward}
            alt=""
            src="../-icon-arrow-ios-downward.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupDiv}>
            <div className={styles.groupChild3} />
            <div className={styles.howWillThe}>
              How will the hackathon be conducted?
            </div>
            <img className={styles.groupIcon} alt="" src="../group-77.svg" />
            <img
              className={styles.iconArrowIosDownward}
              alt=""
              src="../-icon-arrow-ios-downward.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
          <div className={styles.isItNecessaryContainer}>
            <p className={styles.isTheHackathon}>
              Is it necessary to have a team at the time of registration?
            </p>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-77.svg" />
          <img
            className={styles.iconArrowIosDownward}
            alt=""
            src="../-icon-arrow-ios-downward.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
          <div className={styles.whatIfWeContainer}>
            <p className={styles.isTheHackathon}>
              What if we are not able to form our own team?
            </p>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-77.svg" />
          <img
            className={styles.iconArrowIosDownward3}
            alt=""
            src="../-icon-arrow-ios-downward.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
          <div className={styles.whyShouldYouContainer}>
            <p className={styles.isTheHackathon}>
              Why should you take part in this hackathon?
            </p>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-77.svg" />
          <img
            className={styles.iconArrowIosDownward3}
            alt=""
            src="../-icon-arrow-ios-downward.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild3} />
          <div className={styles.whyShouldYouContainer}>
            <p className={styles.isTheHackathon}>
              Why should you take part in this hackathon?
            </p>
          </div>
          <img className={styles.groupIcon} alt="" src="../group-77.svg" />
          <img
            className={styles.iconArrowIosDownward5}
            alt=""
            src="../-icon-arrow-ios-downward.svg"
          />
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild3} />
          <div className={styles.whyShouldYouContainer}>
            <p className={styles.isTheHackathon}>
              Why should you take part in this hackathon?
            </p>
          </div>
          <img className={styles.frameIcon} alt="" src="../frame-85.svg" />
        </div>
      </div>
      <img
        className={styles.heroImageBackground}
        alt=""
        src="../hero-image-background@2x.png"
      />
      <div className={styles.landingSection}>
        <div className={styles.heroSection}>
          <div className={styles.mainHeading}>
            <div className={styles.learnTeach}>Learn | Teach | Hack | Heal</div>
            <div className={styles.hackNHeal}>HACK n’ HEAL</div>
          </div>
          <div className={styles.joinDiscord}>
            <div className={styles.joinDiscordChild} />
            <div className={styles.joinDiscordItem} />
            <div className={styles.joinDiscordInner} />
            <div className={styles.joinDiscord1}>Join Discord</div>
          </div>
          <div className={styles.registerNow}>
            <div className={styles.rectangle35c} />
            <div className={styles.rectangle36b} />
            <div className={styles.rectangle34a} />
            <div className={styles.registerNow1}>Register Now</div>
          </div>
          <div className={styles.heroDate}>
            <div className={styles.heroDateChild} />
            <div className={styles.th28thFeb2023}>26’th-28’th Feb, 2023</div>
            <img
              className={styles.calendar3Icon}
              alt=""
              src="../calendar3.svg"
            />
          </div>
          <img
            className={styles.heroImageIcon}
            alt=""
            src="../hero-image@2x.png"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <img className={styles.footerChild} alt="" src="../rectangle-118.svg" />
        <div className={styles.rectangleParent6}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
        </div>
        <div className={styles.componentParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.componentChild} />
          </div>
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
        </div>
        <div className={styles.rectangleParent7}>
          <div className={styles.frameChild7} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
          <div className={styles.frameItem} />
        </div>
        <div className={styles.footerItem} />
        <div className={styles.footerInner} />
        <div className={styles.footerChild1} />
        <div className={styles.footerChild2} />
        <div className={styles.footerChild3} />
        <div className={styles.footerChild4} />
        <div className={styles.footerChild5} />
        <div className={styles.footerChild6} />
        <img className={styles.hnhLogoIcon} alt="" src="../hnh-logo.svg" />
      </div>
      <div className={styles.aboutEvent}>
        <img
          className={styles.aboutEventChild}
          alt=""
          src="../rectangle-44.svg"
        />
        <div className={styles.aboutEventFrame}>
          <div className={styles.aboutEventFrameChild} />
          <div className={styles.aboutEventFrameItem} />
          <div className={styles.hnhWillBeA72HoursProgramWrapper}>
            <div className={styles.hnhWillBeContainer}>
              <p className={styles.isTheHackathon}>
                HnH will be a 72 hours program, conducted in various stages with
                open dimensions to webinars, workshops and placement
                opportunities.
              </p>
              <p className={styles.isTheHackathon}>
                Through this hackathon we aim to produce high impact innovations
                better than existing alternatives, relevant to the local
                context, simple, easily tested, and visible to others.
              </p>
              <p className={styles.isTheHackathon}>Program features:</p>
              <p className={styles.isTheHackathon}>&nbsp;</p>
              <ul className={styles.hoursOfLiveHackathonOpport}>
                <li className={styles.hoursOfLive}>
                  72 hours of live hackathon
                </li>
                <li className={styles.hoursOfLive}>
                  Opportunity to interact with industry experts
                </li>
                <li className={styles.hoursOfLive}>
                  Experience live workshops
                </li>
                <li
                  className={styles.hoursOfLive}
                >{`40+ in-demand skills & 25+ services`}</li>
                <li>Real-time project</li>
              </ul>
            </div>
          </div>
          <img
            className={styles.aboutEventImage}
            alt=""
            src="../about-event-image@2x.png"
          />
        </div>
        <div className={styles.aboutOurEvent}>
          <img className={styles.hangerIcon} alt="" src="../hanger.svg" />
          <div className={styles.aboutOurEventHeading}>
            <div className={styles.aboutOurEventHeadingChild} />
            <div className={styles.aboutOurEvent1}>About Our Event</div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statsInner}>
            <div className={styles.groupParent1}>
              <img
                className={styles.frameChild12}
                alt=""
                src="../group-50.svg"
              />
              <b className={styles.b}>4500+</b>
              <div className={styles.registrations}>{`Registrations `}</div>
            </div>
          </div>
          <div className={styles.untitledDesign4Parent}>
            <img
              className={styles.untitledDesign4}
              alt=""
              src="../untitled-design-4@2x.png"
            />
            <b className={styles.b}>100+</b>
            <div className={styles.registrations}>Colleges</div>
          </div>
          <div className={styles.untitledDesign4Parent}>
            <img
              className={styles.untitledDesign3}
              alt=""
              src="../untitled-design-3@2x.png"
            />
            <b className={styles.b}>20</b>
            <div className={styles.registrations}>Countries</div>
          </div>
          <div className={styles.untitledDesign4Parent}>
            <img
              className={styles.untitledDesign5}
              alt=""
              src="../untitled-design-5@2x.png"
            />
            <b className={styles.b}>456</b>
            <div className={styles.registrations}>Cities</div>
          </div>
        </div>
      </div>
      <div className={styles.workshop}>
        <img
          className={styles.hangerWorkshopsIcon}
          alt=""
          src="../hanger-workshops.svg"
        />
        <div className={styles.workshopsHeading}>
          <div className={styles.workshopsHeadingChild} />
          <div className={styles.workshops}>Workshops</div>
        </div>
        <img
          className={styles.rightArrowWorkshops}
          alt=""
          src="../right-arrow-workshops.svg"
        />
        <div className={styles.sliderWorkshops}>
          <div className={styles.sliderWorkshopsChild} />
          <img
            className={styles.sliderWorkshopsItem}
            alt=""
            src="../ellipse-157.svg"
          />
          <img
            className={styles.sliderWorkshopsItem}
            alt=""
            src="../ellipse-161.svg"
          />
          <img
            className={styles.sliderWorkshopsItem}
            alt=""
            src="../ellipse-160.svg"
          />
          <img
            className={styles.sliderWorkshopsItem}
            alt=""
            src="../ellipse-159.svg"
          />
          <img
            className={styles.sliderWorkshopsItem}
            alt=""
            src="../ellipse-158.svg"
          />
        </div>
        <div className={styles.workshopsPara}>
          <div className={styles.workshopsParaChild} />
          <div className={styles.workshopsParaItem} />
          <div className={styles.workshopsParaInner} />
          <div className={styles.workshopsParaChild1} />
          <div className={styles.workshopsParaChild2} />
          <div className={styles.workshopsParaChild3} />
          <div className={styles.workshopsParaChild4} />
          <div className={styles.workshopsParaChild5} />
          <img
            className={styles.workshopsParaChild6}
            alt=""
            src="../ellipse-162.svg"
          />
        </div>
        <img
          className={styles.webinarpanaIcon}
          alt=""
          src="../webinarpana.svg"
        />
      </div>
      <div className={styles.rectangleParent8}>
        <div className={styles.groupChild17} />
        <div className={styles.codeOfConduct}>CODE OF CONDUCT</div>
      </div>
      <div className={styles.ourTeam}>
        <div className={styles.ourTeamChild} />
        <div className={styles.teamMembers2}>
          <div className={styles.frameParent}>
            <div className={styles.groupParent2}>
              <img
                className={styles.frameChild13}
                alt=""
                src="../group-63.svg"
              />
              <img
                className={styles.frameChild14}
                alt=""
                src="../group-97@2x.png"
              />
              <div className={styles.rectangleParent9}>
                <div className={styles.groupChild18} />
                <div className={styles.bharatPahwa}>Bharat Pahwa</div>
              </div>
              <div className={styles.rectangleParent10}>
                <div className={styles.groupChild19} />
                <div className={styles.designLead}>(Design Lead)</div>
              </div>
              <div className={styles.iconTwitterParent}>
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-twitter.svg"
                />
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-linkedin.svg"
                />
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-facebook.svg"
                />
              </div>
            </div>
            <div className={styles.groupParent2}>
              <img
                className={styles.frameChild13}
                alt=""
                src="../group-631.svg"
              />
              <img
                className={styles.frameChild14}
                alt=""
                src="../group-97@2x.png"
              />
              <div className={styles.rectangleParent9}>
                <div className={styles.groupChild18} />
                <div className={styles.bharatPahwa}>Bharat Pahwa</div>
              </div>
              <div className={styles.rectangleParent10}>
                <div className={styles.groupChild19} />
                <div className={styles.designLead}>(Design Lead)</div>
              </div>
              <div className={styles.iconTwitterParent}>
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-twitter.svg"
                />
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-linkedin.svg"
                />
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-facebook.svg"
                />
              </div>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle-119.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild13}
              alt=""
              src="../group-632.svg"
            />
            <img
              className={styles.frameChild14}
              alt=""
              src="../group-97@2x.png"
            />
            <div className={styles.rectangleParent9}>
              <div className={styles.groupChild18} />
              <div className={styles.bharatPahwa}>Bharat Pahwa</div>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.groupChild19} />
              <div className={styles.designLead}>(Design Lead)</div>
            </div>
            <div className={styles.iconTwitterParent}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-twitter.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-linkedin.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-facebook.svg"
              />
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-119.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild13}
              alt=""
              src="../group-633.svg"
            />
            <img
              className={styles.frameChild14}
              alt=""
              src="../group-97@2x.png"
            />
            <div className={styles.rectangleParent9}>
              <div className={styles.groupChild18} />
              <div className={styles.bharatPahwa}>Bharat Pahwa</div>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.groupChild19} />
              <div className={styles.designLead}>(Design Lead)</div>
            </div>
            <div className={styles.iconTwitterParent}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-twitter.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-linkedin.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-facebook.svg"
              />
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-119.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild13}
              alt=""
              src="../group-634.svg"
            />
            <img
              className={styles.frameChild14}
              alt=""
              src="../group-97@2x.png"
            />
            <div className={styles.rectangleParent9}>
              <div className={styles.groupChild18} />
              <div className={styles.bharatPahwa}>Bharat Pahwa</div>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.groupChild19} />
              <div className={styles.designLead}>(Design Lead)</div>
            </div>
            <div className={styles.iconTwitterParent}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-twitter.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-linkedin.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-facebook.svg"
              />
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-119.svg"
            />
          </div>
        </div>
        <div className={styles.teamMembers}>
          <div className={styles.frameParent}>
            <div className={styles.groupParent2}>
              <img
                className={styles.frameChild13}
                alt=""
                src="../group-635.svg"
              />
              <img
                className={styles.frameChild14}
                alt=""
                src="../group-97@2x.png"
              />
              <div className={styles.rectangleParent9}>
                <div className={styles.groupChild18} />
                <div className={styles.bharatPahwa}>Bharat Pahwa</div>
              </div>
              <div className={styles.rectangleParent10}>
                <div className={styles.groupChild19} />
                <div className={styles.designLead}>(Design Lead)</div>
              </div>
              <div className={styles.iconTwitterParent}>
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-twitter.svg"
                />
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-linkedin.svg"
                />
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-facebook.svg"
                />
              </div>
            </div>
            <div className={styles.groupParent2}>
              <img
                className={styles.frameChild13}
                alt=""
                src="../group-636.svg"
              />
              <img
                className={styles.frameChild14}
                alt=""
                src="../group-97@2x.png"
              />
              <div className={styles.rectangleParent9}>
                <div className={styles.groupChild18} />
                <div className={styles.bharatPahwa}>Bharat Pahwa</div>
              </div>
              <div className={styles.rectangleParent10}>
                <div className={styles.groupChild19} />
                <div className={styles.designLead}>(Design Lead)</div>
              </div>
              <div className={styles.iconTwitterParent}>
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-twitter.svg"
                />
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-linkedin.svg"
                />
                <img
                  className={styles.iconTwitter}
                  alt=""
                  src="../-icon-facebook.svg"
                />
              </div>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="../rectangle-119.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild13}
              alt=""
              src="../group-637.svg"
            />
            <img
              className={styles.frameChild14}
              alt=""
              src="../group-97@2x.png"
            />
            <div className={styles.rectangleParent9}>
              <div className={styles.groupChild18} />
              <div className={styles.bharatPahwa}>Bharat Pahwa</div>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.groupChild19} />
              <div className={styles.designLead}>(Design Lead)</div>
            </div>
            <div className={styles.iconTwitterParent}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-twitter.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-linkedin.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-facebook.svg"
              />
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-119.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild13}
              alt=""
              src="../group-638.svg"
            />
            <img
              className={styles.frameChild14}
              alt=""
              src="../group-97@2x.png"
            />
            <div className={styles.rectangleParent9}>
              <div className={styles.groupChild18} />
              <div className={styles.bharatPahwa}>Bharat Pahwa</div>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.groupChild19} />
              <div className={styles.designLead}>(Design Lead)</div>
            </div>
            <div className={styles.iconTwitterParent}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-twitter.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-linkedin.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-facebook.svg"
              />
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-119.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild13}
              alt=""
              src="../group-639.svg"
            />
            <img
              className={styles.frameChild14}
              alt=""
              src="../group-97@2x.png"
            />
            <div className={styles.rectangleParent9}>
              <div className={styles.groupChild18} />
              <div className={styles.bharatPahwa}>Bharat Pahwa</div>
            </div>
            <div className={styles.rectangleParent10}>
              <div className={styles.groupChild19} />
              <div className={styles.designLead}>(Design Lead)</div>
            </div>
            <div className={styles.iconTwitterParent}>
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-twitter.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-linkedin.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="../-icon-facebook.svg"
              />
            </div>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-119.svg"
            />
          </div>
        </div>
        <div className={styles.ourTeam1}>
          <div className={styles.ourTeamItem} />
          <div className={styles.rectangleParent29}>
            <div className={styles.groupChild38} />
            <div className={styles.ourTeam2}>Our team</div>
          </div>
        </div>
        <img className={styles.ourTeamInner} alt="" src="../ellipse-178.svg" />
      </div>
      <div className={styles.themes}>
        <div className={styles.themesChild} />
        <img
          className={styles.hangerWorkshopsIcon1}
          alt=""
          src="../hanger-workshops1.svg"
        />
        <div className={styles.learningcuateParent}>
          <img
            className={styles.learningcuateIcon}
            alt=""
            src="../learningcuate.svg"
          />
          <img
            className={styles.medicalCarerafikiIcon}
            alt=""
            src="../medicalcarerafiki.svg"
          />
          <img
            className={styles.learningcuateIcon}
            alt=""
            src="../moneymotivationamico.svg"
          />
        </div>
        <div className={styles.bitcoinpanaParent}>
          <img
            className={styles.learningcuateIcon}
            alt=""
            src="../bitcoinpana.svg"
          />
          <img
            className={styles.learningcuateIcon}
            alt=""
            src="../robotfacerafiki.svg"
          />
          <img
            className={styles.learningcuateIcon}
            alt=""
            src="../virtualrealitycuate.svg"
          />
        </div>
        <div className={styles.themesHeading}>
          <div className={styles.workshopsHeadingChild} />
          <div className={styles.hackathonThemes}>Hackathon Themes</div>
        </div>
      </div>
      <div className={styles.roadmaps}>
        <div className={styles.roadmapsTags}>
          <div className={styles.r6}>
            <div className={styles.r6Child} />
            <div className={styles.r6Item} />
          </div>
          <div className={styles.r5}>
            <div className={styles.r5Child} />
            <div className={styles.r5Item} />
          </div>
          <div className={styles.r4}>
            <div className={styles.r4Child} />
            <div className={styles.r4Item} />
          </div>
          <div className={styles.r3}>
            <div className={styles.r3Child} />
            <div className={styles.r3Item} />
          </div>
          <div className={styles.r2}>
            <div className={styles.r4Child} />
            <div className={styles.r4Item} />
          </div>
          <div className={styles.r1}>
            <div className={styles.r1Child} />
            <div className={styles.r1Item} />
          </div>
        </div>
        <img
          className={styles.roadmapCentreIcon}
          alt=""
          src="../roadmap-centre.svg"
        />
        <div className={styles.rectangleParent30}>
          <div className={styles.groupChild39} />
          <img
            className={styles.groupChild40}
            alt=""
            src="../ellipse-154.svg"
          />
        </div>
        <div className={styles.roadmapHeading}>
          <div className={styles.roadmapHeadingChild} />
          <div className={styles.roadmap}>Roadmap</div>
          <img
            className={styles.roadmapHeadingItem}
            alt=""
            src="../ellipse-165.svg"
          />
        </div>
      </div>
      <div className={styles.prizes}>
        <div className={styles.prizesChild} />
        <div className={styles.prizesTable}>
          <div className={styles.row3}>
            <div className={styles.rectangleParent31}>
              <div className={styles.groupChild41} />
              <img
                className={styles.untitledDesign8}
                alt=""
                src="../untitled-design-8@2x.png"
              />
            </div>
            <div className={styles.rectangleParent32}>
              <div className={styles.groupChild42} />
              <img
                className={styles.untitledDesign9}
                alt=""
                src="../untitled-design-9@2x.png"
              />
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleParent33}>
                <div className={styles.groupChild43} />
                <img
                  className={styles.untitledDesign10}
                  alt=""
                  src="../untitled-design-10@2x.png"
                />
              </div>
              <div className={styles.groupChild44} />
            </div>
            <img
              className={styles.untitledDesign11}
              alt=""
              src="../untitled-design-11@2x.png"
            />
          </div>
          <div className={styles.row1}>
            <div className={styles.row1Inner}>
              <div className={styles.groupChild45} />
            </div>
            <div className={styles.rectangleParent34}>
              <div className={styles.groupChild43} />
              <img className={styles.iz1Icon} alt="" src="../iz-1@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.prizesHeading}>
          <img
            className={styles.prizesHeadingChild}
            alt=""
            src="../line-19.svg"
          />
          <img
            className={styles.prizesHeadingItem}
            alt=""
            src="../line-20.svg"
          />
          <div className={styles.prizesHeadingInner} />
          <div className={styles.prizes1}>Prizes</div>
          <img
            className={styles.prizesHeadingChild1}
            alt=""
            src="../ellipse-166.svg"
          />
        </div>
        <div className={styles.rectangleParent35}>
          <div className={styles.groupChild47} />
          <div className={styles.knowMoreAbout}>KNOW MORE ABOUT PRIZES</div>
        </div>
      </div>
      <div className={styles.sponsors}>
        <div className={styles.titleSponsors}>
          <div className={styles.titleSponsorsChild} />
          <div className={styles.titleSponsor}>Title Sponsor</div>
        </div>
        <div className={styles.sponsors1}>
          <div className={styles.titleSponsorsChild} />
          <div className={styles.sponsors2}> Sponsors</div>
        </div>
        <div className={styles.sponsors3}>
          <div className={styles.groupParent13}>
            <div className={styles.rectangleParent36}>
              <div className={styles.groupChild48} />
              <img
                className={styles.image10Icon}
                alt=""
                src="../image-10@2x.png"
              />
            </div>
            <div className={styles.rectangleParent36}>
              <div className={styles.groupChild48} />
              <img
                className={styles.image11Icon}
                alt=""
                src="../image-11@2x.png"
              />
            </div>
            <div className={styles.rectangleParent36}>
              <div className={styles.groupChild48} />
              <img
                className={styles.image12Icon}
                alt=""
                src="../image-12@2x.png"
              />
            </div>
          </div>
          <div className={styles.groupParent14}>
            <div className={styles.rectangleParent39}>
              <div className={styles.groupChild51} />
              <img
                className={styles.image13Icon}
                alt=""
                src="../image-13@2x.png"
              />
            </div>
            <div className={styles.rectangleParent36}>
              <div className={styles.groupChild48} />
              <img
                className={styles.image14Icon}
                alt=""
                src="../image-14@2x.png"
              />
            </div>
            <div className={styles.rectangleParent36}>
              <div className={styles.groupChild48} />
              <img
                className={styles.image15Icon}
                alt=""
                src="../image-15@2x.png"
              />
            </div>
          </div>
          <div className={styles.groupParent15}>
            <div className={styles.rectangleParent36}>
              <div className={styles.groupChild48} />
              <img
                className={styles.image16Icon}
                alt=""
                src="../image-16@2x.png"
              />
            </div>
            <div className={styles.rectangleParent36}>
              <div className={styles.groupChild48} />
              <img
                className={styles.image17Icon}
                alt=""
                src="../image-17@2x.png"
              />
            </div>
            <div className={styles.rectangleParent36}>
              <div className={styles.groupChild48} />
              <img
                className={styles.image18Icon}
                alt=""
                src="../image-18@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.sponsorsImage}>
          <div className={styles.sponsorsImageChild} />
          <img
            className={styles.longLogoRed2}
            alt=""
            src="../long-logo-red--2@2x.png"
          />
        </div>
        <div className={styles.sponsorsHeading}>
          <div className={styles.sponsorsHeadingChild} />
          <div className={styles.sponsorsHeadingItem} />
          <div className={styles.sponsorsHeadingInner} />
          <div className={styles.sponsors4}>Sponsors</div>
          <img
            className={styles.sponsorsHeadingChild1}
            alt=""
            src="../ellipse-167.svg"
          />
          <img
            className={styles.sponsorsHeadingChild2}
            alt=""
            src="../ellipse-168.svg"
          />
        </div>
        <div className={styles.rectangleParent45}>
          <div className={styles.groupChild57} />
          <div className={styles.sponsorUs}>SPONSOR US</div>
        </div>
      </div>
      <div className={styles.faqHeading}>
        <div className={styles.faqHeadingChild} />
        <div className={styles.faqHeadingItem} />
        <div className={styles.rectangleParent46}>
          <div className={styles.workshopsHeadingChild} />
          <div className={styles.faqs1}>FAQ’s</div>
        </div>
        <img
          className={styles.faqHeadingInner}
          alt=""
          src="../ellipse-179.svg"
        />
        <img
          className={styles.faqHeadingChild1}
          alt=""
          src="../ellipse-180.svg"
        />
      </div>
      <div className={styles.navigationBar}>
        <button className={styles.contactUs1} data-animate-on-scroll>
          <div className={styles.contactUsChild} />
          <div className={styles.contactUsWrapper}>
            <div className={styles.contactUs2}>CONTACT US</div>
          </div>
        </button>
        <img className={styles.hnhLogoIcon1} alt="" src="../hnh-logo1.svg" />
        <div className={styles.sliderParent}>
          <img className={styles.sliderIcon} alt="" src="../slider.svg" />
          <div className={styles.navItems}>
            <div className={styles.about}>About</div>
            <div className={styles.workshops1}>Workshops</div>
            <div className={styles.themes1}>Themes</div>
            <div className={styles.timeline}>Timeline</div>
            <div className={styles.prizes2}>Prizes</div>
            <div className={styles.sponsors5}>Sponsors</div>
            <div className={styles.more}>More...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
