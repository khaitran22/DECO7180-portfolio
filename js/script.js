var title_deli = {
    '2a': 'DELIVERABLE 2A',
    '2c': 'DELIVERABLE 2C',
    '2d': 'DELIVERABLE 2D',
    '2e': 'DELIVERABLE 2E',
    'portfolio': 'DELIVERABLE 3'
}

var deli_content = {
    '2a': `<h4>Requirment:</h4>
    <p>In the first assessment, all students are required to pick up a dataset from <a
            href="https://www.data.qld.gov.au/">data.qld.gov.au</a> or <a
            href="https://data.gov.au/">data.gov.au</a> and "decorate" the dataset in an interactive way.</p><br>
    <h4>Motivation:</h4>
    <p>For myself, I always have a strong passion with animal because I love watching and reading about animal,
        especially wildlife animals. Moreover, I have found most of the current websites about animals is quite
        boring (e.g., Wikipedia). So I think I want to make a website about animal. The main motivation about this
        website is to advertise the biodiverse ecosystem in Queensland and Australia. At this stage, I have no idea
        how to make it interactive, I just have an idea to make it nice-looking.</p><br>
    <h4>Inital Sketch:</h4><img src="./assets/first_home_page_design.png">
    <p>The above image is quite inital design of the homepage for the website. It\'s really simple, just a bunch of
        cards and each card represents an animal. It\'s non-interactive. Also, at first, my thoughts would be a
        mobile application rather than a website.</p><img src="./assets/first_detail_page_design.png">
    <p>Then, it moves to the detail page. Again, it\'s not really interactive. Only an image of the animal as the
        background. Then there is some text being on top of the image.</p><br>
    <h4>Final Poster:</h4>
    <img src="./assets/final_poster.png">
    <h4>Result:</h4>
    <p>Deliverable 2A was somehow succesful for me. I got an "PASS" for this assessment. However, as the initial
        layout are quite simple, I got some bad feedbacks about the creativity for website interaction though my
        communication and idea expression were clear. Hence, if my future team agreed using my idea as the main
        product, there is a lot of works need to do.</p><button class="close-deli-button">Close!</button>`,
    '2c': `  <h4>Requirment:</h4>
    <p>This assessment is after the team has been formed. My group includes me, Paul, Bagus and Terrence. In
        this assessment, we were required to propose a concept for the group\'s product (i.e., what the
        product is, what the main dataset is used, how to make the product become interactive with users,
        why is this product, etc.). After deciding everything, we also had to present it in front of class
        and submit a proposal report. The report must clearly address the mentioned requirements.</p><br>
    <h4>Main features:</h4>
    <p>After the meeting in which the team formation was conducted, other people agreed that my idea would
        be used to develop further as the main product for the group. Therefore, I volunteered to be the
        main person having idea how to make the website become interactive and interesting. There are 2 type
        of pages on the website: homepage and detail page.</p>
    <p>For the homepage, after playing around with the <a href="https://www.awwwards.com/">awwwards.com</a>
        website (i.e., the website promotes awesome, creative website) and accidently encountering the <a
            href="https://www.seventh.tv/">seventh.tv</a>, I was inspired by the idea of the flying around
        effect which is shown in the video below and proposed that idea for the homepage. Luckily, all team
        members agreed for that.</p><video src="./assets/flying_around.mp4" autoplay muted loop></video>
    <p>With the flying around effect, I recommended the homepage to be a map of Queensland and when users
        click on an area on the QLD map, a page showing the information of animals living in that area will
        display with each animals will be placed in each section on the detail page.</p>
    <h4>Presentation & Report:</h4>
    <p>For the presentation and report, because the group\'s project based on the main idea, I were the main
        person providing justification in motivation for this idea. I also were responsible for structuring
        the content of report and presentation.</p>
    <h4>Result:</h4>
    <p>Our team's concept had many positive feedbacks from course coordinator as well as classmates.</p>
    <img src="./assets/feed_back_2c.png">
    <p>Moreover, there was a good feedback from the course coordinator that we should focus to one or two
        environments but did an excellent works on those environments. That was the direction of our
        website in the future.</p>
    <button class="close-deli-button">Close!</button>`,
    '2d': `<h4>Requirment:</h4>
            <p>Deliverable 2D is the assessment where our group report what we have done so far. In 3 weeks after
                the deliverable 2C, we finalized the conceptual design, defined key priorities for the website,
                implemented a part of website, made a presentation reporting progress, and wrote a report about
                these things.</p>
            <br>
            <h4>Concept Changes:</h4>
            <p>With the feedback we got from the course coordinator about perfecting a environment rather than many
                environments, we decided to go with this idea. We brainstormed and decided rainforest would be the
                first environment because many animals living in this area is unique to Queensland such as
                Cassorawy. The main idea about flying around homepage was kept but Angler (our group's name) agreed
                to adjust the homepage a bit to make it more interesting. In stead of showing all animals in that
                habitat as the initial idea, we would hide the animals in the background and users have to find
                them. We also decided to have parallax images in the detail page to make it more eye-catching from
                Paul's idea.</p>
            <br>
            <h4>My contribution:</h4>
            <p>My first target for in this deliverable is to make the homepage that will fly based on the mouse
                cursor of users. At first, I had no idea how I could make the image of the homepage move based on my
                pointer but after referencing this <a
                    href="https://css-tricks.com/moving-backgrounds-with-mouse-position/">source</a> and customizing
                based on the website, I finally could make it work. Below is the code snippets of moving background
                function in JQuery I wrote by myself to make the homepage work.
            </p>
            <pre>
                <code class="language-javascript">
                    function mouse_move(id, top, left, e) {
                        $(id).offset({
                            top: top - e.pageY,
                            left: left - e.pageX
                        });
                    }

                    $('#background-image').mousemove(function (e) {
                        e.preventDefault();
                        var pageX = -e.pageX + "px";
                        var pageY = -e.pageY + "px";
                
                        $(this).css("background-position", pageX + " " + pageY);
                        mouse_move('.cassowary', square_position_top, square_position_left, e);
                        mouse_move('.cassowary_cover', cassorawy_cover_top, cassowary_cover_left, e);
                        mouse_move('.brown_snake', brown_snake_top, brown_snake_left, e);
                        mouse_move('.tree_kangaroo, .tree_kangaroo_cover', tree_kangaroo_top, tree_kangaroo_left, e);
                        mouse_move('.lace_monitor', lace_monitor_top, lace_monitor_left, e);
                        mouse_move('.whip_bird, .whip_bird_cover', whip_bird_top, whip_bird_left, e);
                    });
                </code>
            </pre>
            <br>
            <p>Moreover, to make the website more attractive, I implemented a small pop-up appearing with the name
                of the animal with a funny quote. The image below show this feature. The feature can be implemented
                use <b>tooltip()</b> funtion in Bootstrap library.</p>
            <br>
            <img src="./assets/animal_popup.png">
            <br>
            <p>During the implementation for the homepage, there was an issue. Due to the policy, Google Chrome
                browser does not allow to automatically play audio without users' interaction with the website
                first. If the audio want to automatically be played without users' interaction, it has to be muted.
                After I brought this issue and raised with other teammates, Angler agreed to implement a splash page
                forcing users interacting with the website first to turn on the sound.</p>
            <p>Another issue is the tooltip() function cannot be intialized properly because I used JQuery UI
                library and it overwrote the tooltip() function of Bootstrap. To resolve this problem, I followed a
                <a href="https://stackoverflow.com/a/54464578">comment</a> on Stack Overflow. The main idea of this
                solution is to cache before JQuery UI overwrite the function.
            </p>
            <br>
            <h4>Result:</h4>
            <p>For the website, after resolving mentioned issues, it worked well.</p>
            <p>However, I did not use the API to display the animal website though it is one of the requirements for
                this assessment. Our group got a mark down for this.</p>
            <p>We also did not have any references for all the 3rd party libraries we used to implement the website.
                both in code and in report. The mark of this assessment went down again.</p>
            <p>Finally, although we got some good feedbacks how to improve the website further but we did not
                mentioned it properly in the report.</p>
            <p>Overal, Angler did not do well in this assessment and we only got <b>"PASS"</b> score for this assessment
                &#x1F614;. All team members thought we would get a High Distinction.</p>
            <button class="close-deli-button">Close!</button>`,
    '2e': `<h4>Requirment:</h4>
            <p>Deliverable 2E is the final stage of the group project. In last 4 weeks of the semester, we completed
                all key functionalities, implemented an extra environment and advanced functionalities, pitched the
                product at tradeshow and wrote a final reflection report.</p>
            <br>
            <h4>Final Website:</h4>
            <p>In the last 4 weeks of the semester, the progress of website implementation was speeded up so that
                all key functionalities were completed. Because my role is the lead programmer of the website, I
                coded up nearly the whole functionalities. Every Tuesday, my team spent 8-9 hours and sat togother
                so that we could complete all website's basic functions on time and implemented advanced features.
            </p>
            <p>The first part of the website I want to share here is the summary details of an
                animal. To visualize the
                data from the API, it took me a day and wrote 8 functions in Javascript &#x1F602;. This summary
                detail is
                taken entirely from the API. However, the raw data is quite noisy and not useful for visualization, I
                had to clean the data first and selected information that is useful for visualization. Moreover, the
                Conservation Status adapts dynamically to the animal. The image below shows how I visualized the
                data into useful way. The image shows the visualization and the code snippet below show the raw data
                taken from the API.</p>
            <img src="./assets/animal_detail_summary.png">
            <pre>
                <code>
                    {"Species":
                        {
                            "TaxonID":522,
                            "ScientificName":"Boiga irregularis",
                            "AcceptedCommonName":"brown tree snake",
                            "KingdomName":"Animalia",
                            "KingdomCommonName":"animals",
                            "ClassName":"Reptilia",
                            "ClassCommonName":"reptiles",
                            "FamilyName":"Colubridae",
                            "FamilyCommonName":"colubrid snakes",
                            "FamilyRank":970120,"IsSuperseded":false,
                            "TaxonomyAuthor":"(Merrem, 1802)",
                            "AlternateCommonName":["night tiger","night tiger snake","doll's-eye snake","banded cat snake"],
                            "ConservationStatus":
                            {
                                "NCAStatus":"Least concern",
                                "NCAStatusCode":"C",
                                "BOTStatus":"Low",
                                "BOTStatusCode":"L",
                                "ConservationSignificant":false
                            },
                            "Endemicity":"N",
                            "PestStatus":"Venomous",
                            "Profile":{},
                            "Image":[
                            {
                                "Type":"Preferred Image",
                                "Format":"jpg",
                                "URL":"https:\/\/wildnet.itp.qld.gov.au\/wws\/images\/3565",
                                "Reference":"McGreevy, D.,Queensland Government,1977",
                                "Title":"Boiga irregularis (brown tree snake) photograph"
                            },
                            {
                                "Type":"Available Image",
                                "Format":"jpg",
                                "URL":"https:\/\/wildnet.itp.qld.gov.au\/wws\/images\/3566",
                                "Reference":"Queensland Government,1986",
                                "Title":"Boiga irregularis (brown tree snake) photograph"
                            },
                            {
                                "Type":"Available Image",
                                "Format":"jpg",
                                "URL":"https:\/\/wildnet.itp.qld.gov.au\/wws\/images\/5284",
                                "Reference":"Hogan, L.,Queensland Herbarium, DES",
                                "Title":"Boiga irregularis (brown tree snake) photograph"
                            }]
                        },
                        "SpeciesSightingsUrl":"http:\/\/apps.des.qld.gov.au\/species\/?op=getsurveysbyspecies&taxonid=522"
                    }
                </code>
            </pre>
            <p>To help users gain more information about the distribution of an animal, Angler agreed to use the
                distribution image from the Wikipedia. However, it is not scalable if we want to expand our project.
                Therefore, I came up new idea that I used a second API just to get the distribution map of that
                animal. I then used the API from the <a
                    href="https://biocache.ala.org.au/search#tab_simpleSearch">Atlas of Living Australia</a> with
                input as the scientific name of that animal. By doing this way, I can scale the website to thousans
                animal without worrying about the distribution map images. The code snippet below shows how I used
                the second API from <a href="https://biocache.ala.org.au/search#tab_simpleSearch">Atlas of Living
                    Australia</a></p>
            <pre>
                <code class="language-markup">
        &lt;img class='map' src='" + 'https://biocache.ala.org.au/ws/density/map?q=' + getScientificName(data) + "'&gt;
                </code>
            </pre>
            <p>Because Angler decided to expand website into the second environment, then we wanted users to have a
                page so that they can select the environment they want to visit. Hence, I decided to build an
                index page in which users can select environment and move the habitat page (previously index page)
                down a level.</p>
            <img src="./assets/index.png">
            <p>Beside, I also implemented some extra functions to make the website more "logic". An example is that
                when users open the detail page of an animal, the background sound volume automatically turns down
                and turns up to normal when users close the page. Another example is that the detail sound for each
                animals will turn off when users close the detail page regardless it's turning on or not.</p>
            <br>
            <h4>Tradeshow:</h4>
            <p>During the tradeshow, Angler had chance to present the work for examiners and received a lot of
                positive feedbacks about the interactivities and creativities. Also, our course coordinator, Lorna,
                nominated our website for the Innovation Showcase at ITEE under Best User Experience Deisng and
                People's Choice categories.</p>
            <img src="./assets/team.jpg">
            <img src="./assets/tradeshow_setup.jpg">
            <br>
            <h4>Reflection:</h4>
            <p>I'm really pleased with the result of this group project. I got great team members who have supported
                me a lot in this course. Regarding the website, all the core functionalities were implemented
                successfully, making the website much more interactive and interesting that my initial concept. This
                is proved through the nomination for the Innovation Showcase event.</p>
            <p>For the final delivery report, I tried to perfect it by look through the comments given for the
                assessment 2D and asked tutors during the helping session to ensure every requirements to be met.
            </p>
            <p>Overal, I feel proud of myself and my team in this group project. That's awesome and our hardwork
                pays off!</p>
            <button class="close-deli-button">Close!</button>`,
    'portfolio': `<h4>Portfolio Idea:</h4>
                    <p>Because the portfolio is implemented after the deliverable 2E, it is near to the final exam period and
                        a lot of assignments due at the same time. Hence, I want a wesite that is <b>MINIMALIST,
                            SCALABLE</b> but <b>EFFECTIVE</b> so that I don't spend much time on that. Finally, it also demonstrates my coding skills, especially coding skills in JavaScript.
                    </p>
                    <br>
                    <h4>Portfolio Sketching:</h4>
                    <p>Keeping those requirements I set for the website, I did an inital layout as below:</p>
                    <img src="./assets/portfolio_layout.jpg">
                    <p>Because the layout of each deliverable can be re-used, card layout is my option. Then, I will embed
                        it into a slideshow. The slideshow from my opinion is simple but effective to show there are
                        actually many deliverables. The video at the top of the website makes the website look more dynamic,
                        which is eye-catching to the
                        users. The navigation bar should display all the sub-sections in the website and be always at the top of the website 
                        so that users can
                        navigate to that sub-section quickly.</p>
                    <br>
                    <h4>Actual Implementation:</h4>
                    <p>The layout is the part I went and implemented first because it is the most important part of the
                        website. To help structure the website by the CSS, I used the dummy text to visualize how the
                        website looks like when it has the content in it. After filling all by dummy text, I started coding
                        CSS and gathering relevant resources for the website such as color theme, video for the website.
                        After finishing all the structure, the last step is to replace the dummy text with the real content.
                    </p>
                    <p>The difficult of this part is to code the slideshow with card by myself. I tried to implement it for
                        a day but it failed. Therefore, I decided to use the carousel implementation in the <a
                            href="https://getbootstrap.com/">Bootstrap library</a> since it's straight forward to embed the
                        Bootstrap, easy to implement and can be customed for card implementation.</p>
                    <video src="./assets/slideshow.mp4" muted autoplay loop></video>
                    <p>Regarding the background video at top, I selected the video of ocean because I love it. I was born
                        in a smal
                        coastal town so I live with sea when I was child. Also, the color theme of the website have only 2
                        main colors (i,e,. white and color code taken from the background video at top) so that the website
                        looks simple and match with the ocean theme. I also used the same color as the background color to
                        separate different sub-sections in the website.</p>
                    <p>To make the website look more professional, I also created the favicon for the website, it's simple
                        just the starting letter in my name and having same color as the theme. The favicon is shown below:
                    </p>
                    <img src="./assets/favicon.png"
                        style="width: 25%; box-shadow:rgba(0, 0, 0, 0.75) 0px 5px 15px; border-radius: 10px;">
                    <p>In terms of demonstrating JavaScript skills, I implemented the hover effect on the card. When users
                        hover the mouse on the card, the shadow effect displays to make the feeling that the card actually
                        jumps out. Moreover, I tracked which deliverable is clicked and the corresponding content was added
                        later with the event handler for the <i>"Close!"</i> button.</p>
                    <p>At the time I implemented this website, my team was nominated for the ITEE Innovation Showcase on
                        Thursday 4th November. Therefore, I included another section where I reported the progress at this
                        event.</p>
                    <br>
                    <h4>Reflection:</h4>
                    <p>Overal, I am pleased with my implementation of the portfolio website because all the requirements I
                        set at the first time were accomplished. I like the color theme and the
                        way the content is structured, it is minimalist but effective. Also, it is scalable in terms of
                        adding more
                        sub-sections or more deliverables. If more sections are added, I only need to care about the
                        content. For learning new thing, actually I don't learn anything new when I do the portfolio but
                        developing the portfolio helps me review and enhance my coding skills.</p>
                    <button class="close-deli-button">Close!</button>`
}

