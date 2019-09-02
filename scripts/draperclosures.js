var section = document.getElementById("draperclosures");
            var requestURL = 'https://raw.githubusercontent.com/luciamata5/luciamata5.github.io/master/temples.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();

            request.onload = function() {
            var templeclosures = request.response;
            populate(templeclosures);
            

            function populate(templeclosures) {
                var closures = templeclosures['temples'];
                for (var i = 0; i < closures.length; i++ ) {
                    if (closures[i].name === 'Draper') {
                        var article = document.createElement("article");
                        var list = document.createElement("ul");
                        var closureslist = closures[i].closures;

                        for (var x = 0; x < closureslist.length; x++) {
                            var listItem = document.createElement("li");
                            listItem.textContent = closureslist[x];
                            list.appendChild(listItem);
                        }

                        article.appendChild(list);
                        section.appendChild(article);
                    }
                }
            }
            }