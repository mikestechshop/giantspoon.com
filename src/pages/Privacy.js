// @flow

import React, { useEffect } from "react";
import PrivacyChart from "../static/privacy-chart.png";
import { Wrapper, Group, Image, Footer } from "../components";
type TTermsProps = {
  handleLinkChange: Function,
};
const Privacy = (props: TTermsProps) => {
  useEffect(() => {
    if (document.querySelector("#section-tab")) {
      // $FlowFixMe
      document.querySelector("#section-tab").innerHTML = "Privacy";
    }
  });
  return (
    <Wrapper>
      <Group bgc="#0C2340">
        <Group bgc="#0C2340" width="80vw" mt="100px" mb="100px">
          Giant Spoon Privacy Policy Last Updated and Effective as of: January
          1, 2020
          <p>
            Giant Spoon LLC (“Giant Spoon”, “we”, “our” or “us”) understands
            that privacy is important to our users. Protecting your private
            information is our priority. This Privacy Policy below discloses our
            practices regarding information collection and usage for
            https://www.giantspoon.com/ (the “Website”) and any websites, apps,
            communications or services that we provide, including our online and
            offline events (collectively, the “Services”), unless another
            applicable privacy policy is posted on that Service or provided
            on-site. Overview: • We collect Personally Identifiable Information
            (as defined below) from users of our Website and Services when it is
            voluntarily provided to us and use it for the purposes for which it
            was provided (see Information We Collect Directly From You). • We
            automatically collect information from users of our Website and
            Services for advertising and analytical purposes (see Information We
            Collect From You Automatically). • You can control certain uses of
            your information, and, if you are a California resident as defined
            in Section 17014 of title 18 of the California Code of Regulations,
            as that section read on September 1, 2017 (“California Consumer”),
            you can access and delete certain information. If you are a
            California Consumer, please see California Consumer Notice below. •
            We will not use or share your Personally Identifiable Information
            with anyone except as described in this Privacy Policy.
          </p>
          <p>
            Please read this Privacy Policy carefully to understand our policies
            and practices regarding your information and how we will treat it.
            If you do not agree with our policies and practices, you should not
            use the Website or the Services. By accessing or using the Website
            or Services, you agree to this Privacy Policy. If you have
            questions, you can always contact us using the information in the
            section below titled Contact. Information We Collect Directly From
            You: We may collect information, including Personally Identifiable
            Information, when you provide such information to us directly, such
            as when you send us an email, participate in one of our events or
            otherwise interact with us on the Website or through our Services.
            Your provision of your Personally Identifiable Information to us is
            completely voluntary. “Personally Identifiable Information” is
            information that specifically identifies you. We do not collect
            Personally Identifiable Information unless you submit that
            information to us. Categories of Personally Identifiable Information
            we collect directly from you include identity data (e.g., name or
            other similar identifiers), and contact data (e.g. address, email
            address, telephone number). We may also collect other information
            that you directly provide us including marketing and communications
            data (e.g. your preferences in receiving marketing from us).
            Information We Collect Automatically: Giant Spoon, our service
            providers or our third party partners may also automatically collect
            information from you when you visit our Website and use our Services
            through cookies and other tracking technologies. Such information
            does not directly identify you as an individual and may include:
          </p>
          <p>
            Cookies and Similar Technology We may store some information on your
            device or device hard drive as a cookie or similar type of file
            (such as clear gifs, web beacons, tags, and similar technologies
            that work on mobile devices) to collect data related to usage of the
            Website or our other Services. "Cookies" are pieces of information
            that may be placed on your computer by a website for the purpose of
            collecting data to facilitate and enhance your communication and
            interaction with that website. Such data may include, without
            limitation, the address of the websites you visited before and after
            you visited the Website, the type of browser you are using, your
            Internet Protocol (IP) address, what pages in the Website you visit
            and what links you clicked on, the region where your device is
            located, and geo-IP data.We may use cookies to customize your visit
            to the Website and for other purposes to make your visit more
            convenient or to enable us to enhance our Services.
          </p>
          <p>
            Clickstream As you use the Internet, a trail of electronic
            information is left at each website you visit. This information,
            which is sometimes referred to as "clickstream data," can be
            collected and stored by a website's server. Clickstream data can
            tell us the type of computer and browsing software you use and the
            address of the website from which you linked to the Website. We may
            collect and use clickstream data as a form of aggregate information
            to anonymously determine how much time visitors spend on each page
            of our Website, how visitors navigate throughout the Website and how
            we may tailor our web pages to better meet the needs of visitors.
            This information will be used to improve our Website and our
            Services.
          </p>
          <p>
            Site Analytics We may work with third-party service providers who
            use the technologies described in this section to conduct website
            analytics to help us track and understand how visitors use our
            Website. One such provider is Google Analytics, a web analytics
            service provided by Google, Inc. (“Google”). Google Analytics uses
            cookies to help analyze how users use the Website. The information
            generated by the cookie about your use (including your IP address)
            will be transmitted to and stored by Google on servers in the United
            States. Google will use this information for the purpose of
            evaluating your use of the Website, compiling reports on activity
            for its staff and providing other services relating to web page
            activity and internet usage. Google may also transfer this
            information to third parties where required to do so by law, or
            where such third parties process the information on Google's behalf.
            You may refuse the use of cookies by selecting the appropriate
            settings in your browser. By using the Website and accepting
            cookies, you consent to the processing of data about you by Google
            in the manner and for the purposes set out above. Please refer to
            the Google Analytics’ currently available opt-outs for the web,
            found at https://tools.google.com/dlpage/gaoptout/. We share such
            information with our service providers, affiliates and advertising
            partners.Information Collected at Events You may voluntarily provide
            your Personally Identifiable Information when you participate in an
            experiential event or other offline event that we administer or
            participate in on behalf of a third party that we provide
            advertising services for (“Event Advertiser”). Personally
            identifiable Information collected may include your contact
            information such as your name, phone number, email or mailing
            address and your image. We may also collect consumer preference
            information and other data at events. This information is collected
            by the Event Advertiser, or by Giant Spoon (in some instances
            through a vendor) solely on behalf of the Event Advertiser, and will
            be subject to the Event Advertiser’s privacy policy or an
            event-specific privacy policy if either are presented to you. If
            neither the Event Advertiser’s nor an event-specific privacy policy
            is presented to you, this Privacy Policy will apply. Please consult
            the applicable privacy policy for more details about the disclosure
            and use of your information collected at these events and your
            rights over such information. How We Use Your Information We use
            Personally Identifiable Information and other information as
            described herein including for the following purposes: to contact
            you about and provide you and our Client with our Services, to
            personalize your experience with us including by presenting products
            or offers tailored to you, to respond to your direct inquiries, to
            add you to our mailing lists and send you emails from time to time,
            for any additional purposes that you specifically consent to
            including with respect to any experiential or offline events.
          </p>
          <p>
            We also reserve the right to supplement your Personally Identifiable
            Information with information we gather from other sources which may
            include information we gather from online and offline sources.
            Finally, we reserve the right to use and disclose information that
            is not Personally Identifiable Information in any manner permitted
            by law except as otherwise provided in this Privacy Policy.
            Non-Personally Identifiable Information: As noted above, we may
            collect information that is not Personally Identifiable Information
            (“Non-Personally Identifiable Information”). We may aggregate or
            de-identify Personally Identifiable Information so that the
            information does not personally identify you or anyone else, such as
            by using Personally Identifiable Information to calculate the
            percentage of our customers who live in a particular area. Because
            Non-Personally Identifiable Information, including aggregate or
            de-identified information, does not personally identify you, we may
            collect, use and disclose Non-Personally Identifiable Information
            for any purpose permitted by law and subject to the section titled
            “California Consumer Notice”. In some instances, we may combine
            Non-Personally Identifiable Information with Personally Identifiable
            Information. If we combine any Non-Personally Identifiable
            Information with Personally Identifiable Information, the combined
            information will be treated by us as Personally Identifiable
            Information. How We Share Your Information Besides using your
            Personally Identifiable Information ourselves, we may send your
            Personally Identifiable Information and other information to other
            companies, affiliates and third parties in the following instances:
            Event Advertisers. We may collect your Personally Identifiable
            Information at experiential and other offline events that we
            administer or participate in on behalf of Event Advertisers. In
            those instances, we will share such information with the Event
            Advertisers to provide them with our Services. Service Providers. We
            may share your Personally Identifiable Information with third
            parties who may use your information to provide us services such as
            website hosting, data analysis, infrastructure provision,
            information technology services, customer service, e-mail delivery
            services, auditing, and anti-fraud monitoring. These third parties
            may have access to Personally Identifiable Information that is
            necessary to perform their functions. Legal Compliance and to Defend
            Our Rights. We may disclose Personally Identifiable Information and
            other information as we believe necessary or appropriate: (a) under
            applicable law, including laws outside your country of residence;
            (b) to comply with legal process; (c) to respond to requests from
            public and government authorities including public and government
            authorities outside your country of residence; (d) to enforce our
            terms and conditions; (e) to protect our operations or those of any
            of our affiliates; (f) to protect our rights, privacy, safety or
            property, and/or that of our affiliates, you or others; and (g) to
            allow us to pursue available remedies or limit the damages that we
            may sustain. Business Transfers. We may share your Personally
            Identifiable Information and other information with third parties in
            connection with a corporate restructuring, acquisition or
            divestiture. Aggregated or Non-Personally Identifiable Information.
            We may share aggregated information or Non-Personally Identifiable
            Information with unaffiliated third parties, such as business
            partners, manufacturers, distributors and retailers, in a form in
            which means the shared information will not contain nor be linked to
            any Personally Identifiable Information, to improve and enhance your
            experience using the Website and Services and for our market
            research activities. Please note that if you specifically consent to
            additional uses of your Personally Identifiable Information, we may
            use your Personally Identifiable Information in a manner consistent
            with that consent. Interest-Based Advertising We may ourselves, or
            with third party vendors, use information we collect or vendor
            information to deliver targeted advertising to you when you visit
            other websites or use our Website or Services. Cookies, clickstream
            data, and other similar technologies described above may be used in
            this process. For example, if you are searching for information on a
            particular product, we or our vendor may cause an advertisement to
            appear on other websites you view with information on that product.
            This form of advertising, sometimes called “behavioral advertising,”
            which enables us and our vendors to know your interests in
            connection with the delivery of that specific ad. We believe that
            such advertising is helpful because you will see advertisements that
            are relevant to your interests. However, if you would like to opt
            out of these interest-based advertisements, please follow the
            opt-out process described below under “Opt-Out.” Interactive Tools
            on our Website and Services Certain features on our Website or
            Services may give you an opportunity to interact with us and others.
            These may include review boards, blogs, message boards, messaging
            functionality, chat functionality, and creating community profiles.
            When you use these features you should be aware that any information
            you submit, including your name and e-mail address, may be publicly
            available to others. We are not responsible for any information you
            choose to submit through these interactive features and we strongly
            discourage you from disclosing any sensitive personal information
            (such as health or financial information) through these features. If
            you use these features, your personal information may remain on the
            Website or Services even after you cease use of the Website or
            Services. Security The security of your information is very
            important to us. We attempt to provide for the secure transmission
            of your information from your computer to our servers by utilizing
            encryption software. However, due to the inherent open nature of the
            Internet, we cannot guarantee that communications between you and
            Giant Spoon, or information stored on the Website, our Services or
            our servers, will be free from unauthorized access by third parties
            such as hackers and your use of the Website or Services demonstrates
            your assumption of this risk. We have put in place reasonable
            physical, electronic, and managerial procedures to safeguard the
            information we collect. Only those employees who need access to your
            information in order to perform their duties are authorized to have
            access to your Personally Identifiable Information. If you have
            reason to believe that your interaction with us is no longer secure
            (for example, if you feel that the security of any account you might
            have with us has been compromised), please immediately notify us of
            the problem by contacting us in accordance with the Contact section
            below. Data Retention We will retain your information for as long as
            your account or inquiry is active or as needed to provide you with
            the Website or Services and for a reasonable time thereafter in
            accordance with our standard procedures or as necessary to comply
            with our legal obligations, to resolve disputes, and to enforce our
            agreements. Even if we delete some or all of your information, we
            may continue to retain and use anonymous or aggregated data
            previously collected. Please note that we will not be liable for
            disclosures of your data due to errors or unauthorized acts of third
            parties. Protection for Children Our Website and Services are
            intended for ages 18 and over. We do not knowingly collect
            Personally Identifiable Information from minors. When we become
            aware that Personally Identifiable Information (or other information
            that is protected under applicable law) from a child under 13 (or
            such other age as may be restricted under local law) has been
            collected, we will use all reasonable efforts to delete such
            information from our database. If you believe we might have any
            Personally Identifiable Information from or about a child under 13,
            please contact us at privacy@giantspoon.com. Other Websites and
            Social Networking Services As a convenience to you, we may provide
            links to third party websites, apps or services from within the
            Website or Services. We are not responsible for the privacy
            practices or content of these third party sites, and by providing a
            link we are not endorsing or promoting such third party sites. When
            you navigate away from our Website or Services, you do so at your
            own risk. We encourage you to read the policies and terms of every
            website, app or service you visit. The Website or Services may
            integrate with social networking services. We do not control such
            services and are not liable for the manner in which they operate.
            While we may provide you with the ability to use such services in
            connection with our Website or Services, we are doing so merely as
            an accommodation and, like you, are relying upon those third party
            services to operate properly and fairly. You should be aware that
            Personally Identifiable Information which you voluntarily include
            and transmit online in a publicly accessible blog, social network or
            otherwise online may be viewed and used by others. We are unable to
            control such uses of your Personally Identifiable Information, and
            by using such services you assume the risk that the information
            provided by you may be viewed and used by third parties. Opt-Out To
            opt-out of any future promotional messages from us, you should send
            an unsubscribe request to us at privacy@giantspoon.com. We will
            process your request within a reasonable time after receipt. Please
            note that if you opt out in this manner, certain aspects of the
            Website or Services may no longer be available to you. The online
            advertising industry provides a service through which you may
            opt-out of receiving targeted ads from certain data partners and
            other advertising partners that participate in self-regulatory
            programs. You can opt-out of targeted advertising from certain
            providers that participate in the Digital Advertising Alliance (DAA)
            program at www.aboutads.info/consumers. Other providers are members
            of the Network Advertising Initiative, and you can opt-out of
            interest-based advertising by those members by visiting
            http://optout.networkadvertising.org/. Please note that by opting
            out, you will continue to see generic advertising that is not
            tailored to your specific interests and activities. To be clear,
            cookie-based opt-outs must be performed on each device and browser
            that you wish to have opted-out. For example, if you have opted out
            on your device browser, that opt-out will not be effective on your
            mobile device. You must separately opt out on each device.
          </p>
          <p>
            For targeted advertisements delivered through mobile apps, you can
            install the DAA’s AppChoices app on your device to opt-out of
            targeted advertising by certain providers and can also select a
            system level advertising preference feature on your device (such as
            “Limit Ad Tracking” on Apple devices or “Opt-out of Interest-based
            ads” on Android devices).
          </p>
          <p>
            If you want to stop or restrict the placement of cookies or flush
            any cookies that may already be on your computer or device, please
            refer to and adjust your web browser preferences. Further
            information on cookies is available at www.allaboutcookies.org. By
            deleting our cookies or disabling future cookies you may not be able
            to access certain areas or features of our Website or some of its
            functionality may be affected. Please note that, unless required by
            law, we do not respond to or honor “do not track” (a/k/a/ DNT)
            signals or similar mechanisms transmitted by web browsers. Changes
            to policy: We reserve the right, at our discretion, to change,
            modify, add, or remove portions from this policy at any time,
            provided that any such modifications will only be applied
            prospectively. Your continued use of the Website or Services
            following the posting of any changes to this policy means you accept
            such changes. Contact: For questions or concerns relating to
            privacy, we can be contacted at: privacy@giantspoon.com. Site
            Maintenance: Our Website is maintained in the United States of
            America. If you are located outside the U.S., by using the Website,
            you authorize the export of your information to the USA and its
            storage and use as specified in this policy. California Consumer
            Notice: We collect information (some of which may also constitute
            Personally Identifiable Information) that identifies, relates to,
            describes, references, or is reasonably capable of being associated
            with, or could reasonably be linked, directly or indirectly, with a
            particular consumer or household. The California Consumer Privacy
            Act of 2018 (“CCPA”) refers to such information as “personal
            information.” If you are a California consumer, the CCPA provides
            you with specific rights regarding your personal information. This
            section describes the rights that California consumers have and
            explains how to exercise those rights. For the purposes of this
            section, personal information does not include (i) information that
            is lawfully made available from federal, state or local government
            records, (ii) de-identified or aggregated data or (iii) information
            excluded from the scope of the CCPA. To be clear the rights in this
            section are not intended to grant you additional rights, but just
            your rights under CCPA. Information We Collect; How We Collect It;
            How We Use It Information about our data collection during the prior
            12 months is described below. California consumers may access,
            delete and control certain uses of their information as set forth in
            Rights to Your Information. As described above in Information
            Collected at Events, personal information that is collected by or on
            behalf of Event Advertisers at offline events is not subject to this
            Privacy Policy if an Event Advertiser’s or event-specific privacy
            policy is presented to you. We also may collect information on
            behalf of our clients (“Clients”) to provide them with our online
            advertising services and in such cases, the Client’s privacy policy,
            not this Privacy Policy, will apply. Please consult the Event
            Advertiser’s privacy policy, the event-specific privacy policy or
            the Client’s privacy policy as applicable, for information on your
            rights over personal information collected at certain offline events
            or in relation to our Client’s online advertising.
          </p>
          <Image src={PrivacyChart} alt="chart" />
          <p>
            In addition to the purposes set forth above, each of these
            categories of personal information may be collected and used: To
            fulfill or meet the reason you provided the information. To respond
            to law enforcement requests and as required by applicable law, court
            order, or governmental regulations. To carry out our obligations and
            enforce our rights arising from any contracts entered into between
            you and us (including our Terms of Use ), including for billing and
            fulfillment. As described to you when collecting your personal
            information or as otherwise set forth in the CCPA. To help maintain
            the safety, security, and integrity of our Website, Services,
            databases and other technology assets, and business. For internal
            research for technological development and demonstration and to
            improve, upgrade or enhance our Website and Services. For detecting
            security incidents, protecting against malicious, deceptive,
            fraudulent, or illegal activity, and prosecuting those responsible
            for that activity. In emergency situations to protect the personal
            safety of us, our users, or the public. To evaluate or conduct a
            merger, divestiture, restructuring, reorganization, dissolution, or
            other sale or transfer of some or all of Giant Spoon’s assets,
            whether as a going concern or as part of bankruptcy, liquidation, or
            similar proceeding, in which personal information held by Giant
            Spoon about our Website and Service users is among the assets
            transferred.
          </p>
          <p>
            Sharing of Personal Information Giant Spoon may disclose your
            personal information to a third party for a business purpose.
          </p>
          <p>
            The chart found above under Information We Collect; How We Collect
            It; How We Use It lists the categories of third parties with which
            we may share your personal information. The CCPA defines a “sale” as
            selling, renting, releasing, disclosing, disseminating, making
            available, transferring, or otherwise communicating orally, in
            writing, or by electronic or other means, a consumer’s personal
            information by the business to another business or a third party for
            monetary or other valuable consideration. We do not believe that we
            share your personal information in a manner that constitutes a sale.
            However to learn more about California consumers’ right to opt-out
            of sales under CCPA, please see Personal Information Sales Opt-Out
            and Opt-In Rights. In the preceding twelve (12) months, Giant Spoon
            has disclosed the following categories of personal information for a
            business purpose: · Personal identifiers. · Personal information
            covered by the California Customer Records statute (Cal. Civ. Code §
            1798.80(e)). · Commercial information. · Internet or other similar
            network activity. · Location data. · Sensory data. · Professional or
            employment-related information. · Inferences drawn from other
            personal information.
          </p>
          <p>
            See above under Information We Collect; How We Collect It; How We
            Use It for more information regarding each category. Rights to Your
            Information Right to Know About Personal Information Collected,
            Disclosed or Sold
          </p>
          <p>
            As a California consumer, you have the right to request that we
            disclose certain information to you about our collection, use,
            disclosure or sale of your personal information over the past 12
            months. Once we receive and confirm your verifiable consumer request
            (see Exercising Access and Deletion Rights), and subject to certain
            limitations that we describe below, we will disclose such
            information. You have the right to request any or all of the
            following: · The categories of personal information we collected
            about you. · The categories of sources from which the personal
            information is collected. · Our business or commercial purpose for
            collecting or selling that personal information. · The categories of
            third parties with whom we share that personal information. · The
            specific pieces of personal information we collected about you (also
            called a data portability request).
          </p>
          <p>Deletion Request Rights</p>
          <p>
            You have the right to request that we delete any of your personal
            information that we collected from you and retained, subject to
            certain exceptions. Once we receive and confirm your verifiable
            consumer request (see Exercising Access, Data Portability, and
            Deletion Rights), we will delete (and direct our service providers
            to delete) your personal information from our records, unless an
            exception applies. However, we maybe retain personal information
            that has been de-identified or aggregated. Furthermore, we may deny
            your deletion request if retaining the information is necessary for
            us or our service provider(s) in order to perform certain actions
            set forth under CCPA, such as detecting security incidents and
            protecting against fraudulent or illegal activity.
          </p>
          <p>
            Exercising Access and Deletion Rights To exercise the access and
            deletion rights described above, please submit a request to us by
            contacting us at (888) SPOON-50 or by emailing
            privacy@giantspoon.com. Only you, or a person or business entity
            registered with the California Secretary of State that you authorize
            to act on your behalf (an “authorized agent”), may make the requests
            set forth above. The request should include your contact information
            and describe your request with sufficient detail that allows us to
            properly understand, evaluate, and respond to it. In addition, you
            should provide sufficient information that allows us to reasonably
            verify that you are the person about whom we collected the personal
            information or an authorized representative of that person. For more
            information about verification, see Response Timing and Format
            immediately below. Response Timing and Format
          </p>
          <p>
            We will respond to consumer requests in a reasonably timely manner.
            If we require extra time to respond, we will inform you of the
            reason and extension period in writing. In order to protect the
            security of your personal information, we will not honor a request
            if we cannot verify your identity or authority to make the request
            and confirm the personal information relates to you. The method used
            to verify your identity will depend on the type, sensitivity and
            value of the information, including the risk of harm to you posed by
            any authorized access or deletion. Generally speaking, verification
            will be performed by matching the identifying information provided
            by you to the personal information that we already have.
          </p>
          <p>
            Any disclosures we provide will only cover the 12-month period
            preceding our receipt of your request (and will not be made more
            than twice in a 12-month period). If we cannot comply with a
            request, or cannot fully comply with a request, the response we
            provide will also explain the reasons we cannot comply. Personal
            Information Sales Opt-Out and Opt-In Rights The CCPA provides
            California consumers the right to direct businesses to not sell
            their personal information at any time (the "right to opt-out"). We
            do not sell your personal information, as we understand those terms
            to be defined under CCPA. However, to the extent that you believe we
            are selling your personal information, you may exercise the right to
            opt-out, by submitting a request to us (or by having your authorized
            representative submit a request) through the following Internet Web
            page:{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfiAnmu_PAQ69nTP1osrL9jIQm0BOdzjd1yuxQO3bn6pAG2fA/viewform?usp=sf_link"
              target="_blank"
            >
              Do Not Sell My Personal Information{" "}
            </a>{" "}
            Alternatively, you may submit an opt-out request by emailing
            privacy@giantspoon.com. Non-Discrimination We will not discriminate
            against you for exercising any of your CCPA rights, including, but
            not limited to, by: Denying you goods or services. Charging you
            different prices or rates for goods or services, including through
            granting discounts or other benefits, or imposing penalties.
            Providing you a different level or quality of goods or services.
            Suggesting that you may receive a different price or rate for goods
            or services or a different level or quality of goods or services.
          </p>
          <p>
            California “Shine the Light” Under California Civil Code Section
            1798.83 (“Shine the Light”), California residents have the right to
            request in writing from businesses with whom they have an
            established business relationship, (a) a list of the categories of
            personal information, as defined under Shine the Light, such as
            name, email address and mailing address and the type of services
            provided to the customer that a business has disclosed to third
            parties (including affiliates that are separate legal entities)
            during the immediately preceding calendar year for the third
            parties’ direct marketing purposes and (b) the names and addresses
            of all such third parties. To request the above information, please
            contact us by email at privacy@giantspoon.com. If you do not want
            your personal information shared with any third party who may use
            such information for direct marketing purposes, then you may opt out
            of such disclosures by sending an email to us at
            privacy@giantspoon.com.
          </p>
        </Group>
      </Group>
      <Footer handleLinkChange={props.handleLinkChange} />
    </Wrapper>
  );
};

export default Privacy;
