// Skills Icons
import htmlIcon from "./images/html.svg"
import reactIcon from "./images/React.png"
import jsIcon from "./images/javascript.svg"
import railsIcon from "./images/Rails-Logo.svg"
import reduxIcon from "./images/Redux.png"
import rubyIcon from "./images/ruby.png"
import cliImage from "./images/CLI-Image.jpeg"
import foodApp from "./images/foodApp.jpeg"
import nutrientReact from "./images/nutrientreact.jpeg"
import linkedIn from "./images/linkedin.png"
import portrait from "./images/portrait.jpeg"

// Social Icon
import githubIcon from "./images/github.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Anthony",
  headerTagline: [
    //Line 1 For Header
    "Full Stack Developer,",
    //Line 2 For Header
    "Content Specialist",
    //Line 3 For Header
    "and Student",
  ],
  //   Header Paragraph
  headerParagraph:
    "My professional background is in E-commerce, and have held roles from front facing client services to back-office inventory planning/fulfillment. As an avid believer in continious learning, I have been lucky enough to have found a path to becoming a developer. ",

  //Contact Email
  contactEmail: "anthony.mai530@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "CoinMarketCap-CLI", //Project Title - Add Your Project Title Here
      para:
        "Simple Ruby Gem that scrapes and returns top 100 Cryptocurrencies, market cap, and current price from your CLI.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        cliImage,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/AnthonyM5/CoinMarketCap-CLI",
    },
    {
      title: "Food-Nutrient-App", //Project Title - Add Your Project Title Here
      para:
        "Rails based application that is built on Food Data Central API to search through food database, and sort by nutrient values.  Users can save meals and leave comments", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        foodApp,
      //Project URL - Add Your Project Url Here
      url: "https://foodnutrient-mvp-build.herokuapp.com/",
    },
    {
      title: "React-Nutrient-App", //Project Title - Add Your Project Title Here
      para:
        "React/Redux based Single Page App that is built on USDA Food Data API.  Prediction tool uses Mobilent to identify your meal from an image, and  users can instantly search foods and sort by nutrient values.  ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        nutrientReact,
      //Project URL - Add Your Project Url Here
      url: "https://nutrient-react-front.herokuapp.com/",
    }
    // {
    //   title: "Project Four", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
  "   Since 2019 I have served as a Content Specialist for AJ Madison where I have been part of a content team that utilizes a custom CMS to build/update product pages, and as part of a larger merchandising team that has generated revenue increase of 50%+ YOY.  We coordinate with large appliance manufacturers to update a large online appliance catalog, provide up to date content assets, and build/update product pages in real time via a custom Content Management System.  In a project management role, I oversee an overseas team to help perform periodic audits of existing product SKUs, and implement new experiences.",

  aboutParaTwo:
  "   My technical experience in developing a Ruby on Rails application with PostgreSQL has taught me how to define data base models, set up relationships, apply RESTFUL conventions to CRUD routes and practice with APIs.  The deployment phase of the application process taught me to optimize memory usage, and use search queries that limited the number of times requests were made.  My experience developing a React/Redux single page application provided me the opportunity to learn about JavaScript's event delegation, React Routing, and combine this knowledge to utilize Ruby on Rails as an API.",
  // aboutParaThree:
  //   "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    portrait,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Experienced with HTML5 semantics like Sections Outlines, Audio/Video Embedding, Web Forms, and more.",
    },
    {
      img: jsIcon,
      para:
        "Strong familiarty with OOP, CRUD principles, and experienced with ES6 and Javascript APIs like events, history, in conjunction with Fetch API.",
    },
    {
      img: rubyIcon,
      para:
        "Strong background in Ruby Syntax, OOP principles and CRUD actions in MVC platform.  Experienced with datatypes and troubleshooting with IRB" 
    },
    {
      img: reactIcon,
      para:
        "Experienced with React design patterns, JSX, DOM manipulation and event handlers. Strong familiarity with routing and connecting to Redux state management.",
    },
    {
      img: reduxIcon,
      para:
        "Experienced with actions-reducers, data-flow via props, state management via reducers/actions, and store",
    },
    {
      img: railsIcon,
      para:
        "Experienced with Rails as an MVC, and as back-end API.  Strong familiarity with ActiveRecord and associations, postgreSQL and more.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Learn More",
  // promotionPara:
  //   "Follow me via my blog, LinkedIn, or Github",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/AnthonyM5" },
    {
      img: linkedIn,
      url: "https://www.linkedin.com/in/anthonymai5/",
    },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    // {
    //   img: instagramIcon,
    //   url: "https://www.instagram.com/",
    // },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
