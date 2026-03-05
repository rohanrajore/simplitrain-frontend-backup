import React,{useEffect} from 'react';
import ListPanel from "../listPanel.jsx";
import "../pages.css";

const PrivacyAndCookie = props => {

  useEffect(()=>(
    window.scroll({top:0, behavior:'smooth'})
  ),[1])

  return(
  <div className="policy-container">
    <ListPanel/>
      <div className="policy-content">
        <h4 className="title">Privacy Policy</h4>
        <p className="text">
          We at SimpliTrain respect your privacy and want you to understand
          how we collect, use, and share data about you. This Privacy Policy
          covers our data collection practices and describes your rights to
          access, correct, or restrict our use of your personal data.
        </p>

        <p className="text">
          Unless we link to a different policy or state otherwise, this
          Privacy Policy applies when you visit or use the SimpliTrain
          website, mobile applications, APIs or related services (the{" "}
          <strong>&ldquo;Services&rdquo;</strong>).
        </p>
        <p className="text">
            <strong>
              By using the Services, you agree to the terms of this Privacy
              Policy.
            </strong>{" "}
            You shouldn&rsquo;t use the Services if you don&rsquo;t agree with
            this Privacy Policy or any other agreement that governs your use of
            the Services.
        </p>
        <h6 className="sub-title">1. What Data We Get</h6>
        <p className="text">
          We collect certain data from you directly, like information you
          enter yourself, data about your participation in courses, and data
          from third-party platforms you connect with SimplTrain. We also
          collect some data automatically, like information about your device
          and what parts of our Services you interact with or spend time
          using.
        </p>
        <h6 className="sub-title1">1.1 Data You Provide to Us</h6>
        <p className="text">
          We may collect different data from or about you depending on how you
          use the Services. Below are some examples to help you better
          understand the data we collect.
        </p>

        <p className="text">
          When you create an account and use the Services, including through a
          third-party platform, we collect any data you provide directly,
          including:
        </p>
        <p className="text">
          <b>Account Data: </b>
          In order to use certain features (like enrolling in a
          course), you need to create a user account. When you create
          or update your account, we collect and store the data you
          provide, like your email address, password, phone number,
          occupation, skill interests, gender, government ID
          information, verification photo, age, and date of birth, and
          assign you a unique identifying number (&ldquo;Account
          Data&rdquo;).
        </p>
        <p className="text">
          <b>Profile Data: </b>
          You can also choose to provide profile information like a
          photo, headline, biography, language, website link, social
          media profiles, country, or other data. Your Profile Data
          will be publicly viewable by others only if you are an
          instructor. You can control what information is public in
          the settings section.
        </p>
        <p className="text">
          <b>Shared Content: </b>
          Parts of the Services let you interact with other users or
          share content publicly, including by posting reviews on a
          course page, asking or answering questions, sending messages
          to students or instructors, or posting photos or other work
          you upload. Such shared content may be publicly viewable by
          others depending on where it is posted.
        </p>
        <p className="text">
          <b>Course Data: </b>
          When you enroll in and take courses, we collect certain data
          including which courses, assignments and quizzes
          you&rsquo;ve started and completed; your exchanges with
          instructors, teaching assistants, and other students; and
          essays, answers to questions, and other items submitted to
          satisfy course requirements.
        </p>
        <p className="text">
          <b>Student Payment Data: </b>
          If you make purchases, we collect certain data about your
          purchase (such as your name and zip code) as necessary to
          process your order. You must provide certain payment and
          billing data directly to our payment processing partners,
          including your name, credit card information, billing
          address, and zip code. For security, SimpliTrain does not
          collect or store sensitive cardholder data, such as full
          credit card numbers or card authentication data.
        </p>
        <p className="text">
          <b>Instructor Payment Data: </b>
          If you are an instructor, you can link your PayPal, or other
          payment account to the Services to receive payments. When
          you link a payment account, we collect and use certain
          information, including your payment account email address,
          account ID, physical address, or other data necessary for us
          to send payments to your account. In order to comply with
          applicable laws, we also work with trusted third parties who
          collect tax information as legally required. This tax
          information may include residency information, tax
          identification numbers, biographical information, and other
          personal information necessary for taxation purposes. For
          security, SimpliTrain does not collect or store sensitive
          bank account information. The collection, use, and
          disclosure of your payment, billing, and taxation data is
          subject to the privacy policy and other terms of your
          payment account provider.
        </p>
        <p className="text">
          <b>Data About Your Accounts on Other Services: </b>
          We may obtain certain information through your social media
          or other online accounts if they are connected to your
          SimpliTrain account. If you login to SimpliTrain via
          Facebook or another third-party platform or service, we ask
          for your permission to access certain information about that
          other account. For example, depending on the platform or
          service we may collect your name, profile picture, account
          ID number, login email address, location, physical location
          of your access devices, gender, birthday, and list of
          friends or contacts.<br /> Those platforms and services make information available to
          us through their APIs. The information we receive depends on
          what information you (via your privacy settings) or the
          platform or service decide to give us.<br /> If you access or use our Services through a third-party
          platform or service, or click on any third-party links, the
          collection, use, and sharing of your data will also be
          subject to the privacy policies and other agreements of that
          third party.
        </p>
        <p className="text">
          <b>Communications and Support: </b>
          If you contact us for support or to report a problem or
          concern (regardless of whether you have created an account),
          we collect and store your contact information, messages, and
          other data about you like your name, email address,
          location, operating system, IP address, and any other data
          you provide or that we collect through automated means
          (which we cover below). We use this data to respond to you
          and research your question or concern, in accordance with
          this Privacy Policy.
        </p>
        <h6 className="sub-title">2. How We Get Data About You</h6>
        <p className="text">
          We use tools like cookies, web beacons, analytics services, and
          advertising providers to gather the data listed above. Some of these
          tools offer you the ability to opt out of data collection.
        </p>
        <h6 className="sub-title1">2.1 Cookies and Data Collection Tools</h6>
        <p className="text">
          As detailed in our Cookie Policy, SimpliTrain and service providers
          acting on our behalf (like Google Analytics and third party
          advertisers) use server log files and automated data collection
          tools like cookies, tags, scripts, customized links, device or
          browser fingerprints, and web beacons (together, &ldquo;Data
          Collection Tools&rdquo;) when you access and use the Services. These
          Data Collection Tools automatically track and collect certain System
          Data and Usage Data (as detailed in Section 1) when you use the
          Services. In some cases, we tie data gathered through those Data
          Collection Tools to other data that we collect as described in this
          Privacy Policy.<br />
          We use cookies (small files that websites send to your device to
          uniquely identify your browser or device or to store data in your
          browser) for things like analyzing your use of the Services,
          personalizing your experience, making it easier to log into the
          Services, and recognizing you when you return. We use web beacons
          (small objects that allow us to measure the actions of visitors and
          users using the Services) for things like identifying whether a page
          was visited, identifying whether an email was opened, and
          advertising more efficiently by excluding current users from certain
          promotional messages or identifying the source of a new mobile app
          download.
        </p>
        <h6 className="sub-title1">SimpliTrain uses the following types of cookies:</h6>
        <ul>
          <li>
            <p className="text">
              Preferences: cookies that remember data about your browser and
              preferred settings that affect the appearance and behavior of
              the Services (like your preferred language).
            </p>
          </li>
          <li>
            <p className="text">
              Security: cookies used to enable you to log in and access the
              Services; protect against fraudulent logins; and help detect and
              prevent abuse or unauthorized use of your account.
            </p>
          </li>
          <li>
            <p className="text">
              Functional: cookies that store functional settings (like the
              volume level you set for video playback).
            </p>
          </li>
          <li>
            <p className="text">
              Session State: cookies that track your interactions with the
              Services to help us improve the Services and your browsing
              experience, remember your login details, and enable processing
              of your course purchases. These are strictly necessary for the
              Services to work properly, so if you disable them then certain
              functionalities will break or be unavailable.
            </p>
          </li>
        </ul>
        <p className="text">
          You can set your web browser to alert you about attempts to place
          cookies on your computer, limit the types of cookies you allow, or
          refuse cookies altogether. If you do, you may not be able to use
          some or all features of the Services, and your experience may be
          different or less functional.
        </p>

        <p className="text">
          Some of the third-party partners who provide certain features on our
          site may also use Local Storage Objects (also known as flash cookies
          or LSOs) to collect and store data.
        </p>
          
        <h6 className="sub-title1">2.2 Analytics</h6>
        <p className="text">
          We use third-party browser and mobile analytics services like Google
          Analytics, Hotjar, and Intercom on the Services. These services use
          Data Collection Tools to help us analyze your use of the Services,
          including information like the third-party website you arrive from,
          how often you visit, events within the Services, usage and
          performance data, and where the application was downloaded from. We
          use this data to improve the Services, better understand how the
          Services perform on different devices, and provide information that
          may be of interest to you.
        </p>

        <h6 className="sub-title1">2.3 Online Advertising</h6>
        <p className="text">
          We use third-party advertising services like Taboola, Facebook,
          Google&rsquo;s ad services, and other ad networks and ad servers to
          deliver advertising about our Services on other websites and
          applications you use. The ads may be based on things we know about
          you, like your Usage Data and System Data (as detailed in Section
          1), and things that these ad service providers know about you based
          on their tracking data. The ads can be based on your recent activity
          or activity over time and across other sites and services, and may
          be tailored to your interests.<br />Depending on the types of advertising services we use, they may
          place cookies or other tracking technologies on your computer,
          phone, or other device to collect data about your use of our
          Services, and may access those tracking technologies in order to
          serve these tailored advertisements to you. To help deliver tailored
          advertising, we may provide these service providers with a hashed,
          anonymized version of your email address (in a non-human-readable
          form) and content that you share publicly on the Services.<br />
          When using mobile applications you may also receive tailored in-app
          advertisements. Apple iOS, Android OS, and Microsoft Windows each
          provide their own instructions on how to control in-app tailored
          advertising. For other devices and operating systems, you should
          review your privacy settings or contact your platform operator.
        </p>
        <h6 className="sub-title">3. What We Use Your Data For</h6>
        <p className="text">
          We use your data to do things like provide our Services, communicate
          with you, troubleshoot issues, secure against fraud and abuse,
          improve and update our Services, analyze how people use our
          Services, serve personalized advertising, and as required by law or
          necessary for safety and integrity.
        </p>
        <h6 className="sub-title1">We use the data we collect through your use of the Services to:</h6>
        <ul>
          <li>
            <p className="text">
              Provide and administer the Services, including to display
              customized content and facilitate communication with other
              users;
            </p>
          </li>
          <li>
            <p className="text"> 
              Process your requests and orders for courses, products, specific
              services, information, or features;
            </p>
          </li>
          <li>
            <p className="text">Communicate with you about your account by:</p>

            <ul>
              <li>
                <p className="text">Responding to your questions and concerns;</p>
              </li>
              <li>
                <p className="text">
                  Sending you administrative messages and information,
                  including messages from instructors and teaching assistants,
                  notifications about changes to our Service, and updates to
                  our agreements;
                </p>
              </li>
              <li>
                <p className="text">
                  Sending you information, such as by email or text messages,
                  about your progress in courses, rewards programs, new
                  services, new features, promotions, newsletters, and other
                  available courses (which you can opt out of at any time);
                </p>
              </li>
              <li>
                <p className="text">
                  Sending push notifications to your wireless device to
                  provide updates and other relevant messages (which you can
                  manage from the &ldquo;options&rdquo; or
                  &ldquo;settings&rdquo; page of the mobile app);
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="text">Manage your account preferences;</p>
          </li>
          <li>
            <p className="text">
              Facilitate the Services&rsquo; technical functioning, including
              troubleshooting and resolving issues, securing the Services, and
              preventing fraud and abuse;
            </p>
          </li>
          <li>
            <p className="text">Solicit feedback from users;</p>
          </li>
          <li>
            <p className="text">
              Market and administer surveys and promotions administered or
              sponsored by SimpliTrain;
            </p>
          </li>
          <li>
            <p className="text">
              Learn more about you by linking your data with additional data
              through third-party data providers or analyzing the data with
              the help of analytics service providers;
            </p>
          </li>
          <li>
            <p className="text">Identify unique users across devices;</p>
          </li>
          <li>
            <p className="text">Tailor advertisements across devices;</p>
          </li>
          <li>
            <p className="text">
              Improve our Services and develop new products, services, and
              features;
            </p>
          </li>
          <li>
            <p className="text">
              Analyze trends and traffic, track purchases, and track usage
              data;
            </p>
          </li>
          <li>
            <p className="text">
              Advertise the Services on third-party websites and applications;
            </p>
          </li>
          <li>
            <p className="text">As required or permitted by law; or</p>
          </li>
          <li>
            <p className="text">
              As we, in our sole discretion, otherwise determine to be
              necessary to ensure the safety or integrity of our users,
              employees, third parties, the public, or our Services.
            </p>
          </li>
        </ul>
        <h6 className="sub-title">4. Who We Share Your Data With</h6>
        <p className="text">
          We share certain data about you with instructors, other students,
          companies performing services for us, SimpliTrain affiliates, our
          business partners, analytics and data enrichment providers, your
          social media providers, companies helping us run promotions and
          surveys, and advertising companies who help us promote our Services.
          We may also share your data as needed for security, legal
          compliance, or as part of a corporate restructuring. Lastly, we can
          share data in other ways if it is aggregated or de-identified or if
          we get your consent.
        </p>

        <p className="text">
          We may share your data with third parties under the following
          circumstances or as otherwise described in this Privacy Policy:
        </p>

        <ul>
          <li>
            <p className="text">
              With Your Instructors: We share data that we have about you
              (except your email address) with instructors or teaching
              assistants for courses you enroll in or request information
              about, so they can improve their courses for you and other
              students. This data may include things like your city, country,
              browser language, operating system, device settings, the site
              that brought you to SimpliTrain, and your activities on
              SimpliTrain. If we collect additional data about you (like age
              or gender), we may share that too. We will not share your email
              address with instructors or teaching assistants. We also enable
              our instructors to implement Google Analytics on their course
              pages to track sources of traffic to their courses and optimize
              their course pages.
            </p>
          </li>
          <li>
            <p className="text">
              With Other Students and Instructors: Depending on your settings,
              your shared content and profile data may be publicly viewable,
              including to other students and instructors. If you ask a
              question to an instructor or teaching assistant, your
              information (including your name) may also be publicly viewable
              by other users depending on your settings.
            </p>
          </li>
          <li>
            <p className="text">
              With Service Providers, Contractors, and Agents: We share your
              data with third-party companies who perform services on our
              behalf, like payment processing, fraud and abuse prevention,
              data analysis, marketing and advertising services (including
              retargeted advertising), email and hosting services, and
              customer services and support. These service providers may
              access your personal data and are required to use it solely as
              we direct, to provide our requested service.
            </p>
          </li>
          <li>
            <p className="text">
              With SimpliTrain Affiliates: We may share your data within our
              corporate family of companies that are related by common
              ownership or control to enable or support us in providing the
              Services.
            </p>
          </li>
          <li>
            <p className="text">
              With Business Partners: We have agreements with other websites
              and platforms to distribute our Services and drive traffic to
              SimpliTrain.
            </p>
          </li>
          <li>
            <p className="text">
              With Analytics and Data Enrichment Services: As part of our use
              of third-party analytics tools like Google Analytics and data
              enrichment services like Clearbit, we share certain contact
              information, Account Data, System Data, Usage Data (as detailed
              in Section 1), or de-identified data as needed. De-identified
              data means data where we&rsquo;ve removed things like your name
              and email address and replaced it with a token ID. This allows
              these providers to provide analytics services or match your data
              with publicly-available database information (including contact
              and social information from other sources). We do this to
              communicate with you in a more effective and customized manner.
            </p>
          </li>
          <li>
            <p className="text">
              To Power Social Media Features: The social media features in the
              Services (like the Facebook Like button) may allow the
              third-party social media provider to collect things like your IP
              address and which page of the Services you&rsquo;re visiting,
              and to set a cookie to enable the feature. Your interactions
              with these features are governed by the third-party
              company&rsquo;s privacy policy.
            </p>
          </li>
          <li>
            <p className="text">
              To Administer Promotions and Surveys: we may share your data as
              necessary to administer, market, or sponsor promotions and
              surveys you choose to participate in, as required by applicable
              law (like to provide a winners list or make required filings),
              or in accordance with the rules of the promotion or survey.
            </p>
          </li>
          <li>
            <p className="text">
              For Advertising: If we decide to offer advertising in the
              future, we may use and share certain System Data and Usage Data
              with third-party advertisers and networks to show general
              demographic and preference information among our users. We may
              also allow advertisers to collect System Data through Data
              Collection Tools (as detailed in Section 2.1), and to use this
              data to offer you targeted ad delivery to personalize your user
              experience (through behavioral advertising) and undertake web
              analytics. Advertisers may also share with us the data they
              collect about you. To learn more or opt out from participating
              ad networks&rsquo; behavioral advertising, see Section 6.1 (Your
              Choices About the Use of Your Data) below. Note that if you opt
              out, you&rsquo;ll continue to be served generic ads.
            </p>
          </li>
          <li>
            <p className="text">
              For Security and Legal Compliance: We may disclose your data to
              third parties if we (in our sole discretion) have a good faith
              belief that the disclosure is:
            </p>

            <ul>
              <li>
                <p className="text">Permitted or required by law;</p>
              </li>
              <li>
                <p className="text">
                  Requested as part of a judicial, governmental, or legal
                  inquiry, order, or proceeding;
                </p>
              </li>
              <li>
                <p className="text">
                  Reasonably necessary as part of a valid subpoena, warrant,
                  or other legally-valid request;
                </p>
              </li>
              <li>
                <p className="text">
                  Reasonably necessary to enforce our Terms of Use, Privacy
                  Policy, and other legal agreements;
                </p>
              </li>
              <li>
                <p className="text">
                  Required to detect, prevent, or address fraud, abuse,
                  misuse, potential violations of law (or rule or regulation),
                  or security or technical issues; or
                </p>
              </li>
              <li>
                <p className="text">
                  Reasonably necessary in our discretion to protect against
                  imminent harm to the rights, property, or safety of
                  SimpliTrain, our users, employees, members of the public, or
                  our Services.
                </p>
              </li>
              <li>
                <p className="text">
                  We may also disclose data about you to our auditors and
                  legal advisors in order to assess our disclosure obligations
                  and rights under this Privacy Policy.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="text">
              During a Change in Control: If SimpliTrain undergoes a business
              transaction like a merger, acquisition, corporate divestiture,
              or dissolution (including bankruptcy), or a sale of all or some
              of its assets, we may share, disclose, or transfer all of your
              data to the successor organization during such transition or in
              contemplation of a transition (including during due diligence).
            </p>
          </li>
          <li>
            <p className="text">
              After Aggregation/De-identification: we can disclose or use
              aggregate or de-identified data for any purpose.
            </p>
          </li>
          <li>
            <p className="text">
              With Your Permission: with your consent, we may share data to
              third parties outside the scope of this Privacy Policy.
            </p>
          </li>
        </ul>
        <h6 className="sub-title">5. Security</h6>
          
        <p className="text">
          We use appropriate security based on the type and sensitivity of
          data being stored. As with any internet-enabled system, there is
          always a risk of unauthorized access, so it&rsquo;s important to
          protect your password and to contact us if you suspect any
          unauthorized access to your account.
        </p>

        <p className="text">
          SimpliTrain takes appropriate security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of your
          personal data that we collect and store. These measures vary based
          on the type and sensitivity of the data. Unfortunately, however, no
          system can be 100% secured, so we cannot guarantee that
          communications between you and SimpliTrain, the Services, or any
          information provided to us in connection with the data we collect
          through the Services will be free from unauthorized access by third
          parties. Your password is an important part of our security system,
          and it is your responsibility to protect it. You should not share
          your password with any third party, and if you believe your password
          or account has been compromised, you should change it immediately
          and contact our Support Team with any concerns.
        </p>
        <h6 className="sub-title">6. Your Rights</h6>
         
        <p className="text">
          You have certain rights around the use of your data, including the
          ability to opt out of promotional emails, cookies, and collection of
          your data by certain analytics providers. You can update or
          terminate your account from within our Services, and can also
          contact us for individual rights requests about your personal data.
          Parents who believe we&rsquo;ve unintentionally collected personal
          data about their underage child should contact us for help deleting
          that information.
        </p>
        <h6 className="sub-title">6.1 Your Choices About the Use of Your Data</h6>
        <p className="text">
          You can choose not to provide certain data to us, but you may not be
          able to use certain features of the Services.
        </p>

        <ul>
          <li>
            <p className="text">
              To stop receiving promotional communications from us, you can
              opt out by using the unsubscribe mechanism in the promotional
              communication you receive or by changing the email preferences
              in your account. Note that regardless of your email preference
              settings, we will send you transactional and relationship
              messages regarding the Services, including administrative
              confirmations, order confirmations, important updates about the
              Services, and notices about our policies.
            </p>
          </li>
          <li>
            <p className="text">
              The browser or device you use may allow you to control cookies
              and other types of local data storage. Your wireless device may
              also allow you to control whether location or other data is
              collected and shared.
            </p>
          </li>
        </ul>
        <h6 className="sub-title">6.2 Accessing, Updating, and Deleting Your Personal Data</h6>
          
        <p className="text">
          You can access and update your personal data that SimpliTrain
          collects and maintains as follows:
        </p>

        <ul>
          <li>
            <p className="text">
              To update data you provide directly, log into your account and
              update your account at any time.
            </p>
          </li>
          <li>
            <p className="sub-title1">To terminate your account:</p>
            <ul>
              <li>
                <p className="text">
                  If you have any issues terminating your account, please
                  contact our Support Team.
                </p>
              </li>
              <li>
                <p className="text">
                  Please note: even after your account is terminated, some or
                  all of your data may still be visible to others, including
                  without limitation any data that has been (a) copied,
                  stored, or disseminated by other users (including in course
                  comment); (b) shared or disseminated by you or others
                  (including in your shared content); or (c) posted to a
                  third-party platform. Even after your account is terminated,
                  we retain your data for as long as we have a legitimate
                  purpose to do so (and in accordance with applicable law),
                  including to assist with legal obligations, resolve
                  disputes, and enforce our agreements. We may retain and
                  disclose such data pursuant to this Privacy Policy after
                  your account has been terminated.
                </p>
              </li>
              <li>
                <p className="text">
                  To request to access, correct, or delete your personal data,
                  please write to us. For your protection, we may require that
                  the request be sent through the email address associated
                  with your account, and we may need to verify your identity
                  before implementing your request. Please note that we retain
                  certain data where we have a lawful basis to do so,
                  including for mandatory record-keeping and to complete
                  transactions.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <h6 className="sub-title"> 6.3 Our Policy Concerning Children</h6>
                    
        <p className="text">
          We recognize the privacy interests of children and encourage parents
          and guardians to take an active role in their children&rsquo;s
          online activities and interests. Children under 13 should not use
          the Services. If we learn that we&rsquo;ve collected personal data
          from a child under those ages, we will take reasonable steps to
          delete it.
        </p>

        <p className="text">
          Parents who believe that SimpliTrain may have collected personal
          data from a child under those ages can submit a request that it be
          removed
        </p>

        <h4 className="title">Cookie Policy</h4>
        <h6 className="sub-title">What are cookies?</h6>  
        <p className="text">
            Cookies are small text files stored by your browser as you browse
            the internet. They can be used to collect, store, and share data
            about your activities across websites, including on SimpliTrain.
            Cookies also allow us to remember things about your visits to
            SimpliTrain, like your preferred language, and to make the site
            easier to use.
        </p>
        <p className="text">
          We use both session cookies, which expire after a short time or
          when you close your browser, and persistent cookies, which remain
          stored in your browser for a set period of time. We use session
          cookies to identify you during a single browsing session, like
          when you log into SimpliTrain. We use persistent cookies where we
          need to identify you over a longer period, like when you request
          that we keep you signed in.
        </p>
        <h6 className="sub-title">Why does SimpliTrain use cookies and similar technologies?</h6>
        <p className="text">
          We use cookies and similar technologies like web beacons, pixel
          tags, or local shared objects (&ldquo;flash cookies&rdquo;), to
          deliver, measure, and improve our services in various ways. We use
          these cookies both when you visit our site and services through a
          browser and through our mobile app. As we adopt additional
          technologies, we may also gather additional data through other
          methods.
        </p>
        <h6 className="sub-title1">We use cookies for the following purposes:</h6>
        <p className="text">
          <b>Authentication and security:</b>
          <ul>
            <li>
              <p className="text">To log you into SimpliTrain</p>
            </li>
            <li>
              <p className="text">To protect your security</p>
            </li>
            <li>
              <p className="text">
                To help detect and fight spam, abuse, and other
                activities that violate SimpliTrain&rsquo;s agreements
              </p>
            </li>
          </ul>
          <p className="text">
            For example, cookies help authenticate your access to SimpliTrain
            and prevent unauthorized parties from accessing your accounts.
          </p>
          <p className="text">To remember data about your browser and your preferences</p>
          <p className="text"> To remember your settings and other choices you&rsquo;ve made</p>
          <p className="text">
            For example, cookies help us remember your preferred language or
            the country you&rsquo;re in, so we can provide content in your
            preferred language without asking each time you visit.
          </p>
        </p>
        <p className="text">
          <b>Authentication and security:</b>
          To help us improve and understand how people use SimpliTrain
          <br /><br /> For example, cookies help us test different versions of
          SimpliTrain to see which features or content users prefer, web
          beacons help us determine which email messages are opened, and
          cookies help us see how you interact with SimpliTrain, like the
          links you click on.<br /><br />We also work with a number of analytics partners, including Google
          Analytics and Mixpanel, who use cookies and similar technologies
          to help us analyze how users use the Services, including by noting
          the sites from which you arrive. Those service providers may
          either collect that data themselves or we may disclose it to them.
        </p>
        <p className="text">
          <b>Personalized content:</b>
          To customize SimpliTrain with more relevant content
          <br /><br /> For example, cookies help us show a personalized list of recommended courses on the homepage.
        </p>
        <p className="text">
          <b>Advertising:</b>
          To provide you with more relevant advertising
        </p>

        <p className="text">
          To learn more about targeting and advertising cookies and how you can opt out, visit{" "}
          <a href="http://www.allaboutcookies.org/manage-cookies/index.html">
            <span><u>www.allaboutcookies.org/manage-cookies/index.html</u></span>
          </a>
        </p>
    
        <p className="text">
          Please note that where advertising technology is integrated into the
          Services, you may still receive advertising on other websites and
          applications, but it will not be tailored to your interests.
        </p>

        <p className="text">
          When using mobile applications you may also receive tailored in-app
          advertisements. Apple iOS, Android OS, and Microsoft Windows each
          provide its own instructions on how to control in-app tailored
          advertising. For other devices and operating systems, you should
          review your privacy settings or contact your platform operator.
        </p>
        <h6 className="sub-title">What are my privacy options?</h6>
        
        <p className="text">
          You have a number of options to control or limit how we and our
          partners use cookies:
        </p>
        

        <ul>
          <li>
            <p className="text">
              Most browsers automatically accept cookies, but you can change
              your browser settings to decline cookies by consulting your
              browser&rsquo;s support articles. If you decide to decline
              cookies, please note that you may not be able to sign in,
              customize, or use some interactive features in the Services.
            </p>
          </li>
          <li>
            <p className="text">
              For general information about targeting cookies and how to disable them, visit{" "}
              <a href="http://www.allaboutcookies.org/"><u>www.allaboutcookies.org</u></a>.
            </p>
          </li>
        </ul>
        <h6 className="sub-title">Updates &amp; Contact Info</h6>     
        <p className="text">
          From time to time, we may update this Cookie Policy. If we do,
          we&rsquo;ll notify you by posting the policy on our site with a new
          effective date. If we make any material changes, we&rsquo;ll take
          reasonable steps to notify you in advance of the planned change.
        </p>
      </div>
  </div>
)};

export default PrivacyAndCookie;