$(document).ready(function () {
    $('.deliverable').hover(function () {
        $(this).css("box-shadow", "rgba(0, 0, 0, 0.75) 0px 5px 15px");
    }, function () {
        $(this).css("box-shadow", "0 0 0 0 rgba(0,0,0,0)");
    });

    var window_width = $(window).width();
    if (window_width <= 1080) {
        $('.top_nav').css("display", "none");
    }

    $('#read_more, #read_more, #read_more, #read_more, #read_more').click(function (e) {
        e.preventDefault();
        $(".deli_content").css({ "display": "block" });
    });

    $(".close-deli-content, .deliveralble-outside").click(function () {
        $(".deli_content").css({ "display": "none" });
    });

    $('#footer button').click(function (e) {
        e.preventDefault();
        $(".reference").css({ "display": "block" });
    });

    $('.reference-outside, .close-reference-content').click(function (e) {
        $(".reference").css({ "display": "none" });
    });

    $('.2a, .2c, .2d, .2e, .portfolio').click(function (e) {
        e.preventDefault();
        $('.deliveralble-content-header h1').empty();
        $('.deliveralble-content-header h1').append(title_deli[$(this).attr('class')]);
        $('.deliveralble-content-body').empty();
        $('.deliveralble-content-body').append(deli_content[$(this).attr('class')]);
        $('.deliveralble-content-body').delegate('.close-deli-button', 'click', function () {
            $(".deli_content").css({ "display": "none" });
        });
    });

    // Reference from: https://stackoverflow.com/a/7717572
    document.querySelectorAll('a[href^="#"]').forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


});





