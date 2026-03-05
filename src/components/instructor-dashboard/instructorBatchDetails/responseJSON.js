const batchDetails = [{
    "mainCard":{"id":"1445762",
                "title":"Complete Python Bootcamp - Go From Zero to Hero in Python 3",
                "img":"https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg",
                "schedule":"24th - 27th Aug 2019 (4 Days)", // Here I am not sure would you send it like this, or separate startDate endDate, end then should I make this on UI instead
                "location":"806, Spring block, Windsor Four seasons, Bannerghatta Road, Hulimavu, Bangalore - 560076 - INDIA",
                "price":"5,999.00",
                "status":"In Progress",
                "enrollments":"10 Learners", // Here also I am not sure would you send just 10 or 10 Learners
                "scheduleProgress":"3/10 Days Completed"}, // Also Here would you send only 3/10 or 3/10 Days Completed

    "details":{"startDate":"2021-09-05T16:58:02.921Z[Etc/UTC]",
               "endDate":"2021-09-21T16:58:02.921Z[Etc/UTC]",
               "includeWeekend":"false",
               "scheduleDuration":"7 days", // This is for how many days is duration of batch you can send me either 3, or 3 days
               "scheduleComponent":[{"label":"Day 1","startDate":"2021-09-05T16:58:02.921Z[Etc/UTC]","startTime":"07:00","endTime":"14:00"},
                                    {"label":"Day 1","startDate":"2021-09-06T16:58:02.921Z[Etc/UTC]","startTime":"09:00","endTime":"15:00"},
                                    {"label":"Day 1","startDate":"2021-09-07T16:58:02.921Z[Etc/UTC]","startTime":"08:00","endTime":"14:00"}],
               "venueImg":"https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
               "venueLocation":"#806, Spring Block, Windsor Four seasons Apartment, Bannerghatta Road, Huliamvu, Bangalore - 560076 KA, INDIA",
               "venueLandmark":"Behind Meenakashi Temple"},

                // Here we have discount, it is not user for learners tab, but it is needed for finance tab,
                // as finance tab use almost same info like learners.. So I use for both of them this array..
    "learners":[{"id":"1234","name":"Ajushe Rayore","amountPaid":"850.00","coupon":"","discount":""},
                {"id":"134","name":"Rohan Rayore","amountPaid":"1850.00","coupon":"","discount":""},
                {"id":"34","name":"Ajushe Rayore","amountPaid":"2,850.00","coupon":"jtd72c","discount":"850.00"},
                {"id":"2234","name":"Ajushe Rayore","amountPaid":"850.00","coupon":"","discount":""},
                {"id":"1224","name":"Rohan Rayore","amountPaid":"850.00","coupon":"lrkp98o2a","discount":"750.00"},
                {"id":"14234","name":"Ajushe Rayore","amountPaid":"550.00","coupon":"","discount":""},
                {"id":"12345","name":"Rohan Rayore","amountPaid":"850.00","coupon":"ggpo28xa","discount":"550.00"},
                {"id":"12534","name":"Rohan Rayore","amountPaid":"5,850.00","coupon":"","discount":""},
                {"id":"167234","name":"Ajushe Rayore","amountPaid":"3,050.00","coupon":"rf82sjfq","discount":"350.00"},
                {"id":"111234","name":"Rohan Rayore","amountPaid":"850.00","coupon":"jvfoq982","discount":"250.00"},
                {"id":"15234","name":"Ajushe Rayore","amountPaid":"550.00","coupon":"","discount":""},
                {"id":"18234","name":"Rohan Rayore","amountPaid":"150.00","coupon":"11bskw9","discount":"550.00"},
                {"id":"19234","name":"Ajushe Rayore","amountPaid":"250.00","coupon":"aal29jg","discount":"300.00"}],

    "feedback":[{"id":"1234",
                 "name":"Rohan Rayore",
                 "questions":[     // Here when user submits feedback from my Courses page, in the API you already gave those 12 predefined IDs.
                         {         // 10 Ids for the questions, and 3 for textareas. So I assume you store by ID in your database, so I think this will be easier for you
                             "questionID": "02fb06a3-934e-4845-95ef-4faf6db4ce4a",  // On my courses we hardcoded question names, so I did here also, when we would have
                             "feedbackValue": "1"                                   // question names, then we will insert them here also
                         },
                         {
                             "questionID": "461befa5-24ca-4d67-acac-da7b6a856bc6",
                             "feedbackValue": "5"
                         },
                         {
                             "questionID": "d87b8d22-2161-4476-8d5b-688fa337c25a",
                             "feedbackValue": "7"
                         },
                         {
                             "questionID": "6d06807f-73b1-4da7-88df-3c327f270730",
                             "feedbackValue": "10"
                         },
                         {
                             "questionID": "cddeff20-75f4-4860-9c8e-7d73b813773a",
                             "feedbackValue": "8"
                         },
                         {
                             "questionID": "a42967a0-1def-4769-969f-c6dd5b0ac05d",
                             "feedbackValue": "4"
                         },
                         {
                             "questionID": "000601ad-6a54-4de3-8735-a7fb10bbe96f",
                             "feedbackValue": "6"
                         },
                         {
                             "questionID": "e72e5305-d3ea-4c98-95ee-2e357daa68c1",
                             "feedbackValue": "2"
                         },
                         {
                             "questionID": "6944baa7-e0f0-4415-8f13-6b1665b1c329",
                             "feedbackValue": "9"
                         },
                         {
                             "questionID": "989a64f6-5269-4146-9776-027fd65e774d",
                             "feedbackValue": "1"
                         },
                         {
                             "questionID": "5ad91541-54f4-4645-8c6e-27db5b68bf88",
                             "feedbackValueText": `Aliquam nec libero et augue dignissim consequat sit amet vel augue.
                                                    Sed pellentesque felis vitae diam eleifend viverra.
                                                     In volutpat facilisis vestibulum. Mauris ut interdum ante.
                                                      Curabitur ultricies ante ac tincidunt pharetra. Etiam feugiat urna ac feugiat pellentesque.
                                                       Cras eleifend lorem vel nulla hendrerit, eu luctus dui dapibus. Fusce elementum posuere metus ac varius.
                                                        Aenean porta dignissim dui, eget pharetra lorem.`
                         },
                         {
                             "questionID": "0039fa72-dd7c-4dad-a0d1-ddcb8f74296e",
                             "feedbackValueText": `Curabitur ultricies ante ac tincidunt pharetra. Etiam feugiat urna ac feugiat pellentesque.
                                                  Cras eleifend lorem vel nulla hendrerit, eu luctus dui dapibus. Fusce elementum posuere metus ac varius.
                                                   Aenean porta dignissim dui, eget pharetra lorem.`
                         },
                         {
                             "questionID": "25732c29-9103-4f6a-bf08-ce48fd1427b7",
                             "feedbackValueText": "Lorem Ipsum. This is Comment 3..."
                         }
                          ]
                  },
                  {"id":"22576",
                  "name":"Ayoshe Rayore",
                  "questions":[
                    {
                      "questionID": "02fb06a3-934e-4845-95ef-4faf6db4ce4a",
                      "feedbackValue": "1"
                    },
                    {
                      "questionID": "461befa5-24ca-4d67-acac-da7b6a856bc6",
                      "feedbackValue": "5"
                    },
                    {
                      "questionID": "d87b8d22-2161-4476-8d5b-688fa337c25a",
                      "feedbackValue": "7"
                    },
                    {
                      "questionID": "6d06807f-73b1-4da7-88df-3c327f270730",
                      "feedbackValue": "10"
                    },
                    {
                      "questionID": "cddeff20-75f4-4860-9c8e-7d73b813773a",
                      "feedbackValue": "8"
                    },
                    {
                      "questionID": "a42967a0-1def-4769-969f-c6dd5b0ac05d",
                      "feedbackValue": "4"
                    },
                    {
                      "questionID": "000601ad-6a54-4de3-8735-a7fb10bbe96f",
                      "feedbackValue": "6"
                    },
                    {
                      "questionID": "e72e5305-d3ea-4c98-95ee-2e357daa68c1",
                      "feedbackValue": "2"
                    },
                    {
                      "questionID": "6944baa7-e0f0-4415-8f13-6b1665b1c329",
                      "feedbackValue": "9"
                    },
                    {
                      "questionID": "989a64f6-5269-4146-9776-027fd65e774d",
                      "feedbackValue": "1"
                    },
                    {
                      "questionID": "5ad91541-54f4-4645-8c6e-27db5b68bf88",
                      "feedbackValueText": "Lorem Ipsum. This is Comment 2..."
                    },
                    {
                      "questionID": "0039fa72-dd7c-4dad-a0d1-ddcb8f74296e",
                      "feedbackValueText": "Lorem Ipsum. This is Comment..."
                    },
                    {
                      "questionID": "25732c29-9103-4f6a-bf08-ce48fd1427b7",
                      "feedbackValueText": "Lorem Ipsum. This is Comment 3..."
                    }
                    ]
                }],
                  // This is for extra content for finance tab, info about learners we use from learners array...
    "finance":{"subTotal":"35,000.00",
               "venueExpense":"20,000.00",
               "simplitrainPayout":"5,000.00",
               "totalEarnings":"10,000.00"},
                                                                                                  // This is date format that you usually send, so its okay like this
    "announcements":[{"id":"5512","title":"Title No 1","description":"This is default description","dateCreated":"2021-06-29T16:58:02.921Z[Etc/UTC]"},
                     {"id":"5712","title":"Title No 2","description":"This is default description, and this is some text here....","dateCreated":"2021-06-29T16:58:02.921Z[Etc/UTC]"},
                     {"id":"1512","title":"Title No 3","description":"This is default description","dateCreated":"2021-04-29T16:58:02.921Z[Etc/UTC]"},
                     {"id":"3112","title":"Title No 4","description":"This is default description,  and this is some text here....","dateCreated":"2021-03-29T16:58:02.921Z[Etc/UTC]"},
                     {"id":"1412","title":"Title No 7","description":"This is default description,  and this is some text here....","dateCreated":"2021-02-25T16:58:02.921Z[Etc/UTC]"},
                     {"id":"7812","title":"Title No 11","description":"This is default description","dateCreated":"2021-01-29T16:58:02.921Z[Etc/UTC]"},
                     {"id":"512","title":"Title No 25","description":"This is default description","dateCreated":"2021-04-29T16:58:02.921Z[Etc/UTC]"}]
}]

export default batchDetails;
