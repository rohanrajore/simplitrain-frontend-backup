import React, { useEffect } from "react";
import ListPanel from "../listPanel.jsx";
import "../pages.css";


const TermsOfUse = (props) => {
  useEffect(() => window.scroll({ top: 0, behavior: "smooth" }), [1]);

  return (
    <div className="policy-container">
      <ListPanel />
        <div className="policy-content">
            <h1 className="title">Terms of Use</h1>
            <p className="text"><b>These Terms of Use</b> &quot;Terms&quot; were last updated on Nov 20, 2021. </p>
            <p className="text">Simplitrain&rsquo;s mission is to improve lives through learning. We enable anyone anywhere to create and share educational content (instructors) and to access that educational content to learn (students). We consider our marketplace model the best way to offer valuable educational content to our users. We need rules to keep our platform and services safe for you, us, and our student and instructor community. These Terms apply to all your activities on the Simplitrain website, the Simplitrain mobile applications and other related services.
            </p>
            <p className="text">
              If you publish a course on the Simplitrain platform, you must also agree to the Instructor Terms. We also provide details regarding our processing of personal data of our students and instructors in our Privacy Policy.
            </p>
            <h2 className="title">Table of Contents</h2>
            <ul>
                <li>
                    <p className="text"><a href="#Accounts">1. Accounts</a></p>
                </li>
                <li>
                    <p className="text">
                        <a href="#LifetimeAccess">
                            2. Content Enrollment and Lifetime Access
                        </a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#CreditsAndRefunds">3. Payments, Credits, and Refunds</a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#BehaviorRules">4. Content and Behavior Rules</a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#ContentYouPost">
                            5. Simplitrain&rsquo;s Rights to Content You Post
                        </a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#YourOwnRisk">
                            6. Using Simplitrain at Your Own Risk
                        </a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#SimplitrainRights">7. Simplitrain&rsquo;s Rights</a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#SubscriptionTerms">8. Subscription Terms</a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#MiscellaneousLegalTerms">9. Miscellaneous Legal Terms</a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#DisputeResolution">10. Dispute Resolution</a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#UpdatingTheseTerms">11. Updating These Terms</a>
                    </p>
                </li>
                <li>
                    <p className="text">
                        <a href="#HowToContactUs">12. How to Contact Us</a>
                    </p>
                </li>
            </ul>
            <h2 id="Accounts" className="sub-title">1. Accounts</h2>
            <p className="text">
              You need an account for most activities on our platform however we allow learners to buy and enroll for a course without creating a Simplitrain account for ease of operation. Keep your password somewhere safe, because
              you&rsquo;re responsible for all activity associated with your account. If you suspect someone else is using your account, let us know by contacting our Support Team. You must have reached the age of consent for online
              services in your country to use Simplitrain.
            </p>
            <p className="text">
              You need an account for most activities on our platform, including to purchase and access content or to submit content for publication. When setting up and maintaining your account, you must provide and continue to provide
              accurate and complete information, including a valid email address. You have complete responsibility for your account and everything that happens on your account, including for any harm or damage (to us or anyone else)
              caused by someone using your account without your permission. This means you need to be careful with your password. You may not transfer your account to someone else or use someone else&rsquo;s account. If you contact us to
              request access to an account, we will not grant you such access unless you can provide us with the information that we need to prove you are the owner of that account. In the event of the death of a user, the account of that
              user will be closed.
            </p>
            <p className="text">
              You may not share your account login credentials with anyone else. You are responsible for what happens with your account and Simplitrain will not intervene in disputes between students or instructors who have shared account
              login credentials. You must notify us immediately upon learning that someone else may be using your account without your permission (or if you suspect any other breach of security) by contacting our Support Team. We may
              request some information from you to confirm that you are indeed the owner of your account.
            </p>
            <p className="text">
              Students and instructors must be at least 18 years of age to create an account on Simplitrain and use the Services. If you are younger than 18 but above the required age for consent to use online services where you live (for
              example, 13 in the US or 16 in Ireland), you may not set up an account, but we encourage you to invite a parent or guardian to open an account and help you access content that is appropriate for you. If you are below this
              age of consent to use online services, you may not create a Simplitrain account. If we discover that you have created an account that violates these rules, we will terminate your account. Under our Instructor Terms, you may
              be requested to verify your identity before you are authorized to submit content for publication on Simplitrain.
            </p>
            <p className="text">You can terminate your account at any time by following the steps here. Check our Privacy Policy to see what happens when you terminate your account.</p>
            <h2 id="LifetimeAccess" className="sub-title">2. Content Enrollment</h2>
            <p className="text">
              When you enroll in a course or other content, you get a license from us to view it via the Simplitrain Services and no other use. Don&rsquo;t try to transfer or resell content in any way. We generally grant you a lifetime
              access license, except when we must disable the content because of legal or policy reasons or for enrollments via Subscription Plans.
            </p>
            <p className="text">
              Under our Instructor Terms, when instructors publish content on Simplitrain, they grant Simplitrain a license to offer a license to the content to students. This means that we have the right to sublicense the content to
              enrolled students. As a student, when you enroll in a course or other content, whether it&rsquo;s free or paid content, you are getting a license from Simplitrain to view the content via the Simplitrain platform and
              Services, and Simplitrain is the licensor of record. Content is licensed, and not sold, to you. This license does not give you any right to resell the content in any manner (including by sharing account information with a
              purchaser or illegally downloading the content and sharing it on torrent sites).
            </p>
            <p className="text">
              In legal, more complete terms, Simplitrain grants you (as a student) a limited, non-exclusive, non-transferable license to access and view the content for which you have paid all required fees, solely for your personal,
              non-commercial, educational purposes through the Services, in accordance with these Terms and any conditions or restrictions associated with the particular content or feature of our Services. All other uses are expressly
              prohibited. You may not reproduce, redistribute, transmit, assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, sublicense, or otherwise transfer or use any content unless we give you
              explicit permission to do so in a written agreement signed by a Simplitrain authorized representative. This also applies to content you can access via any of our APIs.
            </p>
            <p className="text">
              We generally give a lifetime access license to our students when they enroll in a course or other content. However, we reserve the right to revoke any license to access and use any content at any point in time in the event
              where we decide or are obligated to disable access to the content due to legal or policy reasons, for example, if the course or other content you enrolled in is the object of a copyright complaint, or if we determine it
              violates our Trust &amp; Safety Guidelines. This lifetime access license does not apply to enrollments via Subscription Plans or to add-on features and services associated with the course or other content you enroll in. For
              example, instructors may decide at any time to no longer provide teaching assistance or Q&amp;A services in association with the content. To be clear, the lifetime access is to the course content but not to the instructor.
            </p>
            <p className="text">Instructors may not grant licenses to their content to students directly, and any such direct license shall be null and void and a violation of these Terms.</p>
            <h2 id="CreditsAndRefunds" className="sub-title">3. Payments, Credits, and Refunds</h2>
            <p className="text">When you make a payment, you agree to use a valid payment method.</p>
            <p className="sub-title1">3.1 Pricing</p>
            <p className="text">The prices of content on Simplitrain are determined based on the terms of the Instructor Terms and our Promotions Policy.</p>
            <p className="text">
              We occasionally run promotions and sales for our content, during which certain content is available at discounted prices for a set period of time. The price applicable to the content will be the price at the time you
              complete your purchase of the content (at checkout). Any price offered for particular content may also be different when you are logged into your account from the price available to users who aren&rsquo;t registered or
              logged in, because some of our promotions are available only to new users.
            </p>
            <p className="text">
              If you are logged into your account, the listed currency you see is based on your location when you created your account. If you are not logged into your account, the price currency is based on the country where you are
              located. We do not enable users to see pricing in other currencies.
            </p>
            <p className="text">
              If you are a student located in a country where use and sales tax, goods and services tax, or value added tax is applicable to consumer sales, we are responsible for collecting and remitting that tax to the proper tax
              authorities. Depending on your location, the price you see may include such taxes, or tax may be added at checkout.
            </p>
            <h3 className="sub-titel1">3.2 Payments</h3>
            <p className="text">
              You agree to pay the fees for content that you purchase, and you authorize us to charge your debit or credit card or process other means of payment (such as Boleto, SEPA, direct debit, or mobile wallet) for those fees.
              Simplitrain works with payment service providers to offer you the most convenient payment methods in your country and to keep your payment information secure. We may update your payment methods using information provided by
              our payment service providers. Check out our Privacy Policy for more details.
            </p>
            <p className="text">
                
                    When you make a purchase, you agree not to use an invalid or unauthorized payment method. If your payment method fails and you still get access to the content you are enrolling in, you agree to pay us the corresponding fees
                    within thirty (30) days of notification from us. We reserve the right to disable access to any content for which we have not received adequate payment.
                
            </p>
            <h3 className="sub-title1">3.3 Refunds and Refund Credits</h3>
            <p className="text">
                
                    If the content you purchased is not what you were expecting, you can request, within 30 days of your purchase of the content, that Simplitrain apply a refund to your account. This refund option does not apply to Classroom or
                    Virtual Instructor led trainings. It only applies for Video based trainings. We reserve the right to apply your refund as a refund credit or a refund to your original payment method, at our discretion, depending on
                    capabilities of our payment service providers, the platform from which you purchased your content (website or mobile), and other factors. No refund is due to you if you request it after the 30-day guarantee time limit has
                    passed. However, if the content you previously purchased is disabled for legal or policy reasons, you are entitled to a refund beyond this 30-day limit. Simplitrain also reserves the right to refund students beyond the
                    30-day limit in cases of suspected or confirmed account fraud.
                
            </p>
            <p className="text">To request a refund, follow the steps here. As detailed in the Instructor Terms, instructors agree that students have the right to receive these refunds.</p>
            <p className="text">
                
                    If we decide to issue refund credits to your account, they will be automatically applied towards your next content purchase on our website, but can&rsquo;t be used for purchases in our mobile pplications. Refund credits may
                    expire if not used within the specified period and have no cash value, in each case unless otherwise required by applicable law.
                
            </p>
            <p className="text">
                
                    At our discretion, if we believe you are abusing our refund policy, such as if you&rsquo;ve consumed a significant portion of the content that you want to refund or if you&rsquo;ve previously refunded the content, we reserve
                    the right to deny your refund, restrict you from other future refunds, ban your account, and/or restrict all future use of the Services. If we ban your account or disable your access to the content due to your violation of
                    these Terms or our Trust &amp; Safety Guidelines, you will not be eligible to receive a refund.
                
            </p>
            <h3 className="sub-title1">3.4 Gift and Promotional Codes</h3>
            <p className="text">
                
                    Simplitrain or our partners may offer gift and promotional codes to students. Certain codes may be redeemed for gift or promotional credits applied to your Simplitrain account, which then may be used to purchase eligible
                    content on our platform, subject to the terms included with your codes. Other codes may be directly redeemable for specific content. Gift and promotional credits can&rsquo;t be used for purchases in our mobile or TV
                    applications.
                
            </p>
            <p className="text">
                
                    These codes and credits, as well as any promotional value linked to them, may expire if not used within the period specified in your Simplitrain account. Gift and promotional codes offered by Simplitrain may not be refunded
                    for cash, unless otherwise specified in the terms included with your codes or as required by applicable law. Gift and promotional codes offered by a partner are subject to that partner&rsquo;s refund policies. If you have
                    multiple saved credit amounts, Simplitrain may determine which of your credits to apply to your purchase. Check out our Support Page and any terms included with your codes for more details.
                
            </p>
            <h2 id="BehaviorRules" className="sub-title">4. Content and Behavior Rules</h2>
            <p className="text">
                
                    You can only use Simplitrain for lawful purposes. You&rsquo;re responsible for all the content that you post on our platform. You should keep the reviews, questions, posts, courses and other content you upload in line with
                    our Trust &amp; Safety Guidelines and the law, and respect the intellectual property rights of others. We can ban your account for repeated or major offenses. If you think someone is infringing your copyright on our
                    platform, let us know.
                
            </p>
            <p className="text">
                
                    You may not access or use the Services or create an account for unlawful purposes. Your use of the Services and behavior on our platform must comply with applicable local or national laws or regulations of your country. You
                    are solely responsible for the knowledge of and compliance with such laws and regulations that are applicable to you.
                
            </p>
            <p className="text">
                
                    If you are a student, the Services enable you to ask questions to the instructors of courses or other content you are enrolled in, and to post reviews of content. For certain content, the instructor may invite you to submit
                    content as &ldquo;homework&rdquo; or tests. Don&rsquo;t post or submit anything that is not yours.
                
            </p>
            <p className="text">
                
                    If you are an instructor, you can submit content for publication on the platform and you can also communicate with the students who have enrolled in your courses or other content. In both cases, you must abide by the law and
                    respect the rights of others: you cannot post any course, question, answer, review or other content that violates applicable local or national laws or regulations of your country. You are solely responsible for any courses,
                    content, and actions you post or take via the platform and Services and their consequences. Make sure you understand all the copyright restrictions set forth in the Instructor Terms before you submit any content for
                    publication on Simplitrain.
                
            </p>
            <p className="text">
                
                    If we are put on notice that your course or content violates the law or the rights of others (for example, if it is established that it violates intellectual property or image rights of others, or is about an illegal
                    activity), if we discover that your content or behavior violates our Trust &amp; Safety Guidelines, or if we believe your content or behavior is unlawful, inappropriate, or objectionable (for example if you impersonate
                    someone else), we may remove your content from our platform. Simplitrain complies with copyright laws. Check out our Intellectual Property Policy for more details.
                
            </p>
            <p className="text">
                
                    Simplitrain has discretion in enforcing these Terms and our Trust &amp; Safety Guidelines. We may restrict or terminate your permission to use our platform and Services or ban your account at any time, with or without
                    notice, for any or no reason, including for any violation of these Terms, if you fail to pay any fees when due, for fraudulent chargeback requests, upon the request of law enforcement or government agencies, for extended
                    periods of inactivity, for unexpected technical issues or problems, if we suspect that you engage in fraudulent or illegal activities, or for any other reason in our sole discretion. Upon any such termination we may delete
                    your account and content, and we may prevent you from further access to the platforms and use of our Services. Your content may still be available on the platforms even if your account is terminated or suspended. You agree
                    that we will have no liability to you or any third party for termination of your account, removal of your content, or blocking of your access to our platforms and services.
                
            </p>
            <p className="text">
                
                    If a user has published content that infringes your copyright or trademark rights, please let us know. Our Instructor Terms require our instructors to follow the law and respect the intellectual property rights of others.
                    For more details on how to file a copyright or trademark infringement claim with us, see our Intellectual Property Policy.
                
            </p>
            <h2 id="ContentYouPost" className="sub-title">5. Simplitrain&rsquo;s Rights to Content You Post</h2>
            <p className="text">
                
                    You retain ownership of content you post to our platform, including your courses. We&rsquo;re allowed to share your content to anyone through any media, including promoting it via advertising on other websites.
                
            </p>
            <p className="text">
                
                    The content you post as a student or instructor (including courses) remains yours. By posting courses and other content, you allow Simplitrain to reuse and share it but you do not lose any ownership rights you may have over
                    your content. If you are an instructor, be sure to understand the content licensing terms that are detailed in the Instructor Terms.
                
            </p>
            <p className="text">
                
                    When you post content, comments, questions, reviews, and when you submit to us ideas and suggestions for new features or improvements, you authorize Simplitrain to use and share this content with anyone, distribute it and
                    promote it on any platform and in any media, and to make modifications or edits to it as we see fit.
                
            </p>
            <p className="text">
                
                    In legal language, by submitting or posting content on or through the platforms, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify,
                    publish, transmit, display, and distribute your content (including your name and image) in any and all media or distribution methods (existing now or later developed). This includes making your content available to other
                    companies, organizations, or individuals who partner with Simplitrain for the syndication, broadcast, distribution, or publication of content on other media, as well as using your content for marketing purposes. You also
                    waive any rights of privacy, publicity, or other rights of a similar nature applicable to all these uses, to the extent permissible under applicable law. You represent and warrant that you have all the rights, power, and
                    authority necessary to authorize us to use any content that you submit. You also agree to all such uses of your content with no compensation paid to you.
                
            </p>
            <h2 i="YourOwnRisk" className="sub-title">6. Using Simplitrain at Your Own Risk</h2>
            <p className="text">
                
                    Anyone can use Simplitrain to create and publish content and instructors and we enable instructors and students to interact for teaching and learning. Like other platforms where people can post content and interact, some
                    things can go wrong, and you use Simplitrain at your own risk.
                
            </p>
            <p className="text">
                
                    Our platform model means we do not review or edit the content for legal issues, and we are not in a position to determine the legality of content. We do not exercise any editorial control over the content that is available
                    on the platform and, as such, do not guarantee in any manner the reliability, validity, accuracy, or truthfulness of the content. If you access content, you rely on any information provided by an instructor at your own risk.
                
            </p>
            <p className="text">
                
                    By using the Services, you may be exposed to content that you consider offensive, indecent, or objectionable. Simplitrain has no responsibility to keep such content from you and no liability for your access or enrollment in
                    any course or other content, to the extent permissible under applicable law. This also applies to any content relating to health, wellness, and physical exercise. You acknowledge the inherent risks and dangers in the
                    strenuous nature of these types of content, and by accessing such content you choose to assume those risks voluntarily, including risk of illness, bodily injury, disability, or death. You assume full responsibility for the
                    choices you make before, during, and after your access to the content.
                
            </p>
            <p className="text">
                
                    When you interact directly with a student or an instructor, you must be careful about the types of personal information that you share. While we restrict the types of information instructors may request from students, we do
                    not control what students and instructors do with the information they obtain from other users on the platform. You should not share your email or other personal information about you for your safety.
                
            </p>
            <p className="text">
                
                    We do not hire or employ instructors nor are we responsible or liable for any interactions involved between instructors and students. We are not liable for disputes, claims, losses, injuries, or damage of any kind that might
                    arise out of or relate to the conduct of instructors or students.
                
            </p>
            <p className="text">
                
                    When you use our Services, you will find links to other websites that we don&rsquo;t own or control. We are not responsible for the content or any other aspect of these third-party sites, including their collection of
                    information about you. You should also read their terms and conditions and privacy policies.
                
            </p>
            <h2 id="SimplitrainRights" className="sub-title">7. Simplitrain&rsquo;s Rights</h2>
            <p className="text">
                
                    We own the Simplitrain platform and Services, including the website, present or future apps and services, and things like our logos, API, code, and content created by our employees. You can&rsquo;t tamper with those or use
                    them without authorization.
                
            </p>
            <p className="text">
                
                    All right, title, and interest in and to the Simplitrain platform and Services, including our website, our existing or future applications, our APIs, databases, and the content our employees or partners submit or provide
                    through our Services (but excluding content provided by instructors and students) are and will remain the exclusive property of Simplitrain and its licensors. Our platforms and services are protected by copyright, trademark,
                    and other laws of India. Nothing gives you a right to use the Simplitrain name or any of the Simplitrain trademarks, logos, domain names, and other distinctive brand features. Any feedback, comments, or suggestions you may
                    provide regarding Simplitrain or the Services is entirely voluntary and we will be free to use such feedback, comments, or suggestions as we see fit and without any obligation to you.
                
            </p>
            <p className="text">You may not do any of the following while accessing or using the Simplitrain platform and Services:</p>
            <ul >
                <li>
                    
                        access, tamper with, or use non-public areas of the platform (including content storage), Simplitrain&rsquo;s computer systems, or the technical delivery systems of Simplitrain&rsquo;s service providers.
                    
                </li>
                <li>disable, interfere with, or try to circumvent any of the features of the platforms related to security or probe, scan, or test the vulnerability of any of our systems.</li>
                <li>
                    copy, modify, create a derivative work of, reverse engineer, reverse assemble, or otherwise attempt to discover any source code of or content on the Simplitrain platform or Services.
                </li>
                <li>
                    
                        access or search or attempt to access or search our platform by any means (automated or otherwise) other than through our currently available search functionalities that are provided via our website, mobile apps, or API
                        (and only pursuant to those API terms and conditions). You may not scrape, spider, use a robot, or use other automated means of any kind to access the Services.
                    
                </li>
                <li>
                    
                        in any way use the Services to send altered, deceptive, or false source-identifying information (such as sending email communications falsely appearing as Simplitrain); or interfere with, or disrupt, (or attempt to do
                        so), the access of any user, host, or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the platforms or services, or in any other manner interfering with or
                        creating an undue burden on the Services.
                    
                </li>
            </ul>
            <h2 id="SubscriptionTerms" className="sub-title">8. Subscription Terms</h2>
            <p className="text">
                This section covers additional terms that apply to your use of our subscription-based collections as a student (&ldquo;Subscription Plans&rdquo;). By using a Subscription Plan, you agree to the additional terms in this section. Note that use of Simplitrain Business is not subject to these Terms, but is instead governed by the agreement between Simplitrain and the subscribing organization.
            </p>
            <h3 className="sub-title1">8.1 Subscription Plans</h3>
            <p className="text">
              During your subscription to a Subscription Plan, you get a limited, non-exclusive, non-transferable license from us to access and view the content included in that Subscription Plan via the Services. With the exception of
              the lifetime access license grant, the terms included in the &ldquo;Content Enrollment and Lifetime Access&rdquo; section above apply to enrollments via Subscription Plans.
            </p>
            <p className="text">
                The subscription that you purchase or renew determines the scope, features, and price of your access to a Subscription Plan. You may not transfer, assign, or share your subscription with anyone else.
            </p>
            <p className="text">
              We reserve the right to revoke any license to use the content in our Subscription Plans for legal or policy reasons at any time and at our sole discretion, such as if we no longer have the right to offer the content through
              a Subscription Plan. Additional information on our right to revoke is included in the &ldquo;Content Enrollment and Lifetime Access&rdquo; section.
            </p>
            <h3 className="sub-title1">8.2 Account Management</h3>
            <p className="text">
                You may cancel your subscription by following the steps outlined on our 
                <a href="#">Support Page</a>
                
                    . If you cancel your subscription to a Subscription Plan, your access to that Subscription Plan will automatically end on the last day of your billing period. On cancellation, you will not be entitled to receive a refund or
                    credit of any fees already paid for your subscription, unless otherwise required by applicable law. For clarity, cancellation of a subscription does not terminate your Simplitrain account.
                
            </p>
            <h3 className="sub-title1">8.3 Free Trials &amp; Renewals</h3>
            <p className="text">
                
                    Your subscription may start with a free trial. The duration of the free trial period of your subscription will be specified during sign-up. Simplitrain determines free trial eligibility at our sole discretion and may limit
                    eligibility or duration. We reserve the right to terminate the free trial and suspend your subscription if we determine that you aren&rsquo;t eligible.
                
            </p>
            <p className="text">
                    We will charge the subscription fee for your next billing cycle at the end of the free trial period. Your subscription will automatically renew according to your subscription settings (e.g., monthly or annually) unless you
                    cancel your subscription prior to the end of the free trial period. For more information on how to view applicable fees and dates of your free trial period, visit our
                
               <a href="#">Support Page</a>.
            </p>
            <h3 className="sub-title1">8.4 Payments and Billing</h3>
            <p className="text">
               The subscription fee will be listed at the time of your purchase. You can visit our 
                <a href="#">Support Page</a>
                    &nbsp;to learn more about where to find the fees and dates applicable to your subscription. We may also be required to add taxes to your subscription fee as described in the &ldquo;Payments, Credits, and Refunds&rdquo;
                    section above. Payments are non-refundable and there are no refunds or credits for partially used periods, unless otherwise required by applicable law. Depending on where you are located, you may qualify for a refund. See
                    our
                
              
                    <a href="#">
                        Refund Policy for Subscription Plans
                    </a>
                
                &nbsp;for additional information.
            </p>
            <p className="text">
                
                    To subscribe to a Subscription Plan, you must provide a payment method. By subscribing to a Subscription Plan and providing your billing information during checkout, you grant us and our payment service providers the right
                    to process payment for the then-applicable fees via the payment method we have on record for you. At the end of each subscription term, we will automatically renew your subscription for the same length of term and process
                    your payment method for payment of the then-applicable fees.
                
            </p>
            <p className="text">
                
                    In the event that we update your payment method using information provided by our payment service providers (as described in the &ldquo;Payments, Credits, and Refunds&rdquo; section above), you authorize us to continue to
                    charge the then-applicable fees to your updated payment method.
                
            </p>
            <p className="text">
                
                    If we are unable to process payment through the payment method we have on file for you, or if you file a chargeback disputing charges made to your payment method and the chargeback is granted, we may suspend or terminate
                    your subscription.
                
            </p>
            <p className="text">
                
                    We reserve the right to change our Subscription Plans or adjust pricing for our Services at our sole discretion. Any price changes or changes to your subscription will take effect following notice to you, except as otherwise
                    required by applicable law.
                
            </p>
            <h3 className="sub-title1">8.5 Subscription Disclaimers</h3>
            <p className="text">
                
                    We make no guarantees as to the availability of any specific content in any Subscription Plan or as to any minimum amount of content in any Subscription Plan. At any point in the future, we reserve the right to offer or
                    cease to offer additional features to any Subscription Plan, or to otherwise modify or terminate a Subscription Plan at our sole discretion. These disclaimers are in addition to those listed in the &ldquo;Disclaimers&rdquo;
                    section below.
                
            </p>
            <h2 id="MiscellaneousLegalTerms" className="sub-title">9. Miscellaneous Legal Terms</h2>
            <p className="text">
                
                    These Terms are like any other contract, and they have boring but important legal terms that protect us from the countless things that could happen and that clarify the legal relationship between us and you.
                
            </p>
            <h3 className="sub-title1">9.1 Binding Agreement</h3>
            <p className="text">
                
                    You agree that by registering, accessing, or using our Services, you are agreeing to enter into a legally binding contract with Simplitrain. If you do not agree to these Terms, do not register, access, or otherwise use any
                    of our Services.
                
            </p>
            <p className="text">
                If you are an instructor accepting these Terms and using our Services on behalf of a company, organization, government, or other legal entity, you represent and warrant that you are authorized to do so.
            </p>
            <p className="text">Any version of these Terms in a language other than English is provided for convenience and you understand and agree that the English language will control if there is any conflict.</p>
            <p className="text">
                
                    These Terms (including any agreements and policies linked from these Terms) constitute the entire agreement between you and us (which include, if you are an instructor, the Instructor Terms and the Promotions Policy).
                
            </p>
            <p className="text">
                
                    If any part of these Terms is found to be invalid or unenforceable by applicable law, then that provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original
                    provision and the remainder of these Terms will continue in effect.
                
            </p>
            <p className="text">
                
                    Even if we are delayed in exercising our rights or fail to exercise a right in one case, it doesn&rsquo;t mean we waive our rights under these Terms, and we may decide to enforce them in the future. If we decide to waive any
                    of our rights in a particular instance, it doesn&rsquo;t mean we waive our rights generally or in the future.
                
            </p>
            <p className="text">
                
                    The following sections shall survive the expiration or termination of these Terms: Sections 2 (Content Enrollment and Lifetime Access), 5 (Simplitrain&rsquo;s Rights to Content You Post), 6 (Using Simplitrain at Your Own
                    Risk), 7 (Simplitrain&rsquo;s Rights), 8.5 (Subscription Disclaimers), 9 (Miscellaneous Legal Terms), and 10 (Dispute Resolution).
                
            </p>
            <h3 className="sub-title1">9.2 Disclaimers</h3>
            <p className="text">
                    It may happen that our platform is down, either for planned maintenance or because something goes down with the site. It may happen that one of our instructors is making misleading statements in their content. It may also
                    happen that we encounter security issues. These are just examples. You accept that you will not have any recourse against us in any of these types of cases where things don&rsquo;t work out right. In legal, more complete
                    language,
                      <br />
                    the Services and their content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We (and our affiliates, suppliers, partners, and agents) make no representations or warranties about the
                    suitability, reliability, availability, timeliness, security, lack of errors, or accuracy of the Services or their content, and expressly disclaim any warranties or conditions (express or implied), including implied
                    warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We (and our affiliates, suppliers, partners, and agents) make no warranty that you will obtain specific results from use of the
                    Services. Your use of the Services (including any content) is entirely at your own risk. Some jurisdictions don&rsquo;t allow the exclusion of implied warranties, so some of the above exclusions may not apply to you.
                
            </p>
            <p className="text">
                
                    We may decide to cease making available certain features of the Services at any time and for any reason. Under no circumstances will Simplitrain or its affiliates, suppliers, partners or agents be held liable for any damages
                    due to such interruptions or lack of availability of such features.
                
            </p>
            <p className="text">
                
                    We are not responsible for delay or failure of our performance of any of the Services caused by events beyond our reasonable control, like an act of war, hostility, or sabotage; natural disaster; electrical, internet, or
                    telecommunication outage; or government restrictions.
                
            </p>
            <h3 className="sub-title1">9.3 Limitation of Liability</h3>
            <p className="text">
                    There are risks inherent to using our Services, for example, if you access health and wellness content like yoga, and you injure yourself. You fully accept these risks and you agree that you will have no recourse to seek
                    damages against even if you suffer loss or damage from using our platform and Services. In legal, more complete language,
                
                    to the extent permitted by law, we (and our group companies, suppliers, partners, and agents) will not be liable for any indirect, incidental, punitive, or consequential damages (including loss of data, revenue, profits, or
                    business opportunities, or personal injury or death), whether arising in contract, warranty, tort, product liability, or otherwise, and even if we&rsquo;ve been advised of the possibility of damages in advance. Our liability
                    (and the liability of each of our group companies, suppliers, partners, and agents) to you or any third parties under any circumstance is limited to the greater of one hundred dollars ($100) or the amount you have paid us in
                    the twelve (12) months before the event giving rise to your claims. Some jurisdictions don&rsquo;t allow the exclusion or limitation of liability for consequential or incidental damages, so some of the above may not apply to
                    you.
                
            </p>
            <h3 className="sub-title1">9.4 Indemnification</h3>
            <p className="text">
                
                    If you behave in a way that gets us in legal trouble, we may exercise legal recourse against you. You agree to indemnify, defend (if we so request), and hold harmless Simplitrain, our group companies, and their officers,
                    directors, suppliers, partners, and agents from an against any third-party claims, demands, losses, damages, or expenses (including reasonable attorney fees) arising from (a) the content you post or submit, (b) your use of
                    the Services (c) your violation of these Terms, or (d) your violation of any rights of a third party. Your indemnification obligation will survive the termination of these Terms and your use of the Services.
                
            </p>
            <h3 className="sub-title1">9.5 Governing Law and Jurisdiction</h3>
            <p className="text">
                When these Terms mention &ldquo;Simplitrain,&rdquo;
                
                    &nbsp;they&rsquo;re referring to the Simplitrain Solutions LLP entity that you&rsquo;re contracting with. If you&rsquo;re a student, your contracting entity and governing law will generally be determined based on your
                    location.
                
            </p>
            <p className="text">
                
                    If you&rsquo;re a student located in India, you&rsquo;re contracting with Simplitrain Solutions LLP and these Terms are governed by the laws of India, without reference to its choice or conflicts of law principles, and you
                    consent to the exclusive jurisdiction and venue of the courts in Bangalore, India.
                
            </p>
            <h3 className="sub-title1">9.6 Legal Actions and Notices</h3>
            <p className="text">
                
                    No action, regardless of form, arising out of or relating to this Agreement may be brought by either party more than one (1) year after the cause of action has accrued, except where this limitation cannot be imposed by law.
                
            </p>
            <p className="text">
                
                    Any notice or other communication to be given hereunder will be in writing and given by registered or certified mail return receipt requested, or email (by us to the email associated with your account or by you to
                    info@Simplitrain.com).
                
            </p>
            <h3 className="sub-title1">9.7 Relationship Between Us</h3>
            <p className="text">You and we agree that no joint venture, partnership, employment, contractor, or agency relationship exists between us.</p>
            <h3 className="sub-title1">9.8 No Assignment</h3>
            <p className="text">
                
                    You may not assign or transfer these Terms (or the rights and licenses granted under them). For example, if you registered an account as an employee of a company, your account cannot be transferred to another employee. We
                    may assign these Terms (or the rights and licenses granted under them) to another company or person without restriction. Nothing in these Terms confers any right, benefit, or remedy on any third-party person or entity. You
                    agree that your account is non-transferable and that all rights to your account and other rights under these Terms terminate upon your death.
                
            </p>
            <h2 id="DisputeResolution" className="sub-title">10. Dispute Resolution</h2>
            <p className="text">
                
                    If there&rsquo;s a dispute, our Support Team is happy to help resolve the issue. If that doesn&rsquo;t work and you live in the India, your options are to go to small claims court or bring a claim in binding arbitration; you
                    may not bring that claim in another court or participate in a non-individual class action claim against us.
                
            </p>
            <h2 id="UpdatingTheseTerms" className="sub-title">11. Updating These Terms</h2>
            <p className="text">
                
                    From time to time, we may update these Terms to clarify our practices or to reflect new or different practices (such as when we add new features), and Simplitrain reserves the right in its sole discretion to modify and/or
                    make changes to these Terms at any time. If we make any material change, we will notify you using prominent means, such as by email notice sent to the email address specified in your account or by posting a notice through
                    our Services. Modifications will become effective on the day they are posted unless stated otherwise.
                
            </p>
            <p className="text">Your continued use of our Services after changes become effective shall mean that you accept those changes. Any revised Terms shall supersede all previous Terms.</p>
            <h2 id="HowToContactUs" className="sub-title" >12. How to Contact Us</h2>
            <p className="text">The best way to get in touch with us is to contact our Support Team. We&rsquo;d love to hear your questions, concerns, and feedback about our Services.</p>
            <p className="text">Thanks for teaching and learning with us!</p>
        </div>
    </div>
  );
};

export default TermsOfUse;
