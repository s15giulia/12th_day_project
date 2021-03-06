// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();

// -------- Your Code Goes Below this Line -------- 

let form =
`
<form>
   <div>
     <input type="text" placeholder="First Name" id="user-first-name"/>
   </div>
   <div>
     <input type="text" placeholder="Last Name" id="user-last-name"/>
   </div>
   <div>
     <input type="email" placeholder="Email Address" id="user-email"/>
   </div>
   <div>
     <input type="text" placeholder="Current Website URL" id="user-website"/>
   </div>
   <div>
     <select id="user-language">
       <option value="EN">English</option>
       <option value="FR">French</option>
       <option value="SP">Spanish</option>
       <option value="CH">Chinese</option>
       <option value="JP">Japanese</option>
     </select>
   </div>
   <div>
     <textarea placeholder="Your Comment" id="user-comment"></textarea>
   </div>
   <div>
     <input type="tel" placeholder="Mobile Number" id="user-mobile" />
   </div>
   <div>
     <input type="tel" placeholder="Home Number" id="user-phone" />
   </div>
</form>
`
document.querySelector('#fields').innerHTML = form
















