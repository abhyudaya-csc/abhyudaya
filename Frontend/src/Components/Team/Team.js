const teamsData = [
//   {
//     Position: "Convenor",
//     Name: "Aryan Singh",
//     Year: "Final Year",
//     Branch: "CSE",

//     LinkedInId: "https://www.linkedin.com/in/aryan-singh-7b1b3b228",
//     InstaId: "aryansingh_07?igshid=1v6c4l0c5s6j7",

//     Photo: "https://i.postimg.cc/nhpG3Zmg/AryanSingh.jpg",   // original with background
//     PhotoCutout: "/team/Aryan.png",  // background removed PNG
  
//   },
//   {
//     Position: "Co-Convenor ",
//     Name: "Ishan Mishra",
//     Year: "Final Year",
//     Branch: "E.E",

//     LinkedInId: "https://www.linkedin.com/in/ishan-mishra-ab108b228/",
//     InstaId: "i.mishra",
//     Photo: "https://i.postimg.cc/ZqKDdRPP/Ishan_Mishra.jpg",
//     PhotoCutout: "/team/Ishan-Mishra.png", 
//   },
//   {
//     Position: "Technical Head",
//     Name: "Shreyas Kumar",
//     Year: "Final Year",
//     Branch: "CSE",

//     LinkedInId:
//       "https://www.linkedin.com/in/shreyas-kumar-416093230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     InstaId:
//       "shreyas_kumar_411?igsh=MTRubzhld2Mxcng5Mw==",
//     Photo: "https://i.postimg.cc/0QXkkR7N/Shreyas-Kumar.jpg",
//   },
//   {
//     Position: "Technical Head",
//     Name: "Pritish Tomar",
//     Year: "Final Year",
//     Branch: "IT",

//     LinkedInId: "https://www.linkedin.com/in/pritish-tomar/",
//     InstaId: "pritiish.tomar/",
//     Photo: "https://i.postimg.cc/YqZvNgGS/Pritish-tomar.jpg",
//     PhotoCutout: "/team/Pritish-tomar.png",
//   },
//   {
//     Position: "Media & Publicity Head ",
//     Name: "Ankur Vansha ",
//     Year: "Final Year",
//     Branch: "E.E",

//     LinkedInId: "",
//     InstaId: "a.vansha",
//     Photo: "https://i.postimg.cc/gjKKXskr/Ankur-Vansha.jpg",
//   },
//   {
//     Position: "Public Relations Head",
//     Name: "Aryan Raj Pandey",
//     Year: "Final Year",
//     Branch: "CE",

//     LinkedInId: "",
//     InstaId: "/",
//     Photo: "https://i.postimg.cc/m28wTm55/Aryan-Raj-Pandey.jpg",
//   },

//  /*  {
//     Position: "Public Relations Head",
//     Name: "Satish kumar ",
//     Year: "Final Year",
//     Branch: "EE",

//     LinkedInId: "https://linkedin.com/in/satishkumar-263290235",
//     InstaId: "Satish8569kumar ",
//     Photo: "https://i.postimg.cc/k59Xwyn7/Satish-Kumar.jpg",
//   },*/
//   {
//     Position: "Techincal Head",
//     Name: "Rahul Singh",
//     Year: "Final Year",
//     Branch: "CSE",

//     LinkedInId: "https://linkedin.com/in/rahulsingh108",
//     InstaId: "rahulunscripted_",
//     Photo: "https://i.postimg.cc/xdyqS4sk/Rahul-Singh.jpg",
//   },
//   {
//     Position: "Design Head",
//     Name: "Tushar Gupta",
//     Year: "Final Year",
//     Branch: "ECE",

//     LinkedInId: "https://www.linkedin.com/in/tushar-gupta-s/",
//     InstaId: "_tushargupta/",
//     Photo:
//       "https://i.ibb.co/bgkXZ07c/Whats-App-Image-2025-03-10-at-15-58-08-43dc2cbf.jpg",
//   },
//   {
//     Position: "Design Head",
//     Name: "Srishti",
//     Year: "Final Year",
//     Branch: "ECE",

//     LinkedInId: "https://www.linkedin.com/in/srishti-665766229/",
//     InstaId: "srishtis045",
//     Photo: "https://i.postimg.cc/XJKJvV8S/Srishti.jpg",
//   },
//   {
//     Position: "Content Head",
//     Name: "Akshat Saxena",
//     Year: "Final Year",
//     Branch: "IT",

//     LinkedInId:
//       "https://www.linkedin.com/in/akshat-saxena-26073a229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     InstaId:
//       "i.akshatsaxena?igsh=MXMwYzlzYW9xcTZjYg==",
//     Photo: "https://i.postimg.cc/MKxP6MKv/Akshat-saxena.jpg",
//   },

//   {
//     Position: "Content Head",
//     Name: "Vanshika Verma",
//     Year: "Final Year",
//     Branch: "B.pharma",

//     LinkedInId: "https://www.linkedin.com/in/vanshika-verma-115323230/",
//     InstaId: "vanshiika.verma",
//     Photo: "https://i.postimg.cc/c1VKww8L/Vanshika-Verma.jpg",
//   },

//   // {
//   //   Position: "Events Head ",
//   //   Name: "Jayant Lal ",
//   //   Year: "Final Year",
//   //   Branch: "CSE",

//   //   LinkedInId: "linkedin.com/in/jayant24dec",
//   //   InstaId: "jayant24dec",
//   //   Photo: "https://i.postimg.cc/dQndCLj7/Jayant-Lal.jpg"
//   // },
//   {
//     Position: "Treasurer",
//     Name: "Prakhar Sachan",
//     Year: "Final Year",
//     Branch: "IT",

//     LinkedInId: "",
//     InstaId: "/",
//     Photo: "",
//   },
//   {
//     Position: "Events Head",
//     Name: "Shreya Singh",
//     Year: "Final Year",
//     Branch: "",

//     LinkedInId: "https://www.linkedin.com/in/",
//     InstaId: "/",
//     Photo: "https://i.postimg.cc/zB61sz21/Shreys-Singh.jpg",
//   },

//   {
//     Position: "Sponsorship Head",
//     Name: "Arsh Ranjan Singh",
//     Year: "Final Year",
//     Branch: "",

//     LinkedInId: "https://www.linkedin.com/in/",
//     InstaId: "/",
//     Photo: "",
//   },

//   // {
//   //   Position: "Executive member ",
//   //   Name: "MAYANK JAISWAL",
//   //   Year: "Final Year",
//   //   Branch: "EE",

//   //   LinkedInId: "https://www.linkedin.com/in/mayank-jaiswal-071b47255",
//   //   InstaId: "mayankjaiswal0308",
//   //   Photo: "https://i.postimg.cc/TP8Wxmfs/Mayank-Jaiswal.jpg"
//   // },
//   {
//     Position: "Executive member ",
//     Name: "Akshay kumar",
//     Year: "Final Year",
//     Branch: "EE",

//     LinkedInId: "https://www.linkedin.com",
//     InstaId: "ax.shayy__",
//     Photo: "https://i.postimg.cc/sxPTPyKj/Akshay-Kumar.jpg",
//   },

  // {
  //   Position: "Executive member ",
  //   Name: "Saanvi Gupta ",
  //   Year: "Final Year",
  //   Branch: "CSE",

  //   LinkedInId: "....",
  //   InstaId: "saanviii17?igsh=dDkyZWpidnM0d2lq",
  //   Photo: "https://i.postimg.cc/5yjtLNfv/Saanvi-Gupta.jpg"
  // },
  // {
  //   Position: "Executive member ",
  //   Name: "Harshita Mishra ",
  //   Year: "Final Year",
  //   Branch: "ECE",

  //   LinkedInId: "https://www.linkedin.com/in/harshita-mishra-66108b228/",
  //   InstaId: "harrshhitaa",
  //   Photo: "https://i.postimg.cc/k4m8QSHS/Harshita-Mishra.jpg"
  // },

  // {
  //   Position: "Executive member ",
  //   Name: "Awantika Krishna",
  //   Year: "Final Year",
  //   Branch: "IT",

  //   LinkedInId: "https://www.linkedin.com/in/awantika-krishna-422101228",
  //   InstaId: "i_want_tika.22?igsh=aGplNDF5cm1kM3c0",
  //   Photo: "https://i.postimg.cc/rptCCMFB/Awantika-Krishna.jpg"
  // },

  // {
  //   Position: "Executive member ",
  //   Name: "AKANKSHA PAL",
  //   Year: "Final Year",
  //   Branch: "EE",

  //   LinkedInId: "https://www.linkedin.com/in/akanksha-pal-855696230",
  //   InstaId: "akankshaaa_17_?igsh=MWc0ejgxbmdpczIxdA==",
  //   Photo: "https://i.postimg.cc/nL5Sp3CJ/Akanksha-Pal.jpg"
  // },

  // {
  //   Position: "Executive member ",
  //   Name: "Lavanya Gupta",
  //   Year: "Final Year",
  //   Branch: "IT",

  //   LinkedInId: "www.linkedin.com/in/lavanya-gupta-b20089228",
  //   InstaId: "lav.anyagupta",
  //   Photo: "https://i.postimg.cc/L8gZGvKf/Lavanya-Gupta.jpg"
  // },
  // {
  //   Position: "Executive member ",
  //   Name: "Khwaab Jaiswal ",
  //   Year: "Final Year",
  //   Branch: "CSE",

  //   LinkedInId: "https://www.linkedin.com/in/khwaab-jaiswal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   InstaId: "khwaab.jais?igsh=MTB2cmNlNGVwaGtqYg==",
  //   Photo: "https://i.postimg.cc/J4nX5Mpp/khwaab-jaiswal.jpg"
  // },
  // {
  //   Position: "Executive member ",
  //   Name: "Sumit Kumar ",
  //   Year: "Final Year",
  //   Branch: "IT",

  //   LinkedInId: "www.linkedin.com/in/sumit-kumar-bbb38b230",
  //   InstaId: "watson.sumit",
  //   Photo: "https://i.postimg.cc/C1506P9p/Sumit-Kumar.jpg"
  // },
  {
    Position: "Convener",
    Name: "Shivam Rai ",
    Year: "Final Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/shivam-rai-a64b84298",
    InstaId: "shivam_rai_2299?igsh=dm5scjJpOHYwOGdx",
    Photo: "https://i.ibb.co/6CBYSWz/Whats-App-Image-2026-03-12-at-1-06-48-PM.jpg",
    PhotoCutout: "https://i.ibb.co/qLqQ596v/Whats-App-Image-2026-03-12-at-1-06-48-PM-removebg-preview.png"
  },
  {
    Position: "Co-Convener",
    Name: "Richa Mishra ",
    Year: "Final Year",
    Branch: "ME",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "richa.mishra",
    Photo: "https://i.postimg.cc/VkfHn917/Richa-Mishra.jpg",
        PhotoCutout: "https://i.ibb.co/j9yWc25c/Richa-Mishra.png"
  },
{
    Position: "Treasurer",
    Name: "Amar Yadav ",
    Year: "Final Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "amaryadav7146",
    Photo: "https://i.ibb.co/zh5CXxsJ/Whats-App-Image-2026-03-12-at-1-05-05-PM.jpg",
        PhotoCutout: "https://i.ibb.co/SDV6Qsjs/Whats-App-Image-2026-03-12-at-1-05-05-PM-removebg-preview.png"
  },
  {
    Position: "Treasurer",
    Name: "Vivek Mani Tripathy",
    Year: "Final Year",
    Branch: "I.T",

    LinkedInId:
      "https://www.linkedin.com/in/vivek-mani-tripathy-429177223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "iamvmt?igsh=MTVzYjMxb3Rra3JjMw==",
    Photo: "https://i.postimg.cc/5t09Z2Fr/VMT.jpg",
    PhotoCutout: "https://i.ibb.co/TBMnZpPV/VMT.png"
  },
  {
  
    Position: "Sponsorship Head",
    Name: "Aastha Singh",
    Year: "Final Year",
    Branch: "CE",

    LinkedInId: "https://in.linkedin.com/",
    InstaId: "accounts/login/?hl=en",
    Photo: "https://i.ibb.co/7NKL0Msn/Astha-singh.jpg",
    PhotoCutout: "https://i.ibb.co/ZzJf3P1D/Astha-singh-removebg-preview.png"
    
  },
  {
    Position: "Sponsorship Head",
    Name: "Vidhi Gupta",
    Year: "Final Year",
    Branch: "CSE",

    LinkedInId: "temporarily restricted",
    InstaId: "Vidhi__8479",
    Photo: "https://i.postimg.cc/fW3tVByP/Vidhi-Gupta.jpg",
    PhotoCutout:"https://i.ibb.co/hFm97cWt/Vidhi-Gupta-removebg-preview.png"
  },
  {
    Position: "Sponsorship Head",
    Name: "Manmohan Shukla",
    Year: "Final Year",
    Branch: "CSE",

    LinkedInId: "temporarily restricted",
    InstaId: "/",
    Photo: "https://i.ibb.co/RTtT9R0R/Manmohan-Shukla.jpg",
    PhotoCutout:"https://i.ibb.co/mrGnTfjY/Manmohan-Shukla-removebg-preview.png"
  },
  {
    Position: "Public Relation Head",
    Name: "Jayant Singh",
    Year: "Final Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/jayant-singh-a36a96266",
    InstaId: "",
    Photo: "https://i.postimg.cc/8ck63SNP/Jayant-Singh.jpg",
    PhotoCutout: "https://i.ibb.co/LdsYsxkZ/Jayant-Singh.png"
  },
  {
    Position: "Public Relation Head",
    Name: "Ritika Rao",
    Year: "Final Year",
    Branch: "ECE",

    LinkedInId:
      "https://www.linkedin.com/in/ritika-rao-a6a447257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "ritikarao2352?igsh=emk5Mmdrbmxncmdm",
    Photo: "https://i.postimg.cc/htmf2jT1/Ritika-rao.jpg",
        PhotoCutout: "https://i.ibb.co/wNGSVZw7/Ritika-rao.png",
  },
  {
    Position: "Content Head ",
    Name: "Nandini Mishra",
    Year: "Final Year",
    Branch: "CE",

    LinkedInId: "www.linkedin.com",
    InstaId: "_nan_dinii",
    Photo: "https://i.ibb.co/tM6wDFYf/Whats-App-Image-2026-03-12-at-1-04-52-PM.jpg",
    PhotoCutout: "https://i.ibb.co/6RZZBVZY/Whats-App-Image-2026-03-12-at-1-04-52-PM-removebg-preview.png",
  },
  {
    Position: "Content Head ",
    Name: "Anvita Khare",
    Year: "Final Year",
    Branch: "CE",

    LinkedInId: "www.linkedin.com",
    InstaId: "_nan_dinii",
    Photo: "https://i.ibb.co/p6YQ5xZk/Anvita-Khare.jpg",
    PhotoCutout: "https://i.ibb.co/Vp9WvQ2R/Anvita-Khare-removebg-preview.png",
  },
  {
    Position: "Online Head",
    Name: "Ashish Raj ",
    Year: "Final Year",
    Branch: "CSE",

    LinkedInId:
      "https://www.linkedin.com/in/ashish-raj-482a47255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "ashishraj6219?igsh=Zmp3anhzY3RudTQ5",
    Photo: "https://i.ibb.co/7xKs8LKT/Ashish-Raj.jpg",
    PhotoCutout: "https://i.ibb.co/3msLz643/Ashish-Raj-removebg-preview.png"
  },
  {
    Position: "Online Head ",
    Name: "AADRIKA BARNWAL",
    Year: "Final Year",
    Branch: "IT",

    LinkedInId: "www.linkedin.com",
    InstaId: "aadreeeka ",
    Photo: "https://i.ibb.co/SDQLtxjF/20250812-053144-Aadreeka-Barnwal.jpg",
    PhotoCutout: "https://i.ibb.co/s9H3p6NY/20250812-053144-Aadreeka-Barnwal-removebg-preview.png",
  },
  {
    Position: "Technical Head",
    Name: "Anas Kausar ",
    Year: "Final Year",
    Branch: "Mech",

    LinkedInId: "http://www.linkedin.com/in/harshit-pandit",
    InstaId: "harshit__panditt",
    Photo: "https://i.ibb.co/fdbpz5y9/IMG-20250331-WA0032-Anas-Kausar.jpg",
    PhotoCutout: "https://i.ibb.co/gLH9Fb86/IMG-20250331-WA0032-Anas-Kausar-removebg-preview.png"
  },
  {
    Position: "Technical Head",
    Name: "Harshit Pandey ",
    Year: "Final Year",
    Branch: "Mech",

    LinkedInId: "http://www.linkedin.com/in/harshit-pandit",
    InstaId: "harshit__panditt",
    Photo: "https://i.ibb.co/4gs8vg6k/Harshit-Pandey.png",
    PhotoCutout: "https://i.ibb.co/fzz1NrDG/Harshit-pandey.png"
  },
  {
    Position: "Media & Publicity Head",
    Name: "Madhur Pratap Singh",
    Year: "Final Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/madhur-gaur-mmmut/",
    InstaId: "madhurgaur_",
    Photo: "https://i.postimg.cc/FRNdd4fg/MPSG.jpg",
    PhotoCutout:"https://i.ibb.co/FNj8FkR/MPSG-removebg-preview.png"
  },
  {
    Position: "Technical Executive",
    Name: "Vishwadeep singh",
    Year: "Final Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "heyyvishu",
    Photo: "https://i.postimg.cc/bvBY8fxw/vishwadeep-singh.jpg",
    PhotoCutout: "https://i.ibb.co/cS2nvGsw/vishwadeep-singh.png"
  },
  

  
  {
    Position: "Design & Devlopment Head",
    Name: "Divyansh Gupta ",
    Year: "Final Year",
    Branch: "C.S.E",

    LinkedInId: "https://www.linkedin.com/in/divyansh-gupta-b9a435249",
    InstaId: "_the_divyansh123_",
    Photo: "https://i.ibb.co/qYB2PQ11/Whats-App-Image-2026-03-12-at-1-07-04-PM.jpg",
    PhotoCutout: "https://i.ibb.co/HftgF41t/Whats-App-Image-2026-03-12-at-1-07-04-PM-removebg-preview.png"
  },
  

  /*{
    Position: "Executive member ",
    Name: "Abhyodaya Pratap Singh ",
    Year: "Final Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/abhyodaya-pratap-singh-895190258",
    InstaId: "abhi.7.i",
    Photo: "https://i.postimg.cc/pXYSzQ1f/Abhyodaya-Singh.jpg",
    PhotoCutout: "https://i.ibb.co/GfQ1WG9p/Abhyodaya-Singh.png",
  },*/
  // {
  //   Position: "Executive member ",
  //   Name: "Vishal kotak",
  //   Year: "3rd Year",
  //   Branch: "IT",
  //
  //   LinkedInId: "https://www.linkedin.com/in/vishal-kotak-0a532625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   InstaId: "Kotak.vishal__",
  //   Photo: "https://i.postimg.cc/fTnLJs63/Vishal-Kotak.jpg"
  // },
 /* {
    Position: "Executive member ",
    Name: "Harsh singh",
    Year: "3rd Year",
    Branch: "Civil",

    LinkedInId:
      "https://www.linkedin.com/in/harsh-singh-642793203?trk=contact-info",
    InstaId: "Harsh_singh0617",
    Photo: "https://i.postimg.cc/kgLW5zFf/harsh-singh.jpg",
  },*/
  {
    Position: "Core member ",
    Name: "Arun Kumar ",
    Year: "3rd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com/in/arun-kumar-508722276",
    InstaId: "arukumar6094",
    Photo: "https://i.ibb.co/bMQzBFhK/IMG-20251014-WA0080-Arun-Kumar.jpg",
    PhotoCutout: "https://i.ibb.co/Wpc96797/IMG-20251014-WA0080-Arun-Kumar-removebg-preview.png",
  },
  /*{
    Position: "PR Coordinator",
    Name: "Ayushi Tiwari",
    Year: "Final Year",
    Branch: "BBA",

    LinkedInId: "https://in.linkedin.com/in/ayushi-tiwari-338721281",
    InstaId: "taayushi520",
    Photo: "https://i.postimg.cc/d122p6Cn/Ayushi-Tiwari.jpg",
    PhotoCutout: "https://i.ibb.co/zHB5ySG0/Ayushi-Tiwari.png",
  },*/
  {
    Position: "Design Head",
    Name: "Anshika Verma ",
    Year: "Final Year",
    Branch: "IT",

    LinkedInId:
      "https://www.linkedin.com/in/anshika-verma-137165257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "_anshikaverma23?igsh=d2Y1aDQyc3MzdzFo",
    Photo: "https://i.postimg.cc/d1r6vvb2/Anshika-Verma.jpg",
    PhotoCutout: "https://i.ibb.co/fdr3FYJH/Anshika-Verma.png",
  },
  {
    Position: "Dance Head",
    Name: "Akshita Upadhyay ",
    Year: "Final Year",
    Branch: "EE",

    LinkedInId: "www.linkedin.com ",
    InstaId: "_.akshita._1409",
    Photo: "https://i.ibb.co/0p3swfZv/Snapchat-1974554297-Akshita-Upadhyay.jpg",
    PhotoCutout: "https://i.ibb.co/C5ghbFsM/Snapchat-1974554297-Akshita-Upadhyay-removebg-preview.png",
  },
  // {
  //   Position: "Executive member ",
  //   Name: "Yash Pratap Singh",
  //   Year: "3rd Year",
  //   Branch: "ECE",

  //   LinkedInId: "https://www.linkedin.com/in/yash-pratap-singh-905499249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   InstaId: "/",
  //   Photo: "https://i.postimg.cc/XqwnwZTr/Yash-Pratap-Singh.jpg"
  // },
 /* {
    Position: "Executive member ",
    Name: "Dipendra Singh",
    Year: "3rd Year",
    Branch: "EE",

    LinkedInId:
      "https://www.linkedin.com/in/dipendra-singh-573446264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "dip.x.music?igsh=OTF3cGRubW5nYzBj",
    Photo: "https://i.postimg.cc/g2xvmmRx/Dipendra-Singh.jpg",
  },*/
  // {
  //   Position: "Executive member ",
  //   Name: "Ritik Bind",
  //   Year: "3rd Year",
  //   Branch: "EE",
  //
  //   LinkedInId: "https://www.linkedin.com/in/ritikbind15",
  //   InstaId: "ritik.j3",
  //   Photo: "https://i.postimg.cc/C5txNTK2/Ritik-Kumar.webpsaa"
  // },
  // {
  //   Position: "Executive member ",
  //   Name: "Prisha Agrawal",
  //   Year: "3rd Year",
  //   Branch: "CSE",

  //   LinkedInId: "https://www.linkedin.com/in/prisha-agrawal-813417278/",
  //   InstaId: "prishaaa_agrawal",
  //   Photo: "hhttps://i.postimg.cc/2jHb6gCh/Prisha-Agrawal.jpg"
  // },
  
  {
    Position: "Core member ",
    Name: "Shivam Pal",
    Year: "Final Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/shivampalofficial13",
    InstaId: "/",
    Photo: "https://i.postimg.cc/2jXymvxx/Shivam-Pal.jpg",
        PhotoCutout: "https://i.ibb.co/hJRds14v/Shivam-Pal.png",
  },
  // {
  //   Position: "Executive member ",
  //   Name: "Srishti Singh ",
  //   Year: "Final Year",
  //   Branch: "BBA",

  //   LinkedInId: "https://www.linkedin.com",
  //   InstaId: "Srishti_singh.25",
  //   Photo: "https://i.postimg.cc/G3NL6Rc7/Srishti-Singh.jpg",
  //   PhotoCutout: "https://i.ibb.co/nN6phFHH/Srishti-Singh.png",
  // },

  {
    Position: "Design Head ",
    Name: "Yashi Kardam ",
    Year: "Final Year",
    Branch: "IT",

    LinkedInId:
      "https://www.linkedin.com/in/yashi-kardam-81288a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId:
      "yashiiii24_/profilecard/?igsh=ZDlmNjE5Yjl4czc0",
    Photo: "https://i.ibb.co/1tRqVdS7/Yashi-ma-am.jpg",
    PhotoCutout: "https://i.ibb.co/Gvm6gSM5/Yashi-ma-am-removebg-preview.png",
  },
  {
    Position: "Core Executive ",
    Name: "Samyak Jain",
    Year: "Final Year",
    Branch: "IT",

    LinkedInId:
      "https://www.linkedin.com/in/samyakjain507?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "justt.samyak",
    Photo: "https://i.postimg.cc/NMdMKrvB/Samyak-Jain.jpg",
    PhotoCutout: "https://i.ibb.co/7dsrTD4N/Samyak-Jain.png",
  },
  {
    Position: "Core Member ",
    Name: "Dipendra Singh",
    Year: "Final Year",
    Branch: "EE",

    LinkedInId:
      "https://www.linkedin.com/in/dipendra-singh-573446264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "justt.samyak",
    Photo: "https://i.ibb.co/ZpfWZSbL/IMG-20260312-143125-Dipendra-Singh.jpg",
    PhotoCutout: "https://i.ibb.co/b5k4dHN3/IMG-20260312-143125-Dipendra-Singh-removebg-preview.png",
  },

 /* {
    Position: "Executive member ",
    Name: "Sonu Kumar ",
    Year: "3rd Year",
    Branch: "CE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "ace._.sonu07",
    Photo: "https://i.postimg.cc/j2GRfHg0/sonu-kumar.jpg",
  },*/
  {
    Position: "Executive member ",
    Name: "Aditi Sharma ",
    Year: "3rd Year",
    Branch: "E.C.E",

    LinkedInId:
      "https://www.linkedin.com/in/aditi-sharma-2a01a3308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId:
      "aditi.rs.3112?igsh=MXNqa3BmcWM3eDFnZw==",
    Photo: "https://i.postimg.cc/TPhNzz20/Aditi-Sharma.jpg",
    PhotoCutout: "https://i.ibb.co/tTB6Gcwd/Aditi-Sharma.png",
  },
  {
    Position: "Executive Member",
    Name: "Abhishek Kumar Nigam",
    Year: "3rd Year",
    Branch: "E.E",

    LinkedInId: "https://www.linkedin.com/in/abhishek-kumar-nigam-665925294/",
    InstaId: "imabhishek40/",
    Photo: "https://i.postimg.cc/nVqSfYxy/AKN.png",
    PhotoCutout: "https://i.ibb.co/q3HhHR8W/AKN.png",
  },
  // {
  //   Position: "Executive member ",
  //   Name: "Chandan Gupta ",
  //   Year: "3rd Year",
  //   Branch: "CSE",

  //   LinkedInId:
  //     "https://www.linkedin.com/in/chandan-gupta-90576229b/?originalSubdomain=in",
  //   InstaId: "__chandan__gupta/",
  //   Photo: "https://i.postimg.cc/vTGrsnLy/Chandan-Gupta.jpg",
  //       PhotoCutout: "https://i.ibb.co/wjmVF8g/Chandan-Gupta.png",
  // },
  {
    Position: "Executive member ",
    Name: "Alok kumar ",
    Year: "3rd Year",
    Branch: "E.C.E",

    LinkedInId: "https://www.linkedin.com/in/alok-kumar-6374aa299",
    InstaId: "alok_k.775",
    Photo: "https://i.postimg.cc/43rPrnS4/Alok-kumar.png",
            PhotoCutout: "https://i.ibb.co/hRb34c85/Alok-kumar.png",
  },

  {
    Position: "Executive member ",
    Name: "Vinayak Yadav ",
    Year: "3rd Year",
    Branch: "IT",

    LinkedInId:
      "https://www.linkedin.com/in/vinayak-yadav-79a6a0294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId:
      "vinayak_y0/profilecard/?igsh=MTNlNnpzdm1jZDE3Zg==",
    Photo: "https://i.postimg.cc/8PM7HchB/VINAYAK-YADAV.jpg",
    PhotoCutout: "https://i.ibb.co/WJZRnmV/VINAYAK-YADAV.png",
  },
  {
    Position: "Executive member ",
    Name: "Yashvardhan Ojha ",
    Year: "3rd Year",
    Branch: "C.S.E",

    LinkedInId:
      "https://www.linkedin.com/in/yashvardhan-ojha-b5b325287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "yashvardhan.ojha?igsh=YWZlc2lqbDd1b3Bi",
    Photo: "https://i.postimg.cc/1Xx9n0Yx/Yashvarshan-Ojha.jpg ",
    PhotoCutout: "https://i.ibb.co/93hWr4qS/Yashvarshan-Ojha.png",
  },
  {
    Position: "Executive member ",
    Name: "Shatakshi Srivastava ",
    Year: "3rd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "shatakshi.srivastava188",
    Photo: "https://i.ibb.co/1Y12H74T/Sataakshi-Srivastava.jpgg",
    PhotoCutout: "https://i.ibb.co/7dWX5hJL/Sataakshi-Srivastava-removebg-preview.png",
  },
  {
    Position: "Executive member ",
    Name: "Vaishnavi Rai",
    Year: "3rd Year",
    Branch: "CE",

    LinkedInId: "https://www.linkedin.com/in/vaishnavi-rai-540b41294",
    InstaId: "vaishnavirai2409",
    Photo: "https://i.postimg.cc/s1dRxVx3/Vaishnavi-Rai.jpg",
    PhotoCutout: "https://i.ibb.co/0pnbCgbG/Vaishnavi-Rai.png",
  },
  {
    Position: "Executive member ",
    Name: "Shashikant Vishwakarma ",
    Year: "3rd Year",
    Branch: "C.S.E",

    LinkedInId: "https://www.linkedin.com/in/shashikant-vishwakarma-8737b2293",
    InstaId: "_shashikant97_",
    Photo: "https://i.postimg.cc/CLB1K1Pp/Shashikant-Vishwakarma.jpg",
    PhotoCutout: "https://i.ibb.co/PZqD2vxc/Shashikant-Vishwakarma.png",
  },
  // {
  //   Position: "EXECUTIVE MEMBER",
  //   Name: "AVIRAL OMAR",
  //   Year: "3rd Year",
  //   Branch: "Chemical",

  //   LinkedInId:
  //     "https://www.linkedin.com/in/aviral-omar-763878294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  //   InstaId: "aviral.xy",
  //   Photo: "https://i.postimg.cc/HxD06RrV/Aviral-Omar.jpg",
  //   PhotoCutout: "https://i.ibb.co/N66p9qRk/Aviral-Omar.png",
  // },
  {
    Position: "Executive member ",
    Name: "Vishal Yadav",
    Year: "3rd Year",
    Branch: "E.E",

    LinkedInId: "https://www.linkedin.com/in/vishal-yadav-278627275",
    InstaId: "vishalmmmut27",
    Photo: "https://i.postimg.cc/Vk4LGC5M/Vishal-Yadav.jpg",
    PhotoCutout: "https://i.ibb.co/RkbVV9Cf/Vishal-Yadav-removebg-preview.png",
  },
  {
    Position: "Executive member ",
    Name: "Arnav Mishra",
    Year: "3rd Year",
    Branch: "MECH",

    LinkedInId: "https://www.linkedin.com/in/arnav-mishra-0246b9235",
    InstaId: "arnavamoghofficial",
    Photo: "https://i.postimg.cc/xT05rwtm/Arav-Mishra.jpg",
    PhotoCutout: "https://i.ibb.co/FktyHd8h/Arav-Mishra.png",
  },
  {
    Position: "Executive member ",
    Name: "Sudhanshu Kumar Yadav",
    Year: "3rd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com/in/sudhanshu-yadav-2023031072ee",
    InstaId: "5udh.anshu",
    Photo: "https://i.postimg.cc/T3vRYc5n/Sudhanshu-Yadav.jpg",
    PhotoCutout: "https://i.ibb.co/6c06c5VQ/Sudhanshu-Yadav.png",
  },
  {
    Position: "Executive member ",
    Name: "Vishu Srivastava ",
    Year: "3rd Year",
    Branch: "ECE(IoT)",

    LinkedInId: "https://in.linkedin.com/in/vishu-srivastava-882109134",
    InstaId: "vishus0415",
    Photo: "https://i.postimg.cc/L8m83T42/Vishu-Srivastava.png",
    PhotoCutout: "https://i.ibb.co/kgFc4sy1/Vishu-Srivastava.png",
  },
  {
    Position: "Executive member ",
    Name: "Anurag Dixit",
    Year: "3rd Year",
    Branch: "ECE(IoT)",

    LinkedInId: "https://www.linkedin.com/in/anurag-dixit-585910294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "https://www.instagram.com/anuraagx001/",
    PhotoCutout: "https://i.ibb.co/pB6VmbkT/Anurag-Dixit-removebg-preview.png",
    Photo: "https://i.ibb.co/yF04HsQQ/Anurag-Dixit.jpg",
  },
  
  {
    Position: "Executive member ",
    Name: "Snehil Saxena ",
    Year: "3rd Year",
    Branch: "IT",

    LinkedInId: "https://www.linkedin.com/in/snehil-saxena-b541a4264/",
    InstaId: "snehil341",
    Photo: "https://i.postimg.cc/Rh3MqsTL/Snehil-Saxena.jpg",
    PhotoCutout: "https://i.ibb.co/yFJ4cRXg/Snehil-Saxena.png",
  },
  {
    Position: "Executive member ",
    Name: "Anju Mani",
    Year: "3rd Year",
    Branch: "ECE(IoT)",

    LinkedInId:
      "https://www.linkedin.com/in/anju-mani-50725827b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "anju_mani07?igsh=MWt4d3A2c2llcjh5",
    Photo: "https://i.postimg.cc/3wy9S29b/Anju-Mani.jpg",
    PhotoCutout: "https://i.ibb.co/KcGdWBfD/Anju-Mani.png",
  },

  {
    Position: "Executive member ",
    Name: "Ajay Kumar ",
    Year: "3rd Year",
    Branch: "CE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "ajay_ak00",
    Photo: "https://i.postimg.cc/W3kW30kJ/Ajay.jpg",
    PhotoCutout: "https://i.ibb.co/5xj1hR3L/Ajay.png",
  },
  {
    Position: "Executive member ",
    Name: "Ritesh Srivastava ",
    Year: "3rd Year",
    Branch: "BBA",

    LinkedInId:
      "https://www.linkedin.com/in/ritesh-srivastava-59825626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId:
      "_riteshsrivastava_?igsh=eWZkZG82a3h6djNy",
    Photo: "https://i.postimg.cc/MG8XNSY2/Ritesh-Srivastava.jpg",
    PhotoCutout: "https://i.ibb.co/BHCP6f6d/Ritesh-Srivastava.png",
  },
  {
    Position: "Executive member ",
    Name: "Amit Chaurasiya ",
    Year: "3rd Year",
    Branch: "MECH",
    LinkedInId: "https://www.linkedin.com/in/amit-chaurasiya-aab24a294",
    InstaId: "_a.m.i.t_30",
    Photo: "https://i.postimg.cc/nhh3mymx/Amit-Chaurasiya.jpg",
    PhotoCutout: "https://i.ibb.co/mmpn763/Amit-Chaurasiya.png",
  },
  {
    Position: "Executive member ",
    Name: "HIMANSHU MISHRA",
    Year: "3rd Year",
    Branch: "CHEMICAL",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "h_m_n_s_u_",
    Photo: "https://i.postimg.cc/cJYwthFZ/Himanshu-mishra.png",
    PhotoCutout: "https://i.ibb.co/3ycvrtgJ/Himanshu-mishra.png",
  },

  {
    Position: "Executive member ",
    Name: "Anurag Gangwar ",
    Year: "3rd Year",
    Branch: "MECH",

    LinkedInId: "https://www.linkedin.com ",
    InstaId: "_anrggg1",
    Photo: "https://i.postimg.cc/8cGHz9Gq/Anurag-Gangwar.jpg",
    PhotoCutout: "https://i.ibb.co/bMFvsSB2/Anurag-Gangwar.png",
  },
  {
    Position: "Executive member ",
    Name: "Shreyansh Singh Sengar",
    Year: "3rd Year",
    Branch: "MECH",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "_.sengar.shreyansh06._",
    Photo: "https://i.postimg.cc/cL7dK8f2/Shreyansh.jpg",
    PhotoCutout: "https://i.ibb.co/5X2HDdYj/Shreyansh.png",
  },
  {
    Position: "Executive member ",
    Name: "Pranav Mishra",
    Year: "3rd Year",
    Branch: "IT",

    LinkedInId:
      "https://www.linkedin.com/in/pranav-mishra-8a7908294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId:
      "er._pranav_mishra?igsh=MXR1bjc3MGU4bzR4MA==",
    Photo: "https://i.postimg.cc/C56zQncm/Pranav-Mishra.png",
    PhotoCutout: "https://i.ibb.co/whMN2jmF/Pranav-Mishra.png",
  },
  {
    Position: "Executive member ",
    Name: "Pragya Kumari ",
    Year: "3rd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com ",
    InstaId: "sowhatpraxya",
    Photo: "https://i.postimg.cc/sXmB5N7F/Pragya.jpg",
    PhotoCutout: "https://i.ibb.co/BKv5xBkr/Pragya.png",
  },
  {
    Position: "Executive member ",
    Name: "Utkarsh Pandey ",
    Year: "3rd Year",
    Branch: "CE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "utkarsh.pandey18",
    Photo: "https://i.postimg.cc/hjYnF8qz/Utkarsh-Pandey.jpg",
    PhotoCutout: "https://i.ibb.co/gbfnBykf/Utkarsh-Pandey.png",
  },
  {
    Position: "Executive member ",
    Name: "Shristi Pandey ",
    Year: "3rd Year",
    Branch: "CE",

    LinkedInId:
      "https://www.linkedin.com/in/shristi-pandey-452078294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId:
      "hey.shristii_?igsh=MWwyMWtrcGVueWg1cA==",
    Photo: "https://i.postimg.cc/GhyLCftc/Shristi-Pandey.jpg",
    PhotoCutout: "https://i.ibb.co/SDpKbcLm/Shristi-Pandey.png",
  },
  {
    Position: "Executive member ",
    Name: "Shreya Baboota",
    Year: "3rd Year",
    Branch: "IT",

    LinkedInId:
      "https://www.linkedin.com/in/shreya-baboota-233352282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "shreya_baboota?igsh=cWxvdjVyb203d25j",
    Photo: "https://i.postimg.cc/Z565rQzf/Shreya-Baboota.jpg",
    PhotoCutout: "https://i.ibb.co/sZrGtPH/Shreya-Baboota.png",
  },
  {
    Position: "Executive member ",
    Name: "ASHMI SINGH",
    Year: "3rd Year",
    Branch: "EE",

    LinkedInId:
      "https://www.linkedin.com/in/ashmi-singh-b9141a294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "_ashmisingh_25",
    Photo: "https://i.postimg.cc/qvFx3z0c/ASHMI-SINGH.jpg",
    PhotoCutout: "https://i.ibb.co/1fcmvfVx/ASHMI-SINGH.png",
  },
  {
    Position: "Executive member ",
    Name: "Tanaya Kaushik",
    Year: "3rd Year",
    Branch: "CE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "tanaya_kaushik",
    Photo: "https://i.postimg.cc/VND1gQGF/Tanya.jpg",
    PhotoCutout: "https://i.ibb.co/B5n60gZq/Tanya.png",
  },
  {
    Position: "Executive member ",
    Name: "Ravikant Tripathi ",
    Year: "3rd Year",
    Branch: "B. PHARMA",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "ravisamrat_108",
    Photo: "https://i.postimg.cc/2y51G771/PRAVEEN-YADAV.jpg",
    PhotoCutout: "https://i.ibb.co/whT0Lv7D/PRAVEEN-YADAV.png",
  },
  {
    Position: "Executive member ",
    Name: "Taruna Patel",
    Year: "3rd Year",
    Branch: "CHEMICAL",

    LinkedInId:
      "https://www.linkedin.com/in/taruna-patel-a72159322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "taruna_._patel?igsh=dHk4aWltZjRmbGps",
    Photo: "https://i.postimg.cc/xd0nLTRC/Taruna-Patel.jpg",
    PhotoCutout: "https://i.ibb.co/KjHJhX9r/Taruna-Patel.png",
  },
  {
    Position: "Executive member ",
    Name: "VAIBHAV SINGH",
    Year: "3rd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "/",
    Photo: "https://i.ibb.co/PsL8tsMc/SAVE-20251229-162501-jpg.jpg",
    PhotoCutout: "https://i.ibb.co/mC1xw2N3/SAVE-20251229-162501-jpg-removebg-preview.png",
  },
  {
    Position: "Executive member ",
    Name: "Divyansh Singh Rathore ",
    Year: "3rd Year",
    Branch: "ECE",

    LinkedInId:
      "https://www.linkedin.com/in/divyansh-singh-rathore-a69489271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "divyansh.rathore.2005",
    Photo: "https://i.postimg.cc/kGwxX5fb/Divyansh-Singh-Rathore.jpg",
    PhotoCutout: "https://i.ibb.co/CK310pJH/Divyansh-Singh-Rathore.png",
  },
  {
    Position: "Executive member ",
    Name: "Gaurav Vishwakarma",
    Year: "3rd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com",
    InstaId: "/",
    Photo: "https://i.postimg.cc/rFF1ZSwC/GAURAV-VISHWAKARMA.jpg",
    PhotoCutout: "https://i.ibb.co/Lh82Ld87/GAURAV-VISHWAKARMA.png",
  },
  {
    Position: "Executive member ",
    Name: "Shrestha Gupta ",
    Year: "3rd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com",
    InstaId:
      "shrestha_30.09?igsh=MTZ4bnZicDNub25kNQ==",
    Photo: "https://i.postimg.cc/rmwy2F0b/Shrestha-Gupta.jpg",
    PhotoCutout: "https://i.ibb.co/bMv2nT5g/Shrestha-Gupta.png",
  },
  {
    Position: "Executive member ",
    Name: "Jagriti Singh",
    Year: "3rd Year",
    Branch: "Civil",

    LinkedInId: "https://linkedin.com/in/jagriti-singh-22bb742a0",
    InstaId: "jagritiisingh_",
    Photo: "https://i.postimg.cc/RhPHxDZ1/Jagriti.jpg",
    PhotoCutout: "https://i.ibb.co/RWMJzw6/Jagriti.png",
  },

//111111111111

  {
    Position: "Executive member ",
    Name: "Yash Gauba",
    Year: "2nd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com/in/yash-gauba-7a1bb9328?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    InstaId: "https://www.instagram.com/yash_gauba?igsh=Z2l2YzFkcjY2aW5za",
    Photo: "https://i.ibb.co/7tQvZNfD/Yash-Gauba.jpg", 
    PhotoCutout:"https://i.ibb.co/b5bsHd2x/YG.png",
  },
  {
    Position: "Executive member ",
    Name: "Anshi Yadav",
    Year: "2nd Year",
    Branch: "CE",

    LinkedInId: "/",
    InstaId: "anshiyadav255",
    Photo: "https://i.ibb.co/YBzXRjGx/IMG-20251223-WA0049-ANSHI-YADAV.jpg",
    PhotoCutout: "https://i.ibb.co/dwKNzG0J/IMG-20251223-WA0049-ANSHI-YADAV-removebg-preview.png",
  },
  {
    Position: "Executive member ",
    Name: "Shlok",
    Year: "2nd Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/shlok-modanwal-318a53326/",
    InstaId: "Shlok__007",
    Photo: "https://i.ibb.co/G4Gx2q7F/Shlok.jpg",
    PhotoCutout: "https://i.ibb.co/jPrzC14m/S.png",
  },
  {
    Position: "Executive member ",
    Name: "Aurag Banerjee",
    Year: "2nd Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/anurag-banerjee007",
    InstaId: "0.anurag.0",
     Photo: "https://i.ibb.co/kgbDBfFQ/Anurag-Banerjee.jpg",
    PhotoCutout: "https://i.ibb.co/LXWXWs4S/AB.png",
  },
  {
    Position: "Executive member ",
    Name: "Akshansh Shukla",
    Year: "2nd Year",
    Branch: "ME",

    LinkedInId: "https://www.linkedin.com/in/namrata-singh-043157327/",
    InstaId: "/",
    Photo: "https://i.ibb.co/MxwVqys0/Akshansh-Shukla.jpg",
    PhotoCutout: "https://i.ibb.co/5Wxyr4RR/Akshansh-Shukla-removebg-preview.png",
  },
  {
      Position: "Executive member ",
    Name: "Puneet Shukla",
    Year: "2nd Year",
    Branch: "CHE",

    LinkedInId: "ttps://www.linkedin.com/in/puneet-shukla-61b17b327?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    InstaId: "_puneet.shukla_",
     Photo: "https://i.ibb.co/8JHPsHn/IMG-20260305-WA0010-Puneet-Shukla.jpg",
    PhotoCutout: "https://i.ibb.co/Pvdrg9c6/IMG-20260307-WA0007-Puneet-Shukla-removebg-preview.png",
  },
  
  
  {
    Position: "Executive member ",
    Name: "Nishant Kasana",
    Year: "2nd Year",
    Branch: "IT",

    LinkedInId: "https://www.linkedin.com/in/nishant-kasana -05289537a",
    InstaId: "nish4nt_2412",
    Photo: "https://i.ibb.co/xth8hmd2/Nishant-Kasana.jpg",
    PhotoCutout: "https://i.ibb.co/5g5dP48F/NK.png",
  },
    {
    Position: "Executive member ",
    Name: "Shashwat Singh",
    Year: "2nd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com/in/shashwatsingh2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "Sshashwat_0102",
    Photo: "https://i.ibb.co/hF1jKrCR/Shashwat-Singh.jpg",
    PhotoCutout: "https://i.ibb.co/ZQWg99F/SS.png",
  },
   {
      Position: "Executive member ",
    Name: "Ritesh Yadav",
    Year: "2nd Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/riteshydv05?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    InstaId: "/",
     Photo: "https://i.ibb.co/0yXcBNfw/Ritesh-Yadav.jpg",
    PhotoCutout: "https://i.ibb.co/xKKPyYMm/RY.png",
  },
  {
    Position: "Executive member ",
    Name: "Priyanshu Saroj",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/priyanshu-saroj-476661332/",
    InstaId: "wtfff_priyanshu",
     Photo: "https://i.ibb.co/JjNKnxcz/PRIYANSHU-SAROJ.jpg",
    PhotoCutout: "https://i.ibb.co/vvqDpy9w/PSA.png",
  },
  {
    Position: "Executive member ",
    Name: "Divyanand Chauhan",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/divyanand-chauhan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "https://www.instagram.com/lights.camera.divyanand?igsh=MTZrcm8yNHN1Mzd6Zw==",
    Photo: "https://i.ibb.co/p6z9pvKh/Divyanand-Chauhan.jpg",
    PhotoCutout: "https://i.ibb.co/S44pn369/DC.png",
  },
  {
    Position: "Executive member ",
    Name: "Balaji Mishra",
    Year: "2nd Year",
    Branch: "CE",

    LinkedInId: "https://www.linkedin.com/in/balaji-mishra-a142412bb/",
    InstaId: "paavbhaajiii",
    Photo: "https://i.ibb.co/0pCGgWGQ/Balaji-Mishra.jpg",
    PhotoCutout: "https://i.ibb.co/70GMQP0/BM.png",
  },
   {
      Position: "Executive member ",
    Name: "Vageesha Gautam",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/vageesha-gautam-484148303",
    InstaId: "moonv__07",
     Photo: "https://i.ibb.co/4wbHQRt1/IMG-20250727-WA0034-Vageesha.jpg",
    PhotoCutout: "https://i.ibb.co/DP3pWvKH/IMG-20250727-WA0034-Vageesha.png",
  },
   {
    Position: "Executive member ",
    Name: "Namrata Singh",
    Year: "2nd Year",
    Branch: "CHE",

    LinkedInId: "https://www.linkedin.com/in/namrata-singh-043157327/",
    InstaId: "/",
    Photo: "https://i.ibb.co/BKNP2w3X/Namrata-Singh.jpg",
    PhotoCutout: "https://i.ibb.co/6JmbGfkv/NS.png",
  },
  {
    Position: "Executive member ",
    Name: "Pratyaditya Singh",
    Year: "2nd Year",
    Branch: "EE",

    LinkedInId: "/",
    InstaId: "/",
    Photo: "https://i.ibb.co/ycYVJrxM/Pratyaditya-Singh.jpg",
    PhotoCutout: "https://i.ibb.co/hFtSrfkx/PS.png",
  },
  {
    Position: "Executive member ",
    Name: "Aditi Mishra",
    Year: "2nd Year",
    Branch: "Civil",

    LinkedInId: "https://linkedin.com/in/jagriti-singh-22bb742a0",
    InstaId: "jagritiisingh_",
    Photo: "https://i.ibb.co/Cpj7hzQp/Akansha-Mishra.jpg",
    PhotoCutout: "https://i.ibb.co/GQtjRPB1/AM.png",
  },
  {
    Position: "Executive member ",
    Name: "Vipul Gupta",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/vipul-gupta-44931233a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "krishu_2000_x",
    Photo: "https://i.ibb.co/twSZm2Pg/Vipul-Gupta.jpg",
    PhotoCutout: "https://i.ibb.co/60S1PZVb/IMG-20251223-035200-Vipul-Gupta-removebg-preview.png",
  },
  {
    Position: "Executive member ",
    Name: "Gautam Kansal",
    Year: "2nd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com/in/gautam-kansal-82a641376/",
    InstaId: "_gautam_kansal_",
     Photo: "https://i.ibb.co/jZfFbWL2/Screenshot-2026-03-09-144452.png",
    PhotoCutout: "https://i.ibb.co/kgFTwqvr/Screenshot-2026-03-09-144452-removebg-preview.png",
  },
  {
    Position: "Executive member ",
    Name: "Alok Kumar",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/alok-kumar-a854981a6?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    InstaId: "/",
    Photo: "https://i.ibb.co/Fqc3mXrd/Alok-kumar.jpg",
    PhotoCutout: "https://i.ibb.co/tTvc1R3M/AK.png",
  },
  {
    Position: "Executive member ",
    Name: "Anushka Shukla",
    Year: "2nd Year",
    Branch: "CE",

    LinkedInId: "https://www.linkedin.com/in/anushka-shukla-185053327/",
    InstaId: "anushka.shukla11.11",
   Photo: "https://i.ibb.co/mrfWRNC5/Anushka-Shukla.jpg",
   PhotoCutout: "https://i.ibb.co/prdyS5pz/AS.png",
  },
  {
    Position: "Executive member ",
    Name: "Gaurav Gupta",
    Year: "2nd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com/in/gaurav-gupta-a464a6361",
    InstaId: "achive_with_harshu",
    Photo: "https://i.ibb.co/ZzBxq7Ck/Gaurav-Gupta.jpg",
    PhotoCutout: "https://i.ibb.co/jkRCkXpg/GG.png",
  },
  {
    Position: "Executive member ",
    Name: "Manjari Yadav",
    Year: "2nd Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/manjari-yadav-2b4b472b8/",
    InstaId: "manjari5039",
    Photo: "https://i.ibb.co/7xcGYRwC/MANJARI-YADAV.jpg",
    PhotoCutout: "https://i.ibb.co/v6PKX415/MY.png",
  },
  {
    Position: "Executive member ",
    Name: "Mohit Pandey",
    Year: "2nd Year",
    Branch: "B.Pharm.",

    LinkedInId: "https://www.linkedin.com/in/mohit-pandey-a145913b2?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    InstaId: "https://www.instagram.com/_mohit.77?igsh=M2ZsMHVwZTl3Y2V2",
    Photo: "https://i.ibb.co/4RZQtK8d/Mohit-pandey.jpg",
    PhotoCutout: "https://i.ibb.co/Q7RWN96n/MP.png",
  },
  {
    Position: "Executive member ",
    Name: "Meenakshi Sharma",
    Year: "2nd Year",
    Branch: "ME",

    LinkedInId: "https://www.linkedin.com/in/meenakshi-sharma-797649330/",
    InstaId: "/",
    Photo: "https://i.ibb.co/kNSJ1JG/Meenakashi-Sharma.jpg",
    PhotoCutout: "https://i.ibb.co/67SGsr5H/MS.png",
  },
  {
    Position: "Executive member ",
    Name: "Anushka Mall",
    Year: "2nd Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/25anushka-mall",
    InstaId: "its_me_artist25",
     Photo: "https://i.ibb.co/gZ0yDXL6/ANUSHKA-MALL.jpg",
    PhotoCutout: "https://i.ibb.co/yB6MsX7L/AMA.png",
  },
  {
    Position: "Executive member ",
    Name: "Siddharth Singh",
    Year: "2nd Year",
    Branch: "CHE",

    LinkedInId: "https://www.linkedin.com/in/siddharth-singh-0b97bb32b/",
    InstaId: "siddharthsingh345",
     Photo: "https://i.ibb.co/7xSMf5QS/Siddharth-Singh.jpg",
    PhotoCutout: "https://i.ibb.co/JF3ttd7c/Sid.png",
  },
  {
    Position: "Executive member ",
    Name: "Ayush Kumar",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/ayush-kumar-29b7a63b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "_ayush725",
     Photo: "https://i.ibb.co/zHSf60xc/AYUSH-KUMAR.jpg",
    PhotoCutout: "https://i.ibb.co/bgDQRptL/Aku.png",
  },
  {
    Position: "Executive member ",
    Name: "Abhay Gautam",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/abhay-gautam-8ab977324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "_abhay_gautam778",
     Photo: "https://i.ibb.co/0pRgGXXJ/Abhay-Gautam.jpg",
    PhotoCutout: "https://i.ibb.co/zH5y7xLt/AGU.png",
  },
  {
    Position: "Executive member ",
    Name: "Subhanika Sharma",
    Year: "2nd Year",
    Branch: "CHE",

    LinkedInId: "https://www.linkedin.com/in/subhanika-sharma-9a063036a",
    InstaId: "subhanika_sharma16",
     Photo: "https://i.ibb.co/v417twQT/Subhanika-Sharma.jpg",
    PhotoCutout: "https://i.ibb.co/mr62GJkW/SSH.png",
  },
  {
    Position: "Executive member ",
    Name: "Shivam Kumar Gupta",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://linkedin.com/in/jagriti-singh-22bb742a0",
    InstaId: "/",
     Photo: "https://i.ibb.co/DDH8p6gn/1000123203-jpg.jpg",
    PhotoCutout: "https://i.ibb.co/vvVKbhqG/1000123203-jpg-removebg-preview-1.png",
  },
   {
    Position: "Executive member ",
    Name: "Siddhant Singh",
    Year: "2nd Year",
    Branch: "CSE",

    LinkedInId: "/",
    InstaId: "/",
     Photo: "https://i.ibb.co/BVvx9QKM/Siddhant-singh.jpg",
    PhotoCutout: "https://i.ibb.co/8LRQRYWt/Siddhant-singh-removebg-preview.png",
  },
  {
      Position: "Executive member ",
    Name: "Mahi Mall",
    Year: "2nd Year",
    Branch: "BBA",

    LinkedInId: "https://www.linkedin.com/in/mahi-mall-356557397?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    InstaId: "@mahiiiverse",
     Photo: "https://i.ibb.co/XfLHQQRk/Mahi-Mall.jpg",
    PhotoCutout: "https://i.ibb.co/TSfwrxc/Mahi-Mall-removebg-preview.png",
  },

  {
      Position: "Executive member ",
    Name: "Swaraj Kumar",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/swaraj-kumar-413542330?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    InstaId: "the_hawkeye001",
     Photo: "https://i.ibb.co/SXhgdVdx/IMG-20251210-191758-858-SWARAJ-KUMAR.webp",
    PhotoCutout: "https://i.ibb.co/Gvk5V1Rv/1000723524-499-499-SWARAJ-KUMAR.png",
  },
  {
      Position: "Executive member ",
    Name: "Krishna Jee",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/krishna-jee-7b3a5a33a/",
    InstaId: "pain_au_chocolat._",
     Photo: "https://i.ibb.co/Ld2SrV6T/IMG-20260301-134650-Krishna-Jee.avif",
    PhotoCutout: "https://i.ibb.co/ccdZb3Mg/Picsart-26-03-07-12-23-22-612-Krishna-Jee-removebg-preview.png",
  },
  {
      Position: "Executive member ",
    Name: "Nancy Singh",
    Year: "2nd Year",
    Branch: "CE",

    LinkedInId: "www.linkedin.com/in/ nancy-singh-0765b3325",
    InstaId: "/",
     Photo: "https://i.ibb.co/7NppDLTr/IMG-20260302-213937-Nancy-Singh.jpg",
    PhotoCutout: "https://i.ibb.co/mC84sN5R/IMG-20260307-WA0002-Nancy-Singh-removebg-preview.png",
  },
 
  {
      Position: "Executive member ",
    Name: "Naman Pandey",
    Year: "2nd Year",
    Branch: "EE",

    LinkedInId: "https://www.linkedin.com/in/naman-pandey-b41393313/",
    InstaId: "a.breed_apart",
     Photo: "https://i.ibb.co/nvn2gWs/IMG-20250727-WA0074-Naman-Pandey.jpg",
    PhotoCutout: "https://i.ibb.co/Pk73wMV/108503-removebg-preview-Naman-Pandey.png",
  },
  {
      Position: "Executive member ",
    Name: "Kislay Dubey",
    Year: "2nd Year",
    Branch: "CSE",

    LinkedInId: "https://www.linkedin.com/in/kislay-dubey-6ba9a83b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    InstaId: "/",
     Photo: "https://i.ibb.co/r27Qc9Qf/IMG-20260304-WA0079-Kislay-Dubey.jpg",
    PhotoCutout: "https://i.ibb.co/Vc4nxp6v/1000120527-removebg-preview-Kislay-Dubey.png",
  },
   {
      Position: "Executive member ",
    Name: "Ashish Kumar",
    Year: "2nd Year",
    Branch: "ECE",

    LinkedInId: "https://www.linkedin.com/in/ashish-kumar-240053362?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    InstaId: "ashish__yg1234",
     Photo: "https://i.ibb.co/20T4jYz5/IMG-20251106-013150-092-1-1-1-Ashish-Gupta.jpg",
    PhotoCutout: "https://i.ibb.co/PshHjLzj/IMG-20251106-013150-092-1-1-1-Photoroom-Ashish-Gupta.png",
  },

];

export default teamsData;
