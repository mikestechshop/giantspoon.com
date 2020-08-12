// @flow

import React, { useEffect } from "react";
import TermsImg from "../static/terms.png";
import { Wrapper, Group, Image } from "../components";

const Terms = () => {
  useEffect(() => {
    if (document.querySelector("#section-tab")) {
      // $FlowFixMe
      document.querySelector("#section-tab").innerHTML = "Terms";
    }
  });
  return (
    <Wrapper>
      <Group bgc="#0C2340" flexDirection="column">
        <Group bgc="#0C2340" width="80vw" mt="100px">
          Giant Spoon Terms of Use Last Updated and Effective as of: January 1,
          2020
          <p>
            Welcome to https://www.giantspoon.com/ (the “Website”). This Website
            is maintained and operated by Giant Spoon LLC (“Company”, “we”,
            “our” or “us”). YOUR ACCESS AND USE OF THE WEBSITE IS SUBJECT TO THE
            FOLLOWING TERMS OF USE (THE "TERMS OF USE") AND ALL APPLICABLE LAWS.
            BY ACCESSING OR USING ANY PART OF THE WEBSITE, YOU ACCEPT, WITHOUT
            LIMITATION OR QUALIFICATION, THESE TERMS OF USE. IF YOU DO NOT AGREE
            WITH ALL OF THE TERMS SET FORTH BELOW, YOU MAY NOT USE ANY PORTION
            OF THE WEBSITE.
          </p>
          <p>
            THESE TERMS OF USE CONTAIN AN ARBITRATION AGREEMENT AND CLASS ACTION
            WAIVER. PLEASE READ THEM CAREFULLY, SINCE THEY AFFECT YOUR LEGAL
            RIGHTS.
          </p>
          <p>
            Accessibility: If you are having any trouble accessing these Terms
            of Use or the Website, please contact us at (888) SPOON-50.
          </p>
          <p>
            Authorized Use of Website: This Website is provided for your
            personal and non-commercial use and for informational purposes only.
            Any other use of the Website requires the prior written consent of
            Company. By using the Website, you further represent and warrant
            that you (i) are located inside the U.S., or (ii) are located
            outside the EEA and agree to be bound by U.S. laws. This Website is
            intended for users situated in the United States and Canada only.
          </p>
          <p>
            Unauthorized Use of Website: You may not use spiders, robots, data
            mining techniques or other automated devices or programs to catalog,
            download or otherwise reproduce, store or distribute content
            available on the Website. Further, you may not use any such
            automated means to manipulate the Website, such as automating what
            are otherwise manual or one-off procedures. You may not take any
            action to interfere with, or disrupt, the Website or any other
            user's use of the Website, including, without limitation, via means
            of overloading, “flooding”, “mailbombing” or “crashing” the Website,
            circumventing security or user authentication measures or attempting
            to exceed the limited authorization and access granted to you under
            these Terms of Use. You may not frame portions of the Website within
            another Website. You may not resell use of, or access to, the
            Website to any third party without our prior written consent.
          </p>
          <p>
            Proprietary Rights: Company is the owner of or otherwise licensed to
            use all parts of the Website, including all copy, software,
            graphics, designs and all copyrights, trademarks, service marks,
            trade names, logos, and other intellectual property or proprietary
            rights contained therein. Some materials on the Website belong to
            third parties who have authorized Company to display the materials,
            such as certain third party licensors. By using the Service, you
            agree not to copy, distribute, modify or make derivative works of
            any materials without the prior written consent of the owner of such
            materials. Except as expressly set forth in these Terms of Use, no
            license is granted to you and no rights are conveyed by virtue of
            accessing or using the Website. All rights not granted under these
            Terms of Use are reserved by Company.
          </p>
          <p>
            No Ideas Accepted: We do not accept any unsolicited ideas to this
            Website from outside the company including without limitation
            suggestions about advertising or promotions, or merchandising of any
            products, additions to our services, or changes in methods of doing
            business. We may already be working on or may in the future work on
            a similar idea. This policy eliminates concerns about ownership of
            such ideas. If, notwithstanding this policy, you submit an
            unsolicited idea to this Website, you understand and acknowledge
            that such idea is not submitted in confidence and we assume no
            obligation, expressed or implied, by considering it. You further
            understand that we shall exclusively own all known or hereafter
            existing rights to the idea everywhere in the world, and that such
            idea is hereby irrevocably assigned to us. Without limiting the
            foregoing, to the extent any such assignment is deemed
            unenforceable, and or to the extent necessary for Company to utilize
            your submission, you hereby grant Company an irrevocable, perpetual,
            world-wide license to use the idea and any associated intellectual
            property in any manner, in any medium now known or hereafter
            developed, without compensation to you. Comments or Materials Posted
            by You. Certain pages on the Website may allow you (and other third
            parties) to post text comments (“Content”). You may only post
            Content that you created or which the owner of the Content has given
            you permission to post. If Content depicts any person other than
            yourself, you must have permission from that person or, if that
            person is a minor, permission from that person’s parent or legal
            guardian, before you post the Content. You may be required to
            provide proof of such permission to Company. You may not post or
            distribute Content that is illegal or that violates these Terms of
            Use. By posting or distributing Content to the Website, you
            represent and warrant that (a) you own all the rights to the Content
            or are authorized to use and distribute the Content to the Website
            and (b) the Content does not and will not infringe any copyright,
            right of publicity, or any other third-party right nor violate any
            law or regulation. Materials Posted by Others: Under no
            circumstances will Company be liable in any way for any content or
            materials posted by any third parties, including, but not limited
            to, for any errors or omissions in any content, or for any loss or
            damage of any kind incurred as a result of the use of any such
            content. You acknowledge that Company does not pre-screen content,
            but that Company and its designees will have the right (but not the
            obligation) in their sole discretion to refuse or remove any content
            that is available via the Website. Without limiting the foregoing,
            Company and its designees will have the right to remove any Content
            that violates these Terms of Use or is deemed by Company, in its
            sole discretion, to be otherwise objectionable.
          </p>
          <p>
            We do not endorse, support, represent or guarantee the completeness,
            truthfulness, accuracy, or reliability of any Content or
            communications posted on the Website or endorse any opinions
            expressed therein. You understand that by using the Website, you may
            be exposed to Content that might be offensive, harmful, inaccurate
            or otherwise in appropriate, or in some cases, postings that have
            been mislabeled or are otherwise deceptive.
          </p>
          <p>
            Third Party Links: This Website may contain links to other Websites
            not maintained by us. Other Websites may also reference or link to
            our Website. We encourage you to be aware when you leave our Website
            and to read the terms of use and privacy statements of each and
            every Website that you visit. We are not responsible for the
            practices or the content of such other Websites.
          </p>
          <p>
            No Warranties: WHILE COMPANY USES REASONABLE EFFORTS TO INCLUDE
            UP-TO-DATE INFORMATION ON THE WEBSITE, EXCEPT FOR THE EXPRESS
            WARRANTIES STATED ON OUR WEBSITE, COMPANY MAKES NO WARRANTIES OR
            REPRESENTATIONS AS TO THE ACCURACY OR COMPLETENESS OF INFORMATION ON
            THE WEBSITE. TO THE FULLEST EXTENT PERMITTED BY LAW, YOUR USE OF THE
            WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, INCLUDING ALL CONTENT MADE
            AVAILABLE ON OR ACCESSED THROUGH THE WEBSITE, IS PROVIDED "AS IS"
            AND COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND
            WHATSOEVER FOR THE CONTENT ON THE WEBSITE. FURTHER, TO THE FULLEST
            EXTENT PERMISSIBLE BY LAW, COMPANY DISCLAIMS ANY EXPRESS OR IMPLIED
            WARRANTIES, INCLUDING, WITHOUT LIMITATION, NON-INFRINGEMENT, TITLE,
            MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. COMPANY DOES
            NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE WEBSITE OR ANY
            MATERIALS OR CONTENT CONTAINED THEREIN WILL BE UNINTERRUPTED OR
            ERROR FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE OR
            THE SERVER THAT MAKES IT AVAILABLE IS FREE OF VIRUSES OR OTHER
            HARMFUL COMPONENTS. TO THE FULLEST EXTENT PERMITTED BY LAW, COMPANY
            SHALL NOT BE LIABLE FOR THE USE OF THE WEBSITE, INCLUDING, WITHOUT
            LIMITATION, THE CONTENT AND ANY ERRORS CONTAINED THEREIN.
          </p>
          <p>
            IN NO EVENT WILL COMPANY BE LIABLE UNDER ANY THEORY OF TORT,
            CONTRACT, STRICT LIABILITY OR OTHER LEGAL OR EQUITABLE THEORY FOR
            ANY LOST PROFITS, LOST DATA, LOST OPPORTUNITIES, COSTS OF COVER,
            EXEMPLARY, PUNITIVE, PERSONAL INJURY/WRONGFUL DEATH, SPECIAL,
            INCIDENTAL, INDIRECT OR OTHER CONSEQUENTIAL DAMAGES. FURTHER, TO THE
            FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL COMPANY BE LIABLE
            FOR ANY DIRECT DAMAGES EXCEEDING THE GREATER OF THE FEES YOU PAID TO
            COMPANY FOR PRODUCTS AND SERVICES IN THE TWELVE MONTHS PRECEEDING
            THE CLAIM OR ONE HUNDRED UNITED STATES DOLLARS.
          </p>
          <p>
            Changes: All information posted on the Website is subject to change
            at any time. In addition, these Terms of Use may be changed at any
            time; provided, any material modifications will only be applied
            prospectively. We will make such changes by posting them on the
            Website. You should check the Website for such changes frequently.
            Your continued access of the Website after such changes demonstrates
            your acceptance of those changes.
          </p>
          <p>
            Indemnification: You agree to indemnify, defend and hold harmless
            Company, its employees, directors, officers, agents, business
            partners, affiliates, contractors, distribution partners and
            representatives from and against any and all claims, demands,
            liabilities, costs or expenses, including attorney’s fees and costs,
            arising from, or related to (i) your use of the Website, (ii) any
            breach by you of any of these Terms of Use or (iii) any violation of
            applicable law.
          </p>
          <p>
            Severability: If any part of these Terms of Use shall be held or
            declared to be invalid or unenforceable for any reason by any court
            of competent jurisdiction, such provision shall be ineffective but
            shall not affect any other part of these Terms of Use, and in such
            event, such provision shall be changed and interpreted so as to best
            accomplish the objectives of such unenforceable or invalid provision
            within the limits of applicable law or applicable court decisions.
          </p>
          <p>
            Waiver; Remedies: The failure of Company to partially or fully
            exercise any rights or the waiver of Company of any breach of these
            Terms of Use by you shall not prevent a subsequent exercise of such
            right by Company or be deemed a waiver by Company of any subsequent
            breach by you of the same or any other term of these Terms of Use.
            The rights and remedies of Company under these Terms of Use and any
            other applicable agreement between you and Company shall be
            cumulative, and the exercise of any such right or remedy shall not
            limit Company's right to exercise any other right or remedy.
          </p>
          <p>
            Governing Law; Dispute Resolution; Arbitration: The laws of the
            State of New York shall govern these Terms of Use. While we will
            make reasonable efforts to resolve any disagreements you may have
            with Company, if these efforts fail you agree that all claims,
            disputes or controversies against Company arising out of these Terms
            of Use, or the purchase of any products or services ("Claims") shall
            be exclusively submitted to binding arbitration (except for matters
            that may be taken to small claims court), no matter what legal
            theory they are based on or what remedy (damages, or injunctive or
            declaratory relief) they seek. This includes Claims based on
            contract, tort (including intentional tort), fraud, agency, your or
            our negligence, statutory or regulatory provisions, or any other
            sources of law; Claims made as counterclaims, cross-claims, third-
            party claims, interpleaders or otherwise; and Claims made
            independently or with other claims. The party filing arbitration
            must submit Claims to the American Arbitration Association and
            follow its rules and procedures for initiating and pursuing
            arbitration. Any arbitration hearing that you attend will be held at
            a place chosen by the American Arbitration Association in the same
            city as the U.S. District Court closest to your then current
            residential address, or at some other place to which you and Company
            agree in writing, and the arbitrator shall apply New York law
            consistent with the Federal Arbitration Act. YOU SHALL NOT BE
            ENTITLED TO JOIN OR CONSOLIDATE CLAIMS IN ARBITRATION BY OR AGAINST
            OTHER USERS OR TO ARBITRATE ANY CLAIM AS A REPRESENTATIVE OR MEMBER
            OF A CLASS OR IN A PRIVATE ATTORNEY GENERAL CAPACITY. You may obtain
            copies of the current rules, and forms and instructions for
            initiating arbitration by contacting the American Arbitration
            Association at using the contact information noted below.
          </p>
          <p>American Arbitration Association Website: www.adr.org</p>
          <p>
            A single, neutral arbitrator will resolve Claims. The arbitrator
            will be either a lawyer with at least ten (10) years’ experience or
            a retired or former judge, selected in accordance with the rules of
            the American Arbitration Association. The arbitration will follow
            the procedures and rules of the American Arbitration Association
            which are in effect on the date the arbitration is filed unless
            those procedures and rules are inconsistent with these Terms of Use,
            in which case these Terms of Use will prevail. Those procedures and
            rules may limit the discovery available to you or us. The arbitrator
            will take reasonable steps to protect your customer account
            information and other confidential information if requested to do so
            by you or us. Each party to the arbitration will bear the expense of
            that party's attorneys, experts, and witnesses, and other expenses,
            regardless of which party prevails, but a party may recover any or
            all expenses from another party if the arbitrator, applying
            applicable law, so determines. The arbitrator's award is final and
            binding on the parties.
          </p>
          <p>
            ANY CLAIM YOU HAVE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE
            DATE THE CLAIM ARISES. AS NOTED ABOVE, YOU AND COMPANY HEREBY
            VOLUNTARILY AND KNOWINGLY WAIVE ANY RIGHT EITHER MAY HAVE TO A JURY
            TRIAL.
          </p>
          <p>
            We will not choose to arbitrate any Claim you bring in small claims
            court. However, if such a Claim is determined by the court to be
            outside its jurisdiction, the parties agree that the dispute shall
            then be submitted to arbitration.
          </p>
          <p>
            Privacy Policy: Use of the Website is also governed by our Privacy
            Policy, which is incorporate herein by reference.
          </p>
          <p>
            Questions: Should you have any questions regarding these Terms of
            Use you may contact us at privacy@giantspoon.com.
          </p>
        </Group>
      </Group>
    </Wrapper>
  );
};

export default Terms;
