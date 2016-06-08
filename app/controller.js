(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    /* @ngInject */
    function MainCtrl() {

        //using vm
        var vm = this;

        vm.a1 = true;
        vm.a2 = false;
        vm.a3 = false;
        vm.a4 = false;




        vm.Submit = function() {
            var data = vm.Entry;
            alert(["State:" + data.State, "Rate:" + data.Rate, "First:" + data.FirstName, "Last:" + data.LastName, "Email:" + data.EmailAddress, "Phone:" + data.PhoneNumber, "Zip Code:" + data.ZipCode]);
        };



        vm.test = function() {
            console.log("Nice");
        }


        vm.FAQ = [{ "question": "Does it cost anything to apply?", "answer": "No. there is no cost to apply.", "showing": false },
            { "question": "How long does the process take?", "answer": "Once you submit your application at a live event, you will receive a response almost instantly. When approved, your new loan will be processed and finalized the same day.", "showing": false },
            { "question": "What's my interest rate and term on my new loan?", "answer": "Your interest rate and term will vary based on the lender you're matched with.", "showing": false },
            { "question": "I have bad credit. Can I still apply?", "answer": "Yes. Many lenders specialize in providing loans to people who receive various types of benefits such as Social Security, Retirement or Veteran's Benefits.", "showing": false },
            { "question": "How is my private information protected?", "answer": "Your information is encrypted and securely transmitted to the lender, who then decides whether to fund your loan. ", "showing": false },
            { "question": "I don't have an auto loan. Can you help me get one?", "answer": "Absolutely. We work with over 40 different local and nationwide lenders that will provide a program that fits your current financial situation.", "showing": false },
            { "question": "What if I no longer want my car and would like to trade it in?", "answer": "If you would like to trade out of your car we will align you with one of our local dealer partners to find you the vehicle you love!", "showing": false },
            { "question": "I have a lease. Can you still Fix My Loan?", "answer": "Yes. A lease is just another form of auto loan. We specialize in both conventional and lease financing. ", "showing": false }
        ];

        vm.reviews = [{
                "title": "Super Service",
                "text": "My experience was very positive. The website was user friendly and fast. Although there was an error transferring the information on my page to the lender, they called before I could physically log in to their website. They told me exactly what to do and followed through with processing on the next business day exactly like they said they would. I will definitely use creditloan.com again.",
                "name": "Traci"
            }, {
                "title": "Greg is the best!",
                "text": "He worked with me to get out of my high car payment.",
                "name": "Ashley"
            }, {
                "title": "Truely great people.",
                "text": "These guys love what they do and you can tell.",
                "name": "MATT"
            }, {
                "title": "Simple",
                "text": "I waited to long to do this.  Should have done it sooner.",
                "name": "Megan"
            }, {
                "title": "Thank you Jordan.",
                "text": "Just when I though I couldn't keep my car Jordan came to the rescue.  I'm so glad he was able to help me",
                "name": "Stephen"
            }, {
                "title": "Helpful",
                "text": "I was relieved to find that they are just regular people trying to help others.",
                "name": "Adam"
            }, {
                "title": "I feel educated",
                "text": "I didn't end up fixing my loan because I was so close to the end, but Josh really helped me understand the ins and outs of credit.",
                "name": "Anthony"
            }, {
                "title": "Fast",
                "text": "Quick process.",
                "name": "Rick"
            }, {
                "title": "This really works!",
                "text": "I really couldn't believe how easy this was.  I was kicking myself for not having done it sooner.",
                "name": "Jessica"
            }, {
                "title": "Payment went down $126!",
                "text": "The guys at FixMyLoan are car loan ninjas.",
                "name": "Patrick"
            },


        ];

        vm.autos = [
            "acura.png",
            "audi.png",
            "bmw.png",
            "buick.png",
            "cadillac.png",
            "chevy.png",
            "chrysler.png",
            "dodge.png",
            "fiat.png",
            "ford.png",
            "gmc.png",
            "honda.png",
            "hyundai.png",
            "infiniti.png",
            "jeep.png",
            "kia.png",
            "landrover.png",
            "lexus.png",
            "lincoln.png",
            "mazda.png",
            "mercedes.png",
            "mini.png",
            "mitsubishi.png",
            "nissan.png",
            "ram.png",
            "scion.png",
            "subaru.png",
            "toyota.png",
            "volvo.png",
            "vw.png"
        ];

        vm.States = [

            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"

        ];

        vm.Rates = [];

        for (var i = 0; i < 30; i++) {
            vm.Rates.push(i)
        };






    }
})();
