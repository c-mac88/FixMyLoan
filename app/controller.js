(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['RegistrationFactory', '$http'];

    /* @ngInject */
    function MainCtrl(RegistrationFactory, $http) {
        var vm = this;
        vm.years = [];

        for (var i = 0; i < 18; i++) {
            vm.years.push(1999 + i)
        };

        vm.a1 = true;
        vm.a2 = false;
        vm.a3 = false;
        vm.a4 = false;


        vm.next = function() {
            if (vm.Entry.State == null) {
                alert("Invalid Response, please try again.");
            } else {
                vm.a1 = false;
                vm.a2 = true;
            }
        };

        vm.next2 = function() {
            if (vm.Entry.InterestRate == null) {
                alert("Invalid Response, please try again.");
            } else {
                vm.a2 = false;
                vm.a3 = true;
            }
        };

        vm.next3 = function() {
            if (vm.Entry.FirstName == null | vm.Entry.LastName == null | vm.Entry.EmailAddress == null | vm.Entry.PhoneNumber == null | vm.Entry.ZipCode == null) {
                alert("Invalid Response, please try again.");
            } else {
                vm.a3 = false;
                vm.a4 = true;
            }
        };

        vm.getMakes = function(year) {
            vm.Entry.CarModel = "";
            vm.Entry.CarMake = "";
            vm.Models = [];
            vm.Makes = [];
            $http.get('../autos.json')
                .then(function(response) {
                    vm.autos = response.data;

                    for (var i = 0; i < vm.autos.length; i++) {
                        var exists = contains.call(vm.Makes, vm.autos[i].model_make_id);
                        if (vm.autos[i].model_year == year && !exists) {
                            vm.Makes.push(vm.autos[i].model_make_id);
                        } else {
                            continue;
                        }
                    }


                });

        };



        vm.getModels = function(make) {
            vm.Entry.CarModel = "";
            vm.Models = [];
            for (var i = 0; i < vm.autos.length; i++) {
                var exists = contains.call(vm.Models, vm.autos[i].model_name);
                if (vm.autos[i].model_make_id == make && !exists) {
                    vm.Models.push(vm.autos[i].model_name);
                } else {
                    continue;
                }
            }

        };

        function contains(needle) {
            // Per spec, the way to identify NaN is that it is not equal to itself
            var findNaN = needle !== needle;
            var indexOf;

            if (!findNaN && typeof Array.prototype.indexOf === 'function') {
                indexOf = Array.prototype.indexOf;
            } else {
                indexOf = function(needle) {
                    var i = -1,
                        index = -1;

                    for (i = 0; i < this.length; i++) {
                        var item = this[i];

                        if ((findNaN && item !== item) || item === needle) {
                            index = i;
                            break;
                        }
                    }

                    return index;
                };
            }

            return indexOf.call(this, needle) > -1;
        };




        vm.Submit = function() {
            if (vm.Entry.CarYear == null | vm.Entry.CarMake == null | vm.Entry.CarModel == null | vm.Entry.CarMiles == null | vm.Entry.CarMonthlyPayment == null) {
                alert("Invalid Response, please try again.");
            } else {
                RegistrationFactory.postUser(vm.Entry).then(
                    function(response) {
                        console.log(response.data);
                    },
                    function(error) {
                        console.log(error);
                    });
            }

        };


        vm.FAQ = [{ "question": "Does it cost anything to apply?", "answer": "No. there is no cost to apply.", "showing": false },
            { "question": "How long does the process take?", "answer": "Once you submit your application at a live event, you will receive a response almost instantly. When approved, your new loan will be processed and finalized the same day.", "showing": false },
            { "question": "What's my interest rate and term on my new loan?", "answer": "Your interest rate and term will vary based on the lender you're matched with.", "showing": false },
            { "question": "I have bad credit. Can I still apply?", "answer": "Yes, Lots of banks have programs for customers with bad, limited, or no credit.", "showing": false },
            { "question": "How is my private information protected?", "answer": "Your information is encrypted and securely transmitted to the lender, who then decides whether to fund your loan. ", "showing": false },
            { "question": "I don't have an auto loan. Can you help me get one?", "answer": "Absolutely. We work with over 40 different local and nationwide lenders that will provide a program that fits your current financial situation.", "showing": false },
            { "question": "What if I no longer want my car and would like to trade it in?", "answer": "If you would like to trade out of your car we will align you with one of our local dealer partners to find you the vehicle you love!", "showing": false },
            { "question": "I have a lease. Can you still Fix My Loan?", "answer": "Yes. A lease is just another form of auto loan. We specialize in both conventional and lease financing. ", "showing": false }
        ];

        vm.reviews = [{
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
            }


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
