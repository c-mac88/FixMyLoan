(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['CarFactory', '$log'];

    /* @ngInject */
    function MainCtrl(CarFactory, $log) {

        //using vm
        var vm = this;

        vm.a1 = true;
        vm.a2 = false;
        vm.a3 = false;
        vm.a4 = false;






            // // ref: http://stackoverflow.com/a/1293163/2343
            // // This will parse a delimited string into an array of
            // // arrays. The default delimiter is the comma, but this
            // // can be overriden in the second argument.
            // function CSVToArray(strData, strDelimiter) {
            //     // Check to see if the delimiter is defined. If not,
            //     // then default to comma.
            //     strDelimiter = (strDelimiter || ",");

            //     // Create a regular expression to parse the CSV values.
            //     var objPattern = new RegExp(
            //         (
            //             // Delimiters.
            //             "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

            //             // Quoted fields.
            //             "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

            //             // Standard fields.
            //             "([^\"\\" + strDelimiter + "\\r\\n]*))"
            //         ),
            //         "gi"
            //     );


            //     // Create an array to hold our data. Give the array
            //     // a default empty first row.
            //     var arrData = [
            //         []
            //     ];

            //     // Create an array to hold our individual pattern
            //     // matching groups.
            //     var arrMatches = null;


            //     // Keep looping over the regular expression matches
            //     // until we can no longer find a match.
            //     while (arrMatches = objPattern.exec(strData)) {

            //         // Get the delimiter that was found.
            //         var strMatchedDelimiter = arrMatches[1];

            //         // Check to see if the given delimiter has a length
            //         // (is not the start of string) and if it matches
            //         // field delimiter. If id does not, then we know
            //         // that this delimiter is a row delimiter.
            //         if (
            //             strMatchedDelimiter.length &&
            //             strMatchedDelimiter !== strDelimiter
            //         ) {

            //             // Since we have reached a new row of data,
            //             // add an empty row to our data array.
            //             arrData.push([]);

            //         }

            //         var strMatchedValue;

            //         // Now that we have our delimiter out of the way,
            //         // let's check to see which kind of value we
            //         // captured (quoted or unquoted).
            //         if (arrMatches[2]) {

            //             // We found a quoted value. When we capture
            //             // this value, unescape any double quotes.
            //             strMatchedValue = arrMatches[2].replace(
            //                 new RegExp("\"\"", "g"),
            //                 "\""
            //             );

            //         } else {

            //             // We found a non-quoted value.
            //             strMatchedValue = arrMatches[3];

            //         }


            //         // Now that we have our value string, let's add
            //         // it to the data array.
            //         arrData[arrData.length - 1].push(strMatchedValue);
            //     }

            //     // Return the parsed data.
            //     return (arrData);
            // }






        vm.Submit = function() {
            console.log(vm.Entry);
            var data = vm.Entry;
            CarFactory.postUser(data).then(
            function(response) {
                console.log(response.data);
            },
            function(error) {
                $log(error);
            }
        )};


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
