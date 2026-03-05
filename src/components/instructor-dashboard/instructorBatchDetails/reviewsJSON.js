const reviewsJSON =[
  {"reviewID":"1235",
   "learnerID":"441",
   "learnerName":"Rohan Rajore",
   "text":"Lorem Ipsum.........",
   "dateProvided":"2021-09-05T16:58:02.921Z[Etc/UTC]",
   "isLiked":"false" // This means has instructor liked review, we would shown like btn based on that
   "isContest":"false" // This means has instructor sent contest to admins, I suppose he can contest only once per review, so thats why it is here
 },
 {"reviewID":"335",
  "learnerID":"241",
  "learnerName":"Rohan Rajore",
  "text":"Lorem Ipsum.........",
  "dateProvided":"2021-09-06T16:58:02.921Z[Etc/UTC]",
  "isLiked":"false" // This means has instructor liked review, we would shown like btn based on that
  "isContest":"true" // This means has instructor sent contest to admins, I suppose he can contest only once per review, so thats why it is here
},
{"reviewID":"1235221",
 "learnerID":"4414551",
 "learnerName":"Rohan Rajore",
 "text":"Lorem Ipsum.........",
 "dateProvided":"2021-09-75T16:58:02.921Z[Etc/UTC]",
 "isLiked":"true" // This means has instructor liked review, we would shown like btn based on that
 "isContest":"false" // This means has instructor sent contest to admins, I suppose he can contest only once per review, so thats why it is here
},
]

export default reviewsJSON;
